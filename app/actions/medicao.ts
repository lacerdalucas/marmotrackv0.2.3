'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { 
  aprovarPedidoSchema, 
  agendarMedicaoSchema, 
  concluirMedicaoSchema,
  type AprovarPedidoInput,
  type AgendarMedicaoInput,
  type ConcluirMedicaoInput
} from '@/lib/validations/medicao_v2';

// FUNÇÃO 1: Aprovar o Pedido Comercial
export async function aprovarPedidoAction(rawData: AprovarPedidoInput) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const parsed = aprovarPedidoSchema.safeParse(rawData);
    if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
    const data = parsed.data;

    // Atualiza o Pedido
    const { error: updateErr } = await supabase
      .from('pedidos_v2')
      .update({ 
        status_comercial: 'Aprovado',
        precisa_medicao: data.precisa_medicao,
        data_aprovacao: new Date().toISOString()
      })
      .eq('id', data.pedido_id);

    if (updateErr) return { success: false, message: 'Falha ao aprovar pedido.' };

    // A fila de medição do PCP agora é alimentada automaticamente de forma dinâmica 
    // pela consulta na UI (Pedidos Aprovados sem medição ativa), 
    // então não precisamos inserir um registro "Pendente" (que violava a constraint).

    // Registra o Evento Imutável (Event Sourcing)
    await supabase.from('eventos_operacionais').insert({
      pedido_id: data.pedido_id,
      usuario_id: user.id,
      etapa_atual: data.precisa_medicao ? 'Fila de Medição' : 'Fila de Projeto',
      tipo_evento: 'Aprovação Comercial',
      observacoes: `Pedido Aprovado. ${data.precisa_medicao ? 'Aguardando Medição.' : 'Medição Dispensada.'} Obs adicionais: ${data.observacoes || 'Nenhuma'}`
    });

    revalidatePath('/dashboard');
    revalidatePath(`/pedidos/${data.pedido_id}`);
    revalidatePath('/medicoes');
    return { success: true, message: 'Pedido Aprovado com Sucesso!' };
  } catch (err) {
    return { success: false, message: 'Erro interno na Aprovação.' };
  }
}

// FUNÇÃO 2: Agendar a Medição
export async function agendarMedicaoAction(rawData: AgendarMedicaoInput) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const parsed = agendarMedicaoSchema.safeParse(rawData);
    if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
    const data = parsed.data;

    // O sistema agora sempre envia pedidos para a fila como 'PENDENTE'.
    // Portanto, o gerenciador apenas ATUALIZA a medição baseando-se no pedido_id.
    const { data: existingMedicao, error: searchErr } = await supabase
        .from('medicoes_v2')
        .select('id, status')
        .eq('pedido_id', data.pedido_id)
        .in('status', ['PENDENTE', 'Agendada'])
        .single();
        
    if (searchErr || !existingMedicao) {
        return { success: false, message: 'Nenhuma medição ativa encontrada para este pedido na fila.' };
    }

    const { error: updateErr } = await supabase
      .from('medicoes_v2')
      .update({
        responsavel_id: data.responsavel_id || user.id, // O próprio ou outro designado
        data_agendada: data.data_agendada || null,
        status: data.data_agendada ? 'Agendada' : existingMedicao.status, // Se der data, vira "Agendada". Caso contrario, mantem PENDENTE mas designada
        updated_at: new Date().toISOString()
      })
      .eq('id', existingMedicao.id);

    if (updateErr) {
        console.error("Erro Update Agendar Medição:", updateErr);
        return { success: false, message: 'Erro ao atualizar e agendar medição.' };
    }

    // Registra o Evento (Event Sourcing)
    await supabase.from('eventos_operacionais').insert({
      pedido_id: data.pedido_id,
      usuario_id: user.id,
      etapa_atual: data.data_agendada ? 'Medição Agendada' : 'Fila de Medição',
      tipo_evento: existingMedicao.status === 'Agendada' ? 'Re-agendamento de Medição' : 'Agendamento de Medição',
      observacoes: `Medição atualizada na fila. Responsável Atribuído: ${data.responsavel_id || 'O Mesmo Usuário logado'}. Obs: ${data.observacoes || ''}`
    });

    revalidatePath('/medicoes');
    revalidatePath(`/pedidos/${data.pedido_id}`);
    revalidatePath('/agenda'); 
    return { success: true, message: 'Agendamento Salvo!' };
  } catch (err) {
    return { success: false, message: 'Erro interno ao Atualizar Agendamento.' };
  }
}


// FUNÇÃO 3: Concluir Medição (Mobile-First / Na Obra)
export async function concluirMedicaoAction(rawData: ConcluirMedicaoInput) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const parsed = concluirMedicaoSchema.safeParse(rawData);
    if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
    const data = parsed.data;

    // Busca o pedido base da medição para o evento sourcing
    const { data: medicaoBase } = await supabase
        .from('medicoes_v2')
        .select('pedido_id')
        .eq('id', data.medicao_id)
        .single();
        
    if (!medicaoBase) return { success: false, message: 'Medição não encontrada.' };

    // Atualiza a Medição
    const { error: updateErr } = await supabase
      .from('medicoes_v2')
      .update({
        status: data.status,
        pendencias_obra: data.pendencias_obra || null,
        apto_para_projeto: data.apto_para_projeto,
        updated_at: new Date().toISOString()
      })
      .eq('id', data.medicao_id);

    if (updateErr) return { success: false, message: 'Erro ao fechar medição.' };

    // Registra o Evento Imutável - (Saída de Custódia / Handover)
    await supabase.from('eventos_operacionais').insert({
      pedido_id: medicaoBase.pedido_id,
      usuario_id: user.id,
      etapa_atual: data.apto_para_projeto ? 'Fila de Projeto' : 'Aguardando Ajuste de Obra (Projeto Bloqueado)',
      tipo_evento: data.status === 'Concluida' ? 'Conclusão de Medição' : 'Medição Frustrada',
      pendencia_motivo: data.pendencias_obra || null,
      observacoes: `Status da Obra: ${data.apto_para_projeto ? 'Apta para Projeto' : 'Inapta/Com Pendências'}`
    });

    revalidatePath('/medicoes');
    revalidatePath(`/pedidos/${medicaoBase.pedido_id}`);
    return { success: true, message: `Medição fechada com sucesso (${data.status}).` };
  } catch (err) {
    return { success: false, message: 'Erro interno ao Concluir Medição.' };
  }
}

// FUNÇÃO 4: Excluir Medição (Soft Delete)
export async function excluirMedicaoAction(medicaoId: string, motivo: string) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const isAdmin = user?.app_metadata?.role_name === 'admin' || 
                    user?.email === 'lucas@nexusxp.com.br' ||
                    user?.email === 'admin@marmo.com';

    if (!isAdmin) {
      return { success: false, message: 'Operação não permitida. Apenas administradores podem gerenciar exclusões críticas.' };
    }

    // Busca o pedido base da medição para o evento
    const { data: medicaoBase } = await supabase
        .from('medicoes_v2')
        .select('pedido_id')
        .eq('id', medicaoId)
        .single();
        
    if (!medicaoBase) return { success: false, message: 'Medição não encontrada.' };

    const { error: updateErr } = await supabase
      .from('medicoes_v2')
      .update({
        status: 'Cancelada',
        updated_at: new Date().toISOString()
      })
      .eq('id', medicaoId);

    if (updateErr) return { success: false, message: 'Erro ao cancelar medição.' };

    // Registra o Evento
    await supabase.from('eventos_operacionais').insert({
      pedido_id: medicaoBase.pedido_id,
      usuario_id: user.id,
      etapa_atual: 'Fila de Medição',
      tipo_evento: 'Exclusão de Medição',
      observacoes: `Medição excluída/cancelada da fila pelo operador. Motivo informado: ${motivo}`
    });

    revalidatePath('/medicoes');
    revalidatePath('/agenda');
    revalidatePath(`/pedidos`);
    revalidatePath(`/pedidos/${medicaoBase.pedido_id}`);
    
    return { success: true, message: 'Medição excluída com sucesso.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'Erro interno ao excluir Medição.' };
  }
}
