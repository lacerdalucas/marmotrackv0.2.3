'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { getFilaDeProducaoAction, enviarParaKanbanDeCorteAction } from '@/app/actions/fila_producao';
import { Factory, AlertTriangle, ArrowRight, Calendar, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function FilaProducaoPage() {
    const [pedidos, setPedidos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        carregarFila();
    }, []);

    const carregarFila = async () => {
        setIsLoading(true);
        const res = await getFilaDeProducaoAction();
        if (res.success) setPedidos(res.data || []);
        setIsLoading(false);
    };

    const handleEnviarKanban = (id: string, orcamento: string) => {
        startTransition(async () => {
            const res = await enviarParaKanbanDeCorteAction(id);
            if (res.success) {
                toast.success(`O.P. #${orcamento} despachada para o Kanban.`);
                setPedidos(prev => prev.filter(p => p.id !== id));
            } else {
                toast.error(res.message);
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
            <div className="mb-8 border-b border-zinc-800 pb-5">
                <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl flex items-center gap-3">
                    <Factory className="w-8 h-8 text-amber-500" /> Fila de Produção
                </h1>
                <p className="mt-2 text-sm text-zinc-400">
                    Obras estruturadas pela engenharia. Despache para o piso de fábrica (Kanban) conforme a capacidade ds áreas de Corte.
                </p>
            </div>

            {isLoading ? (
                <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-zinc-600" /></div>
            ) : pedidos.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <Factory className="w-12 h-12 text-zinc-700 mb-4" />
                    <h3 className="text-lg font-medium text-zinc-300">Bolsão Vazio</h3>
                    <p className="text-zinc-500 text-sm mt-1">Nenhum projeto aguardando corte manual.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pedidos.map(pedido => {
                        const numItens = pedido.pedidos_itens_v2?.length || 0;
                        const backlogErros = pedido.alertas_producao || [];
                        const dataPrometida = pedido.data_prometida ? new Date(pedido.data_prometida + 'T12:00:00') : null;
                        const hasMedidaExtra = pedido.alerta_medicao_divergente;

                        return (
                            <div key={pedido.id} className={cn("bg-zinc-900 border rounded-xl overflow-hidden shadow-sm flex flex-col",
                                backlogErros.length > 0 ? "border-red-500/50 shadow-red-500/10" : "border-zinc-800"
                            )}>
                                {/* Info Box */}
                                <div className="p-5 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800">
                                            <span className="text-sm font-bold text-zinc-300">{pedido.numero_orcamento}</span>
                                        </div>
                                        {pedido.urgencia === 'Alta' && <span className="bg-red-500/10 text-red-400 text-[10px] font-bold uppercase px-2 py-1 rounded">Urgente</span>}
                                    </div>
                                    
                                    <h3 className="text-base font-bold text-white uppercase truncate" title={pedido.cliente_nome}>{pedido.cliente_nome}</h3>
                                    <p className="text-xs text-zinc-500 truncate mt-1">{pedido.endereco_obra}</p>

                                    {hasMedidaExtra && (
                                        <div className="mt-3">
                                            <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-1 rounded text-[10px] font-bold tracking-wider" title="O Técnico adicionou peças além do orçamento">
                                                <AlertTriangle className="w-3 h-3" /> Modificado na Obra (Extras)
                                            </span>
                                        </div>
                                    )}

                                    <div className="mt-4 flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
                                            <Calendar className="w-3.5 h-3.5" /> Data: {dataPrometida ? dataPrometida.toLocaleDateString('pt-BR') : 'Não agendada'}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-medium text-blue-400 bg-blue-500/10 p-2 rounded border border-blue-500/20">
                                            {numItens} itens estruturados p/ CNC
                                        </div>
                                    </div>

                                    {/* Alertas Soft Delete Kanban */}
                                    {backlogErros.length > 0 && (
                                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                                            <p className="text-xs font-bold text-red-500 flex items-center gap-1.5 mb-2"><AlertTriangle className="w-4 h-4" /> Alertas de Chão de Fábrica:</p>
                                            <ul className="space-y-1.5">
                                                {backlogErros.map((erro: any, idx: number) => (
                                                    <li key={idx} className="text-[10px] text-red-400 leading-tight">
                                                        <strong className="text-red-300">{erro.peca}:</strong> {erro.motivo} <br/>
                                                        <span className="text-red-500/60">{new Date(erro.data).toLocaleString('pt-BR')} via {erro.usuario}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Action */}
                                <div className="p-3 bg-zinc-950/40 border-t border-zinc-800">
                                    <button 
                                        onClick={() => handleEnviarKanban(pedido.id, pedido.numero_orcamento)}
                                        disabled={isPending}
                                        className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50">
                                        {isPending ? <Loader2 className="w-4 h-4 animate-spin"/> : <ArrowRight className="w-4 h-4" />} Despachar para o Kanban
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
