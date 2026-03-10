import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { PenTool, FileSignature, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 0;

export default async function ProjetosFilaPage() {
    const supabase = await createClient();

    // Buscar os pedidos que estão aptos para projeto:
    // (Precisam de medição e já foram medidos de forma apta) OU (Não precisavam de Medição e estão Aprovados comercialmente)
    // Vamos simplificar pegando diretamente da tabela de Eventos ou relacionando
    // Porém a query mais simples é via tabela pedidos_v2 + Left Join em medicoes_v2
    // Mas para não complicar joins, vamos usar o fato de que vamos buscar projetos que estão rolando E pedidos aguardando.

    // Pegamos todos os projetos diretamente para facilitar, ou os pedidos que geraram projetos (através dos status de eventos ou logic)
    // Como Projetos a principio só aparecem após ação, precisamos criar projetos virtuais ou mostrar os Pedidos Aptos.
    // Regra baseada nos status em PostgreSQL v2:
    const { data: pedidosAptos, error } = await supabase
        .rpc('get_pedidos_fila_projeto') // Alternativa seria query manual com postgREST. 
        // Como não fizemos a view let's fazer manual aqui com filters:
        // select from pedidos_v2 where: (precisa_medicao = false AND status_comercial = Aprovado) 
        // OU (ter uma Medição Concluida e apta = true)
        ;

    // Para fins limitados de SSR supabase client que dificultam o OR complexo em child tables,
    // fazemos 2 fetches simplificados.
    const { data: pedidosDiretos } = await supabase
        .from('pedidos_v2')
        .select(`id, data_prometida, urgencia, clientes(nome), obras(endereco), projetos_v2(id, status)`)
        .eq('status_comercial', 'Aprovado')
        .eq('precisa_medicao', false);

    const { data: medicoesAptas } = await supabase
        .from('medicoes_v2')
        .select(`
         pedido_id, 
         pedidos_v2(id, data_prometida, urgencia, clientes(nome), obras(endereco), projetos_v2(id, status))
     `)
        .eq('status', 'Concluida')
        .eq('apto_para_projeto', true);

    let listaBruta: any[] = [];
    if (pedidosDiretos) listaBruta = [...pedidosDiretos];
    if (medicoesAptas) listaBruta = [...listaBruta, ...medicoesAptas.map(m => m.pedidos_v2)];

    // Deduplicar caso necessário
    const listaUnica = Array.from(new Map(listaBruta.map(item => [item?.id, item])).values()).filter(Boolean);

    // Filtramos aqueles cujo Projeto_v2 já esteja em Aprovado (pois já sairam do setor de Projetos)
    const filaProjetos = listaUnica.filter(p => !p.projetos_v2?.some((proj: any) => proj.status === 'Aprovado'));

    if (error) {
        console.error("Erro", error);
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl flex items-center gap-2">
                        <PenTool className="text-violet-500" /> Setor de Projetos
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Fila de obras aptas (pós-medição ou venda direta) aguardando desenhos e aprovação.
                    </p>
                </div>
            </div>

            {filaProjetos.length === 0 ? (
                <div className="flex-1 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center p-8 text-center">
                    <FileSignature className="w-12 h-12 text-zinc-600 mb-4" />
                    <h3 className="text-lg font-medium text-zinc-300">Caixa de Projetos Vazia</h3>
                    <p className="text-sm text-zinc-500 mt-1 max-w-sm">
                        As obras confirmadas na medição começarão a aparecer aqui magicamente.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto custom-scrollbar pb-6">
                    {filaProjetos.map((pedido: any) => {
                        const projAtual = pedido.projetos_v2?.[0]; // Assume 1 active project per pedido
                        const statusProj = projAtual?.status || 'Aguardando Projeto';
                        const hasAssumido = statusProj !== 'Aguardando Projeto';

                        return (
                            <div key={pedido.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${pedido.urgencia === 'Alta' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                                            }`}>
                                            Urgência {pedido.urgencia}
                                        </span>

                                        <span className={`text-xs font-semibold px-2 py-1 rounded-md ${statusProj === 'Aguardando Projeto' ? 'bg-amber-500/10 text-amber-500' :
                                                statusProj === 'Em Andamento' ? 'bg-blue-500/10 text-blue-400' :
                                                    statusProj === 'Aguardando Aprovação' ? 'bg-violet-500/10 text-violet-400' :
                                                        statusProj === 'Reprovado' ? 'bg-red-500/10 text-red-400' :
                                                            'bg-emerald-500/10 text-emerald-400'
                                            }`}>
                                            {statusProj}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-semibold text-zinc-100 truncate">
                                        {pedido.clientes?.nome || 'Cliente não Cadastrado'}
                                    </h3>
                                    <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                                        {pedido.obras?.endereco || 'Endereço não informado'}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-zinc-800 border-dashed flex items-center gap-2">
                                    {statusProj === 'Aguardando Projeto' && (
                                        <button className="flex-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors py-2 px-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-md">
                                            Assumir Projeto
                                        </button>
                                    )}
                                    {statusProj === 'Em Andamento' && (
                                        <button className="flex-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors py-2 px-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-md">
                                            Enviar para Aprovação
                                        </button>
                                    )}
                                    {(statusProj === 'Aguardando Aprovação' || statusProj === 'Reprovado') && (
                                        <button className="flex-1 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors py-2 px-3 bg-violet-500/10 hover:bg-violet-500/20 rounded-md">
                                            Painel de Revisão
                                        </button>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}
