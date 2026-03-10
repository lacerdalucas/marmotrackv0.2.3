'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function aprovarLoteAction(pedidoItemIds: string[]) {
  if (!pedidoItemIds || pedidoItemIds.length === 0) {
    return { success: false, message: 'Nenhum item informado para aprovação.' };
  }

  try {
    const supabase = await createClient();

    // Monta o payload para criar as OPs em lote, todas iniciando na 'Fila de Corte'
    const payload = pedidoItemIds.map(id => ({
      pedido_item_id: id,
      status_etapa: 'Fila de Corte',
      prioridade: 'Normal' // Valor padrão. Depois o PCP pode alterar
    }));

    const { error: insertError } = await supabase
      .from('ordens_producao')
      .insert(payload);

    if (insertError) {
      console.error('Erro ao gerar ordens de produção:', insertError);
      return { success: false, message: 'Falha ao gerar as Ordens de Produção no banco de dados.' };
    }

    revalidatePath('/kanban');

    return { 
      success: true, 
      message: `${pedidoItemIds.length} Ordem(ns) de Produção gerada(s) e enviada(s) para o Kanban.` 
    };

  } catch (err) {
    console.error('Erro catastrófico em aprovarLoteAction:', err);
    return { success: false, message: 'Erro inesperado ao gerar O.P.s.' };
  }
}
