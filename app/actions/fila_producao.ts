'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

/**
 * Busca a vitrine (O.P.s) aguardando o operador do Kanban de Corte acionar.
 * Apenas `etapa_fabrica = fila_producao`.
 */
export async function getFilaDeProducaoAction() {
    try {
        const supabase = await createClient();

        const { data: pedidos, error: pedErr } = await supabase
            .from('pedidos_v2')
            .select(`
                id, 
                numero_orcamento, 
                clientes(nome), 
                obras(endereco), 
                data_prometida,
                urgencia,
                alertas_producao,
                alerta_medicao_divergente,
                pedidos_itens_v2(id)
            `)
            .eq('etapa_fabrica', 'fila_producao')
            .order('data_prometida', { ascending: true }); // Fila obedece data de entrega como regra matriz.

        if (pedErr) throw pedErr;

        const pedidosFormatados = (pedidos || []).map((p: any) => ({
            ...p,
            cliente_nome: p.clientes?.nome || 'Desconhecido',
            endereco_obra: p.obras?.endereco || 'Sem endereço'
        }));

        return { success: true, data: pedidosFormatados };

    } catch (err: any) {
        console.error('[Fila] Erro ao buscar fila de produção:', err);
        return { success: false, data: [] };
    }
}

/**
 * Dispara o pedido pra dentro do chão de fábrica (Kanban).
 * Muda as colunas de "etapa" e de "status_comercial" ao mesmo tempo, 
 * notificando a empresa que o material efetivamente entrou pra corte.
 */
export async function enviarParaKanbanDeCorteAction(pedidoId: string) {
    try {
        const supabase = await createClient();

        const { error } = await supabase
            .from('pedidos_v2')
            .update({ 
                etapa_fabrica: 'em_producao',
                status_comercial: 'Em Produção' 
            })
            .eq('id', pedidoId);

        if (error) throw error;

        revalidatePath('/fila_producao');
        revalidatePath('/kanban'); // Recarrega o kanban board.
        revalidatePath('/dashboard'); // Atualiza a carga consumida no Farol.
        
        return { success: true, message: 'Ordem despachada para o Kanban (Fila de Corte)!' };

    } catch (err: any) {
        console.error('[Fila] Erro envio Kanban:', err);
        return { success: false, message: 'Erro ao transacionar para produção.' };
    }
}
