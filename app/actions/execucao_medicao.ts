'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

/**
 * Busca a medição completa, arrastando o Pedido Mãe e A Lista de Itens atuais.
 */
export async function getMedicaoParaExecutarAction(medicaoId: string) {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('medicoes_v2')
            .select(`
                id, data_agendada, tecnico:responsavel_id, status, pedido_id,
                pedidos_v2(
                    id, numero_orcamento, 
                    clientes(nome), obras(endereco, cidade),
                    pedidos_itens_v2(*)
                )
            `)
            .eq('id', medicaoId)
            .single();

        if (error) throw error;

        // Formatação do DTO (Flattening do Join pro UI não quebrar)
        if (data && data.pedidos_v2) {
            const p: any = Array.isArray(data.pedidos_v2) ? data.pedidos_v2[0] : data.pedidos_v2;
            p.cliente_nome = p.clientes?.nome || 'Desconhecido';
            p.endereco_obra = p.obras?.endereco || 'Sem endereço';
            p.cidade_obra = p.obras?.cidade || '';
        }

        return { success: true, data };

    } catch (err: any) {
        console.error('[Execucao Medicao - Fetch] Erro:', err);
        return { success: false, data: null };
    }
}

/**
 * Consolida o Form In Loco.
 * O Form envia o array de Itens Final. 
 * A action deleta todos do BD atual e insere do zero para evitar bugs de diff.
 * Se algum item no array possuir `item_extra_medicao === true`, o `pedido_v2` ganha flag vitalícia.
 */
export async function concluirExecucaoMedicaoAction(medicaoId: string, pedidoId: string, itensFinais: any[]) {
    try {
        const supabase = await createClient();
        
        // 1. Apagar Itens Antigos
        const { error: delErr } = await supabase
            .from('pedidos_itens_v2')
            .delete()
            .eq('pedido_id', pedidoId);
        
        if (delErr) throw delErr;

        // 2. Inserir Novos Itens (Array já tem 'pedido_id' forçado pelo FrontEnd no Payload)
        // Precisamos garantir que eles não venham com 'id' vindo do schema se forem novos,
        // E injetar pedido_id neles todos.
        const itensParaInserir = itensFinais.map(it => {
            const copy = { ...it, pedido_id: pedidoId };
            // Removemos o ID pra o Supabase gerar novos UUIDs frescos (evita conflitos de PK p/ o novo array)
            delete copy.id;
            delete copy.created_at;
            delete copy.codigo_qr; // O QR code só nasce no Projetos.
            return copy;
        });

        const { error: insErr } = await supabase
            .from('pedidos_itens_v2')
            .insert(itensParaInserir);

        if (insErr) throw insErr;

        // 3. Checar flag de divergência
        const hasExtra = itensFinais.some((it: any) => Boolean(it.item_extra_medicao));

        // 4. Fechar Mês da Obra
        // Etapa 1: Medicao -> "Concluída"
        const { error: medUpdErr } = await supabase
            .from('medicoes_v2')
            .update({ status: 'Concluida' })
            .eq('id', medicaoId);
        if (medUpdErr) throw medUpdErr;

        // Etapa 2: Pedido -> Pipeline: etapa_fabrica -> 'projetos'
        // Extra: Levanta bandeira de divergência ou mantem a default se já tinha.
        const pedPayload: any = { etapa_fabrica: 'projetos' };
        if (hasExtra) pedPayload.alerta_medicao_divergente = true;

        const { error: pedUpdErr } = await supabase
            .from('pedidos_v2')
            .update(pedPayload)
            .eq('id', pedidoId);
            
        if (pedUpdErr) throw pedUpdErr;


        // Revalida tudo pra propagar as badges
        revalidatePath('/agenda');
        revalidatePath('/projetos');
        revalidatePath('/pedidos');

        return { success: true, message: 'Medição Submetida! Liberação imediata para o Setor de Projetos.' };

    } catch (err: any) {
        console.error('[Execucao Medicao - Save] Erro:', err);
        return { success: false, message: 'Erro crítico ao consolidar as medidas.' };
    }
}
