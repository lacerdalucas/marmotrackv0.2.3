'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

// ==========================================
// Cancelar Medição (Soft Delete com Auditoria)
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
// Editar Agendamento Existente
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

    const updatePayload: Record<string, unknown> = { updated_at: new Date().toISOString() };
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
