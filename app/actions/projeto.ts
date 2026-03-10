'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { 
  assumirProjetoSchema, 
  concluirProjetoSchema, 
  aprovarProjetoSchema,
  type AssumirProjetoInput,
  type ConcluirProjetoInput,
  type AprovarProjetoInput
} from '@/lib/validations/projeto_v2';

export async function assumirProjetoAction(rawData: AssumirProjetoInput) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, message: 'Não autenticado.' };

    const parsed = assumirProjetoSchema.safeParse(rawData);
    if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
    const data = parsed.data;

    // Buscar se já existe projeto ou criar
    const { data: existing } = await supabase
        .from('projetos_v2')
        .select('id')
        .eq('pedido_id', data.pedido_id)
        .single();
        
    let projetoId = existing?.id;

    if (!projetoId) {
        // Primeira vez: cria
        const { data: insertData, error: insertErr } = await supabase
            .from('projetos_v2')
            .insert({
                pedido_id: data.pedido_id,
                projetista_id: data.projetista_id || user.id,
                status: 'Em Andamento'
            })
            .select('id')
            .single();
            
        if (insertErr || !insertData) return { success: false, message: 'Erro ao criar projeto.' };
        projetoId = insertData.id;
    } else {
        // Atualiza status e dono
        const { error: updateErr } = await supabase
            .from('projetos_v2')
            .update({ 
                projetista_id: data.projetista_id || user.id,
                status: 'Em Andamento',
                updated_at: new Date().toISOString()
            })
            .eq('id', projetoId);
            
        if (updateErr) return { success: false, message: 'Erro ao assumir projeto.' };
    }

    // Event Sourcing
    await supabase.from('eventos_operacionais').insert({
        pedido_id: data.pedido_id,
        usuario_id: user.id,
        etapa_atual: 'Setor de Projetos',
        tipo_evento: 'Entrada em Custódia - Projeto',
        observacoes: 'Projetista assumiu o desenvolvimento do projeto.'
    });

    revalidatePath('/projetos');
    return { success: true, message: 'Projeto Assumido. Trabalhe na planta!' };
  } catch (err) {
    return { success: false, message: 'Erro Interno.' };
  }
}

export async function concluirProjetoAction(rawData: ConcluirProjetoInput) {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return { success: false, message: 'Não autenticado.' };
    
        const parsed = concluirProjetoSchema.safeParse(rawData);
        if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
        const data = parsed.data;
    
        // Pegar pedido_id
        const { data: projBase } = await supabase
            .from('projetos_v2')
            .select('pedido_id')
            .eq('id', data.projeto_id)
            .single();
            
        if (!projBase) return { success: false, message: 'Projeto não encontrado.' };
    
        const { error: updateErr } = await supabase
            .from('projetos_v2')
            .update({ 
                status: 'Aguardando Aprovação',
                arquivo_url: data.arquivo_url || null,
                observacoes: data.observacoes || null,
                updated_at: new Date().toISOString()
            })
            .eq('id', data.projeto_id);
            
        if (updateErr) return { success: false, message: 'Erro ao salvar projeto.' };
    
        // Event Sourcing
        await supabase.from('eventos_operacionais').insert({
            pedido_id: projBase.pedido_id,
            usuario_id: user.id,
            etapa_atual: 'Aprovação Técnica / Cliente',
            tipo_evento: 'Projeto Enviado para Revisão',
            observacoes: `Projeto elaborado e disponibilizado para aprovação. Obs: ${data.observacoes || ''}`
        });
    
        revalidatePath('/projetos');
        return { success: true, message: 'Enviado para Aprovação!' };
      } catch (err) {
        return { success: false, message: 'Erro Interno.' };
      }
}

export async function aprovarProjetoAction(rawData: AprovarProjetoInput) {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return { success: false, message: 'Não autenticado.' };
    
        const parsed = aprovarProjetoSchema.safeParse(rawData);
        if (!parsed.success) return { success: false, message: 'Dados inválidos.' };
        const data = parsed.data;
    
        const { data: projBase } = await supabase
            .from('projetos_v2')
            .select('pedido_id, revisao')
            .eq('id', data.projeto_id)
            .single();
            
        if (!projBase) return { success: false, message: 'Projeto não encontrado.' };
    
        const { error: updateErr } = await supabase
            .from('projetos_v2')
            .update({ 
                status: data.status,
                revisao: data.status === 'Reprovado' ? (projBase.revisao || 1) + 1 : projBase.revisao,
                observacoes: data.observacoes || null,
                updated_at: new Date().toISOString()
            })
            .eq('id', data.projeto_id);
            
        if (updateErr) return { success: false, message: 'Erro registrar decisão.' };
    
        // Event Sourcing
        await supabase.from('eventos_operacionais').insert({
            pedido_id: projBase.pedido_id,
            usuario_id: user.id,
            etapa_atual: data.status === 'Aprovado' ? 'Fila de PCP / Produção' : 'Setor de Projetos (Retrabalho)',
            tipo_evento: data.status === 'Aprovado' ? 'Aprovação Técnica / Saída de Custódia' : 'Projeto Reprovado (Revisão Solicitada)',
            pendencia_motivo: data.status === 'Reprovado' ? data.observacoes || 'Sem motivo detalhado.' : null,
            observacoes: `Decisão Técnica do Projeto: ${data.status.toUpperCase()}`
        });
    
        revalidatePath('/projetos');
        return { success: true, message: `Projeto marcado como ${data.status}.` };
      } catch (err) {
        return { success: false, message: 'Erro Interno.' };
      }
}
