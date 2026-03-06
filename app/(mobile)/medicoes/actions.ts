// app/(mobile)/medicoes/actions.ts
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function completeMeasurementAction(visitId: string, formData: FormData) {
  const supabase = await createClient()

  const fieldNotes = formData.get('field_notes') as string || ''

  // Validação de autenticação Server-Side
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'Usuário não autenticado no aplicativo do medidor.' }
  }

  // Executar a Stored Procedure restrita (A mesma definina na Migration 07)
  const { data, error } = await supabase.rpc('complete_measurement_visit', {
    p_visit_id: visitId,
    p_field_notes: fieldNotes
  })

  if (error) {
    console.error('Erro de RPC ao finalizar medição:', error.message)
    return { error: 'Falha ao concluir a medição. Verifique conexão ou restrições.' }
  }

  // Revalidar para atualizar listas em tempo real
  revalidatePath('/medicoes')
  revalidatePath('/agenda') // O PCP Web verá a tabela atualizar também (Server Actions invalidam cache universalmente)
  revalidatePath(`/medicoes/${visitId}`)

  const result = typeof data === 'string' ? JSON.parse(data) : data
  return { success: true, message: result?.message || 'Obra liberada para Fábrica com Sucesso!' }
}
