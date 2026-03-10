import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import HistoricoEventos from '@/components/pedidos/HistoricoEventos';
import PainelAprovacao from '@/components/pedidos/PainelAprovacao';
import { Building2, Calendar, FileText, Phone, User as UserIcon, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function PedidoDetailsPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
    const supabase = await createClient();
    const resolvedParams = await Promise.resolve(params);
    const pedidoId = resolvedParams.id;

    // 1. Busca os dados Mestre do Pedido com JOINs
    const { data: pedido, error } = await supabase
        .from('pedidos_v2')
        .select(`
            *,
            cliente:clientes (nome, telefone, documento),
            obra:obras (endereco, responsavel_obra)
        `)
        .eq('id', pedidoId)
        .single();

    if (error || !pedido) {
        return notFound();
    }

    const { cliente, obra } = pedido as any;

    const dataPrometidaObj = pedido.data_prometida ? new Date(pedido.data_prometida) : null;
    const formatData = (d: Date | null) => d ? format(d, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : 'Não informada';

    return (
        <div className="flex flex-col gap-6 p-6 max-w-6xl mx-auto min-h-screen">

            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-3xl font-black text-zinc-100 flex items-center gap-3">
                        <FileText className="w-8 h-8 text-violet-500" />
                        Detalhes do Pedido Comercial
                    </h1>
                    <p className="text-zinc-500 mt-1">Rastreabilidade ponta a ponta e visão geral técnica.</p>
                </div>
                <Link href="/pedidos" className="text-sm font-medium text-zinc-400 hover:text-white bg-zinc-800 px-4 py-2 flex items-center justify-center rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors">
                    Voltar
                </Link>
            </div>

            {/* Cabeçalho de Resumo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Info Cliente */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Informações do Cliente</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <UserIcon className="w-5 h-5 text-zinc-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold text-zinc-200">{cliente?.nome}</p>
                                <p className="text-xs text-zinc-500 font-mono mt-1">DOC: {cliente?.documento || 'ND'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-zinc-500" />
                            <p className="text-sm text-zinc-300">{cliente?.telefone || 'Telefone não informado'}</p>
                        </div>
                    </div>
                </div>

                {/* Info Obra */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Local da Obra</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Building2 className="w-5 h-5 text-zinc-500 mt-0.5" />
                            <p className="text-sm text-zinc-300 leading-relaxed">{obra?.endereco || 'Endereço não informado'}</p>
                        </div>
                        {obra?.responsavel_obra && (
                            <div className="flex items-center gap-3">
                                <UserIcon className="w-5 h-5 text-zinc-500" />
                                <p className="text-sm text-zinc-400">Resp: <span className="text-zinc-200">{obra.responsavel_obra}</span></p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Status Comercial */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Posição Comercial</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-zinc-400">Status Atual:</span>
                            <span className={cn(
                                "text-xs font-bold px-3 py-1 rounded-full border",
                                pedido.status_comercial === 'Aprovado' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                                    pedido.status_comercial === 'Aguardando Aprovação' ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
                                        pedido.status_comercial === 'Cancelado' ? "bg-red-500/10 border-red-500/20 text-red-400" :
                                            "bg-blue-500/10 border-blue-500/20 text-blue-400"
                            )}>{pedido.status_comercial}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-zinc-400">Urgência:</span>
                            <span className={cn(
                                "text-xs font-bold px-2 py-1 rounded-md border",
                                pedido.urgencia === 'Alta' ? "bg-red-500/10 border-red-500/30 text-red-400" :
                                    pedido.urgencia === 'Baixa' ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" :
                                        "bg-zinc-800 border-zinc-700 text-zinc-300"
                            )}>Prioridade {pedido.urgencia}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-zinc-800/50">
                            <Calendar className="w-4 h-4 text-zinc-500" />
                            <p className="text-xs text-zinc-400">Promessa: <span className="text-zinc-200 font-medium">{formatData(dataPrometidaObj)}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout Lateral: Itens (Futuro) + Timeline (Agora) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">

                {/* Coluna Principal - Esquerda (Itens Extraídos) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl w-full">
                        <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-4">
                            <h2 className="text-lg font-bold text-zinc-100 uppercase tracking-widest text-sm flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-500" />
                                Itens do Orçamento
                            </h2>
                        </div>

                        <div className="flex flex-col items-center justify-center p-10 border border-dashed border-zinc-800 rounded-xl bg-zinc-950/50">
                            <AlertTriangle className="w-12 h-12 text-zinc-700 mb-4" />
                            <h3 className="text-zinc-300 font-bold text-center">Fila de Itens (Fase Seguinte)</h3>
                            <p className="text-zinc-500 text-sm mt-2 text-center max-w-sm">
                                O Parser Inteligente de PDF para capturar e parsear as linhas orçamentárias item a item com `catalogo_erp` será anexado aqui.

                                {pedido.texto_extraido && (
                                    <div className="mt-4 text-xs font-bold font-mono text-emerald-500 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/30 text-center">
                                        Importação HIL do PDF registrada.
                                    </div>
                                )}
                            </p>
                        </div>

                        {pedido.observacoes && (
                            <div className="mt-6 p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Observações Livres</p>
                                <p className="text-sm text-zinc-300 italic">"{pedido.observacoes}"</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Coluna Secundária - Direita (Interação e Histórico) */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Painel de Aprovação e Decisão de Produção */}
                    <PainelAprovacao
                        pedidoId={pedidoId}
                        currentStatus={pedido.status_comercial}
                    />

                    {/* Timeline de Validação e Event Sourcing */}
                    <HistoricoEventos pedidoId={pedidoId} />
                </div>

            </div>
        </div>
    );
}
