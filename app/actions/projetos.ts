'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

/**
 * Busca todos os pedidos que estão na etapa de 'projetos'
 * Apenas medições CONCLUÍDAS geram demanda pro projetista.
 */
export async function getPedidosParaProjetosAction() {
    try {
        const supabase = await createClient();

        // 1. Encontrar medições 'Concluída'
        const { data: medicoes, error: medErr } = await supabase
            .from('medicoes_v2')
            .select('pedido_id')
            .eq('status', 'Concluida');

        if (medErr) throw medErr;
        if (!medicoes || medicoes.length === 0) return { success: true, data: [] };

        const pedidoIds = medicoes.map(m => m.pedido_id);

        // 2. Buscar os pedidos na etapa 'projetos'
        const { data: pedidos, error: pedErr } = await supabase
            .from('pedidos_v2')
            .select(`
                id, 
                numero_orcamento, 
                clientes(nome), 
                obras(endereco, cidade), 
                status_comercial,
                urgencia,
                etapa_fabrica,
                alerta_medicao_divergente,
                pedidos_itens_v2(*)
            `)
            .eq('etapa_fabrica', 'projetos')
            .in('id', pedidoIds)
            .order('numero_orcamento', { ascending: false });

        if (pedErr) throw pedErr;

        const pedidosFormatados = (pedidos || []).map((p: any) => ({
            ...p,
            cliente_nome: p.clientes?.nome || 'Desconhecido',
            endereco_obra: p.obras?.endereco || 'Sem endereço',
            cidade_obra: p.obras?.cidade || ''
        }));

        return { success: true, data: pedidosFormatados };

    } catch (err: any) {
        console.error('[Projetos] Erro ao buscar fila:', err);
        return { success: false, data: [] };
    }
}

/**
 * Gera as strings de rastreio (QR Codes) na tabela pedidos_itens_v2.
 * O formato acordado: <numero_orcamento>-<idx_ambiente>_<letra_peca>
 */
export async function gerarQrCodesPedidoAction(pedidoId: string, numeroOrcamento: string) {
    try {
        const supabase = await createClient();

        // 1. Buscar itens do pedido
        const { data: itens, error: itensErr } = await supabase
            .from('pedidos_itens_v2')
            .select('*')
            .eq('pedido_id', pedidoId)
            .order('created_at', { ascending: true });

        if (itensErr) throw itensErr;
        if (!itens || itens.length === 0) return { success: false, message: 'Pedido vazio.' };

        // 2. Computar array de updates e processar JSONB para injetar ID de rastreio
        // O Supabase não atualiza "uma parte" do JSONB facilmente via rpc por default neste caso,
        // então montaremos as strings por ambiente no item principal para facilitar o scan.
        const numOrd = String(numeroOrcamento).padStart(4, '0');

        for (let idxAmbiente = 0; idxAmbiente < itens.length; idxAmbiente++) {
            const item = itens[idxAmbiente];
            const ambienteStr = String(idxAmbiente + 1).padStart(2, '0');
            
            // Ex: 3124-01
            const codigoQrAmbiente = `${numOrd}-${ambienteStr}`;

            await supabase
                .from('pedidos_itens_v2')
                .update({ codigo_qr: codigoQrAmbiente })
                .eq('id', item.id);
        }

        revalidatePath('/projetos');
        return { success: true, message: 'Lote de QR Codes estruturado com sucesso.' };

    } catch (err: any) {
        console.error('[Projetos] Erro ao gerar QR codes:', err);
        return { success: false, message: 'Falha do banco de dados.' };
    }
}

/**
 * Transaciona a etapa da fábrica de 'projetos' (Projeto Validado) 
 * para 'fila_producao' (Aguardando Kanban).
 */
export async function aprovarParaProducaoAction(pedidoId: string) {
    try {
        const supabase = await createClient();

        const { error } = await supabase
            .from('pedidos_v2')
            .update({ etapa_fabrica: 'fila_producao' })
            .eq('id', pedidoId);

        if (error) throw error;

        revalidatePath('/projetos');
        return { success: true, message: 'Pedido liberado! Iniciando fase de produção.' };

    } catch (err: any) {
        console.error('[Projetos] Erro aprovação:', err);
        return { success: false, message: 'Erro ao aprovar projeto.' };
    }
}

/**
 * Cadeia de Custódia: Devolve um projeto para o campo (Técnico de Medição).
 * Reverte a etapa_fabrica, reabre a medição conectada e gera log de auditoria.
 */
export async function devolverParaMedicaoAction(pedidoId: string, motivoDevolucao: string) {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!motivoDevolucao || motivoDevolucao.trim().length < 5) {
            return { success: false, message: 'Informe um motivo claro (mínimo 5 caracteres).' };
        }

        // 1. Achar a última medição atulamente atrelada a este pedido.
        const { data: medicao } = await supabase
            .from('medicoes_v2')
            .select('id')
            .eq('pedido_id', pedidoId)
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

        if (medicao) {
            // Reverte a medição para Agendada (Aparecerá no tablet do técnico de novo)
            const { error: medErr } = await supabase
                .from('medicoes_v2')
                .update({ status: 'Agendada' })
                .eq('id', medicao.id);
            if (medErr) throw medErr;
        }

        // 2. Extrair alertas atuais para fazer push no JSONB
        const { data: pedido } = await supabase
            .from('pedidos_v2')
            .select('alertas_producao')
            .eq('id', pedidoId)
            .single();

        const alertasProducao = pedido?.alertas_producao || [];
        const userName = user?.user_metadata?.full_name || user?.email || 'Engenharia';
        
        const novoAlerta = {
            tipo: 'devolucao',
            setor: 'projetos',
            motivo: motivoDevolucao.trim(),
            peca: 'O P. Inteira',
            usuario: userName,
            data: new Date().toISOString()
        };

        // 3. Atualizar o Pedido (Remover do funil de fábrica e adicionar o log)
        const { error: pedErr } = await supabase
            .from('pedidos_v2')
            .update({ 
                etapa_fabrica: null,
                alertas_producao: [...alertasProducao, novoAlerta]
            })
            .eq('id', pedidoId);

        if (pedErr) throw pedErr;

        revalidatePath('/projetos');
        revalidatePath('/agenda'); // P/ brilhar no tablet na hora
        
        return { success: true, message: 'Projeto estornado para a Fila de Medição com Sucesso!' };

    } catch (err: any) {
        console.error('[Projetos] Erro ao devolver:', err);
        return { success: false, message: 'Erro crítico ao devolver o projeto.' };
    }
}
