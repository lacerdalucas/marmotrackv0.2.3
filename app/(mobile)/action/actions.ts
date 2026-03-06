'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

// Ação Server-Side: O Front end NUNCA faz UPDATE da pedra.
// Ele pede encarecidamente para o Banco via RPC processar a transição de Evento.
export async function registerPieceEventAction(
  qrCodeId: string,
  eventType: 'STAGE_IN' | 'STAGE_OUT' | 'BLOCK_REWORK',
  targetStageId: string,
  notes?: string
) {
  const supabase = await createClient()

  // O Server Action já possui os cookies do usurário logado (Operador) via middleware
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'Usuário não autenticado no Scanner.' }
  }

  // Chamar a Stored Procedure (RPC) passando a custódia do dado pro Back
  const { data, error } = await supabase.rpc('transition_piece_stage', {
    p_qr_code_id: qrCodeId,
    p_event_type: eventType,
    p_target_stage_id: targetStageId,
    p_operator_id: user.id,
    p_notes: notes || null
  })

  if (error) {
    console.error('Erro de transição OPE:', error.message)
    
    // Tratamento de mensagens do Backend para o Tela "Burra" Mobile
    if (error.message.includes('piece_blocked')) {
      return { error: 'ERRO: Peça travada por Retrabalho. Fale com a gerência.' }
    }
    if (error.message.includes('invalid_sequence')) {
      return { error: 'ERRO SEQUÊNCIA: Esta peça já passou desse setor.' }
    }
    return { error: 'Falha na Transição. Tente novamente.' }
  }

  revalidatePath(`/action/${qrCodeId}`) // Atualiza cache da tela do cara na fábrica

  // O Banco retorna um JSON caso sucesso ou Warning/Idempotência
  const result = typeof data === 'string' ? JSON.parse(data) : data
  return { success: true, message: result?.message || 'Registrado com sucesso!' }
}
