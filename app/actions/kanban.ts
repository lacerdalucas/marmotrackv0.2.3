'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

/**
 * Busca todas as peças (itens) que estão em produção.
 * Filtra por pedidos cuja etapa_fabrica seja 'em_producao'.
 */
export async function getItensEmProducaoAction() {
    try {
        const supabase = await createClient();

        // 1. Buscar itens vinculados a pedidos em produção
        // Fazemos JOIN com pedidos_v2, clientes e obras para ter o contexto completo no card
        const { data: itens, error } = await supabase
            .from('pedidos_itens_v2')
            .select(`
                id,
                ambiente,
                material,
                partes_medidas,
                codigo_qr,
                status_producao,
                item_extra_medicao,
                pedido_id,
                pedidos_v2!inner(
                    id,
                    numero_orcamento,
                    urgencia,
                    etapa_fabrica,
                    clientes(nome),
                    obras(endereco)
                )
            `)
            .eq('pedidos_v2.etapa_fabrica', 'em_producao');

        if (error) throw error;

        // Formatação para flat object facilitando o uso no Kanban
        const formatados = (itens || []).map((it: any) => ({
            id: it.id,
            peca: it.ambiente, // No kanban usamos o ambiente como título ou concatenamos
            ambiente: it.ambiente,
            material: it.material,
            status_producao: it.status_producao || 'fila_corte',
            codigo_qr: it.codigo_qr,
            item_extra_medicao: it.item_extra_medicao,
            numero_orcamento: it.pedidos_v2?.numero_orcamento,
            cliente_nome: it.pedidos_v2?.clientes?.nome || 'Desconhecido',
            prioridade: it.pedidos_v2?.urgencia ? 'Urgente' : 'Normal',
            medidas: it.partes_medidas || []
        }));

        return { success: true, data: formatados };

    } catch (err: any) {
        console.error('[Kanban] Erro ao buscar itens:', err);
        return { success: false, data: [] };
    }
}

/**
 * Persiste a movimentação de uma peça entre colunas do Kanban.
 */
export async function moverPecaKanbanAction(itemId: string, novaColuna: string) {
    try {
        const supabase = await createClient();

        const { error } = await supabase
            .from('pedidos_itens_v2')
            .update({ status_producao: novaColuna })
            .eq('id', itemId);

        if (error) throw error;

        revalidatePath('/kanban');
        return { success: true, message: 'Status atualizado no banco.' };

    } catch (err: any) {
        console.error('[Kanban] Erro ao mover peça:', err);
        return { success: false, message: 'Erro ao persistir movimento.' };
    }
}
