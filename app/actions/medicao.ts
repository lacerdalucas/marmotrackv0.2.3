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

// ==========================================
// FUNÇÃO 1: Aprovar o Pedido Comercial
// ==========================================
export async function aprovarPedidoAction(rawData: AprovarPedidoInput) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const parsed = aprovarPedidoSchema.safeParse(rawData);
    if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
    const data = parsed.data;

    const { error: updateErr } = await supabase
      .from('pedidos_v2')
      .update({
        status_comercial: 'Aprovado',
        precisa_medicao: data.precisa_medicao,
        data_aprovacao: new Date().toISOString()
      })
      .eq('id', data.pedido_id);

    if (updateErr) return { success: false, message: 'Falha ao aprovar pedido.' };

    await supabase.from('eventos_operacionais').insert({
      pedido_id: data.pedido_id,
      usuario_id: user.id,
      etapa_atual: data.precisa_medicao ? 'Fila de Medição' : 'Fila de Projeto',
      tipo_evento: 'Aprovação Comercial',
      observacoes: `Pedido Aprovado. ${data.precisa_medicao ? 'Aguardando Medição.' : 'Medição Dispensada.'} Obs: ${data.observacoes || 'Nenhuma'}`
    });

    revalidatePath('/dashboard');
    revalidatePath(`/pedidos/${data.pedido_id}`);
    revalidatePath('/medicoes');
    return { success: true, message: 'Pedido Aprovado com Sucesso!' };
  } catch (err) {
    return { success: false, message: 'Erro interno na Aprovação.' };
  }
}

// ==========================================
// FUNÇÃO 2: Agendar a Medição (Fila → Agenda)
// ==========================================
export async function agendarMedicaoAction(rawData: AgendarMedicaoInput) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const parsed = agendarMedicaoSchema.safeParse(rawData);
    if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
    const data = parsed.data;

    // Buscar medição ativa do pedido
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
        responsavel_id: data.responsavel_id || user.id,
        data_agendada: data.data_agendada || null,
        status: data.data_agendada ? 'Agendada' : existingMedicao.status,
        updated_at: new Date().toISOString()
      })
      .eq('id', existingMedicao.id);

    if (updateErr) {
        console.error("Erro Update Agendar Medição:", updateErr);
        return { success: false, message: 'Erro ao atualizar e agendar medição.' };
    }

    await supabase.from('eventos_operacionais').insert({
      pedido_id: data.pedido_id,
      usuario_id: user.id,
      etapa_atual: data.data_agendada ? 'Medição Agendada' : 'Fila de Medição',
      tipo_evento: existingMedicao.status === 'Agendada' ? 'Re-agendamento de Medição' : 'Agendamento de Medição',
      observacoes: `Medição atualizada na fila. Responsável: ${data.responsavel_id || 'Próprio usuário'}. Obs: ${data.observacoes || ''}`
    });

    revalidatePath('/medicoes');
    revalidatePath(`/pedidos/${data.pedido_id}`);
    revalidatePath('/agenda');
    return { success: true, message: 'Agendamento Salvo!' };
  } catch (err) {
    return { success: false, message: 'Erro interno ao Atualizar Agendamento.' };
  }
}

// ==========================================
// FUNÇÃO 3: Concluir Medição (Mobile-First / Na Obra)
// ==========================================
export async function concluirMedicaoAction(rawData: ConcluirMedicaoInput) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const parsed = concluirMedicaoSchema.safeParse(rawData);
    if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
    const data = parsed.data;

    const { data: medicaoBase } = await supabase
        .from('medicoes_v2')
        .select('pedido_id')
        .eq('id', data.medicao_id)
        .single();

    if (!medicaoBase) return { success: false, message: 'Medição não encontrada.' };

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

    await supabase.from('eventos_operacionais').insert({
      pedido_id: medicaoBase.pedido_id,
      usuario_id: user.id,
      etapa_atual: data.apto_para_projeto ? 'Fila de Projeto' : 'Aguardando Ajuste de Obra',
      tipo_evento: data.status === 'Concluida' ? 'Conclusão de Medição' : 'Medição Frustrada',
      pendencia_motivo: data.pendencias_obra || null,
      observacoes: `Status da Obra: ${data.apto_para_projeto ? 'Apta para Projeto' : 'Inapta/Com Pendências'}`
    });

    revalidatePath('/medicoes');
    revalidatePath('/agenda');
    revalidatePath(`/pedidos/${medicaoBase.pedido_id}`);
    return { success: true, message: `Medição fechada com sucesso (${data.status}).` };
  } catch (err) {
    return { success: false, message: 'Erro interno ao Concluir Medição.' };
  }
}

// ==========================================
// FUNÇÃO 4: Cancelar Medição (Soft Delete com Auditoria)
// ==========================================
export async function cancelarMedicaoAction(medicaoId: string, motivo: string) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    if (!motivo || motivo.trim().length < 5) {
      return { success: false, message: 'O motivo do cancelamento é obrigatório (mínimo 5 caracteres).' };
    }

    const { data: medicaoBase } = await supabase
        .from('medicoes_v2')
        .select('pedido_id')
        .eq('id', medicaoId)
        .single();

    if (!medicaoBase) return { success: false, message: 'Medição não encontrada.' };

    // Soft delete com colunas de auditoria
    const { error: updateErr } = await supabase
      .from('medicoes_v2')
      .update({
        status: 'Cancelada',
        motivo_cancelamento: motivo.trim(),
        cancelado_por_id: user.id,
        cancelado_em: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .eq('id', medicaoId);

    if (updateErr) return { success: false, message: 'Erro ao cancelar medição.' };

    await supabase.from('eventos_operacionais').insert({
      pedido_id: medicaoBase.pedido_id,
      usuario_id: user.id,
      etapa_atual: 'Cancelada',
      tipo_evento: 'Cancelamento de Medição',
      observacoes: `Medição cancelada. Motivo: ${motivo.trim()}`
    });

    revalidatePath('/medicoes');
    revalidatePath('/agenda');
    revalidatePath(`/pedidos/${medicaoBase.pedido_id}`);

    return { success: true, message: 'Medição cancelada com sucesso.' };
  } catch (err) {
    return { success: false, message: 'Erro interno ao cancelar Medição.' };
  }
}

// ==========================================
// FUNÇÃO 5: Editar Agendamento Existente
// ==========================================
export async function editarAgendamentoAction(medicaoId: string, rawData: { data_agendada?: string; responsavel_id?: string; observacoes?: string }) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const { data: medicaoBase } = await supabase
        .from('medicoes_v2')
        .select('pedido_id, status')
        .eq('id', medicaoId)
        .single();

    if (!medicaoBase) return { success: false, message: 'Medição não encontrada.' };

    const updatePayload: any = { updated_at: new Date().toISOString() };
    if (rawData.data_agendada) {
      updatePayload.data_agendada = new Date(rawData.data_agendada).toISOString();
      if (medicaoBase.status === 'PENDENTE') updatePayload.status = 'Agendada';
    }
    if (rawData.responsavel_id) updatePayload.responsavel_id = rawData.responsavel_id;

    const { error: updateErr } = await supabase
      .from('medicoes_v2')
      .update(updatePayload)
      .eq('id', medicaoId);

    if (updateErr) return { success: false, message: 'Erro ao editar agendamento.' };

    await supabase.from('eventos_operacionais').insert({
      pedido_id: medicaoBase.pedido_id,
      usuario_id: user.id,
      etapa_atual: 'Medição Reagendada',
      tipo_evento: 'Edição de Agendamento',
      observacoes: rawData.observacoes || 'Agendamento editado pelo operador.'
    });

    revalidatePath('/medicoes');
    revalidatePath('/agenda');
    return { success: true, message: 'Agendamento atualizado!' };
  } catch (err) {
    return { success: false, message: 'Erro interno ao editar agendamento.' };
  }
}

// ==========================================
// FUNÇÃO 6: Recriar Medição Órfã
// ==========================================
export async function recriarMedicaoOrfaAction(pedidoId: string) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Usuário não autenticado.' };

    const { data: pedido } = await supabase.from('pedidos_v2').select('status_comercial').eq('id', pedidoId).single();
    if (!pedido) return { success: false, message: 'Pedido não encontrado.' };

    const { error: insertErr } = await supabase.from('medicoes_v2').insert({
      pedido_id: pedidoId,
      status: 'PENDENTE'
    });

    if (insertErr) return { success: false, message: 'Erro ao recriar medição.' };

    await supabase.from('eventos_operacionais').insert({
      pedido_id: pedidoId,
      usuario_id: user.id,
      etapa_atual: 'Medição Recriada (Órfão)',
      tipo_evento: 'Recriação de Medição',
      observacoes: 'Medição recriada manualmente via painel para pedido sem agenda ativa.'
    });

    revalidatePath('/pedidos');
    revalidatePath('/medicoes');
    return { success: true, message: 'Medição recriada e enviada para a Fila!' };
  } catch (err) {
    return { success: false, message: 'Erro interno ao recriar medição.' };
  }
}

// Mantém o alias antigo para compatibilidade
export { cancelarMedicaoAction as excluirMedicaoAction };
