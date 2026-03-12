'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

/**
 * Registra uma ocorrência destrutiva (soft delete) vinda do Kanban.
 * Adiciona ao array JSONB 'alertas_producao' da tabela de pedidos_v2.
 */
export async function registrarExclusaoCardKanbanAction(pedidoId: string, pecaDesc: string, motivo: string) {
    try {
        const supabase = await createClient();

        // 1. Quem está logado operando a máquina/tablet?
        const { data: { user } } = await supabase.auth.getUser();
        const ident = user?.email || 'Operador Anônimo';

        // 2. Buscar payload atual dos alertas
        const { data: pedido, error: fetchErr } = await supabase
            .from('pedidos_v2')
            .select('alertas_producao')
            .eq('id', pedidoId)
            .single();

        if (fetchErr) throw fetchErr;

        // 3. Acrescentar Novo Evento
        const currentAlerts = pedido.alertas_producao || [];
        const newAlert = {
            data: new Date().toISOString(),
            peca: pecaDesc,
            motivo: motivo,
            usuario: ident
        };

        const { error: updErr } = await supabase
            .from('pedidos_v2')
            .update({ 
                alertas_producao: [...currentAlerts, newAlert]
            })
            .eq('id', pedidoId);

        if (updErr) throw updErr;

        revalidatePath('/kanban');
        revalidatePath('/fila_producao');
        return { success: true, message: 'Alerta de perda/quebra de material registrado na O.P.' };

    } catch (err: any) {
        console.error('[Kanban Security] Erro gerando alerta:', err);
        return { success: false, message: 'Falha ao registrar ocorrência.' };
    }
}
