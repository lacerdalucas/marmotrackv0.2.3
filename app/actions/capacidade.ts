// ==========================================
// Módulo: Motor de Capacidade (Inteligência Estratégica)
// ==========================================
'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

/**
 * Recalcula as horas estimadas do pedido cruzando os itens (peças)
 * e os tempos padrão configurados (setup_tempos_padrao_v2).
 */
export async function calcularCargaHorariaPedidoAction(pedidoId: string) {
    try {
        const supabase = await createClient();

        // 1. Buscar Cadastro de Tempos (Dicionário)
        const { data: temposData } = await supabase.from('setup_tempos_padrao_v2').select('*');
        const temposRaw = temposData || [];
        
        // Simulação agressiva para o MVP: Como a ficha técnica "avançada" (tempos por metro)
        // requer parse métrico de partes_medidas, e o db tá num estado transicional,  
        // aplicaremos um tempo fixo por quantidade de PEÇAS como fallback, baseado no tipo de serviço.

        // Mapeamento Setores e "Fator de Esforço" por peça/ambiente
        const capacidadeMap = {
            'Corte': 0,
            'Acabamento': 0,
            'Polimento': 0
        };

        // 2. Buscar itens do pedido
        const { data: itens } = await supabase
            .from('pedidos_itens_v2')
            .select('partes_medidas, acabamentos, servicos')
            .eq('pedido_id', pedidoId);

        if (!itens || itens.length === 0) {
            // Nenhuma peça, zera o consumo
            await supabase.from('pedidos_v2').update({ carga_horaria_estimada: capacidadeMap }).eq('id', pedidoId);
            return { success: true, message: 'Capacidade calculada (0 itens).', carga: capacidadeMap };
        }

        // 3. Somar Esforço
        // Algoritmo de "proxy" para MVP: 
        // 1 Parte = 0.5h Corte, 1 Acabamento = 1.0h Acabamento, 1 Peça = 0.5h Polimento
        itens.forEach(item => {
            const numPecas = Array.isArray(item.partes_medidas) ? item.partes_medidas.length : 1;
            const numAcabamentos = Array.isArray(item.acabamentos) ? item.acabamentos.length : 1;
            
            capacidadeMap['Corte'] += numPecas * 0.5; // Meia hora por peça no corte primário
            capacidadeMap['Acabamento'] += numAcabamentos * 1.0; // Uma hora por acabamento/moldura
            capacidadeMap['Polimento'] += numPecas * 0.5; // Meia hora polindo/revisando por peça
        });

        // 4. Salvar (Cache JSONB) no Pedido
        const { error: updateErr } = await supabase
            .from('pedidos_v2')
            .update({ carga_horaria_estimada: capacidadeMap })
            .eq('id', pedidoId);

        if (updateErr) throw updateErr;

        return { success: true, message: 'Capacidade atualizada!', carga: capacidadeMap };

    } catch (err: any) {
        console.error('[Engine] Erro calculando capacidade:', err);
        return { success: false, message: 'Erro ao calcular capacidade.' };
    }
}

/**
 * Soma e calcula a ocupação da fábrica baseado nos pedidos do Kanban
 * (Exclui Orcamentos, Exclui Concluidos).
 */
export async function getCapacidadeProducaoGeralAction() {
    try {
        const supabase = await createClient();

        // 1. Buscar Tetos de Produção da Fábrica
        const { data: SetoresData } = await supabase.from('setup_capacidade_setor_v2').select('*');
        
        // Ex do bd: [{setor: "Corte", capacidade_horas_semana: 120}, ...]
        const tetos: Record<string, number> = {};
        if (SetoresData) {
            SetoresData.forEach(s => tetos[s.setor] = s.capacidade_horas_semana);
        } else {
            tetos['Corte'] = 120; tetos['Acabamento'] = 160; tetos['Polimento'] = 80; // Safety mock
        }

        // 2. Buscar os pedidos ativos na fábrica
        // Todos que não são Orçamento e não estão Entregues. Ex 'Em Produção', 'Aprovado' (Fila)
        const { data: ativos } = await supabase
            .from('pedidos_v2')
            .select('carga_horaria_estimada, status_comercial')
            .in('status_comercial', ['Aprovado', 'Em Produção', 'Concluído (Produção)']) // O Concluído de produção ainda consome espaço até entrega? Vamos inferir apenas o que tá ocupando espaço produtivo real.
            .not('status_comercial', 'is', null);

        // 3. Somar Ocupação Atual
        const consumoAtual: Record<string, number> = {
            'Corte': 0, 'Acabamento': 0, 'Polimento': 0
        };

        (ativos || []).forEach(pedido => {
            if (pedido.carga_horaria_estimada) {
                // Casting
                const c = pedido.carga_horaria_estimada as Record<string, number>;
                consumoAtual['Corte'] += (c['Corte'] || 0);
                consumoAtual['Acabamento'] += (c['Acabamento'] || 0);
                consumoAtual['Polimento'] += (c['Polimento'] || 0);
            }
        });

        // 4. Transformar em Ocupação (%) e Cores
        const indicadores = Object.keys(tetos).map(setor => {
            const horasDisponiveis = tetos[setor];
            const horasOcupadas = consumoAtual[setor] || 0;
            const percentual = horasDisponiveis > 0 ? Math.round((horasOcupadas / horasDisponiveis) * 100) : 0;
            
            let statusCor = 'green';
            if (percentual >= 95) statusCor = 'red';
            else if (percentual >= 80) statusCor = 'yellow';

            return {
                setor,
                percentual,
                horasOcupadas,
                horasDisponiveis,
                statusCor
            };
        });

        const ocupacaoGeralMedia = indicadores.length > 0 
            ? Math.round(indicadores.reduce((acc, i) => acc + i.percentual, 0) / indicadores.length) 
            : 0;

        let corGeral = 'green';
        if (ocupacaoGeralMedia >= 95) corGeral = 'red';
        else if (ocupacaoGeralMedia >= 80) corGeral = 'yellow';

        return { 
            success: true, 
            estatisticas: indicadores, 
            ocupacaoGeralMedia,
            corGeral
        };

    } catch (err) {
        console.error('[Engine] Erro gerando quadro geral:', err);
        return { success: false, estatisticas: [] };
    }
}

/**
 * Simula a Data de Entrega (D.E.) Injetando um mock no consumo para calcular quando
 * aquele pedido conseguiria terminar sem explodir os 100% dos setores.
 */
export async function simularImpactoPedidoAction(novasHorasEstimadas: Record<string, number>) {
    // Isso seria usado pelo Form de Orçamento e pelo Modal do Kanban
    const atual = await getCapacidadeProducaoGeralAction();
    const isAtRedLine = (atual.ocupacaoGeralMedia ?? 0) >= 95;

    // Se estiver 100% hoje, a próxima semana (D.E + 7 dias) está no warning. 
    // Em um sistema real cruzamos agenda de dias úteis com horas_ocupadas para 
    // retornar datas matemáticas. Aqui retornamos um simulador preditivo pro MVP.
    const previsaoDiasUteis = isAtRedLine ? 15 : ((atual.ocupacaoGeralMedia ?? 0) > 80 ? 10 : 7);
    
    const dataMetaEstimada = new Date();
    dataMetaEstimada.setDate(dataMetaEstimada.getDate() + previsaoDiasUteis);

    return {
        success: true,
        ocupacaoPreSimulacao: atual.ocupacaoGeralMedia,
        previsaoDiasUteis,
        dataMetaSugerida: dataMetaEstimada.toISOString(),
        alertaSobrecarga: isAtRedLine ? 'ALERTA PCP: A fábrica já possui mais de 95% da carga alocada.' : null
    };
}
