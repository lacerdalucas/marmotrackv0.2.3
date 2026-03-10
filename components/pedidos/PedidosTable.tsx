'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { ExternalLink, FolderOpen, Calendar, User, Clock, FileText, Edit2, Trash2, AlertTriangle, X } from 'lucide-react';
import { excluirPedidoComercial } from '@/app/actions/pedidos_v2';

interface PedidosTableProps {
    pedidos: any[];
    isAdmin?: boolean;
}

export function PedidoStatusBadge({ status }: { status: string }) {
    let badgeColor = "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    let dotColor = "bg-zinc-500";

    const normalizedStatus = status?.toLowerCase().trim() || 'pendente';

    if (normalizedStatus === 'orçamento' || normalizedStatus === 'aguardando aprovação') {
        badgeColor = "bg-amber-500/10 text-amber-400 border-amber-500/20";
        dotColor = "bg-amber-500";
    } else if (normalizedStatus === 'aprovado' || normalizedStatus === 'em produção') {
        badgeColor = "bg-blue-500/10 text-blue-400 border-blue-500/20";
        dotColor = "bg-blue-500";
    } else if (normalizedStatus === 'concluído') {
        badgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
        dotColor = "bg-emerald-500";
    }

    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium border ${badgeColor}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
            {status || 'Pendente'}
        </span>
    );
}

export function PedidosTable({ pedidos, isAdmin = false }: PedidosTableProps) {
    if (!pedidos || pedidos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border border-zinc-800 bg-zinc-900 border-dashed">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 mb-4">
                    <FolderOpen className="h-6 w-6 text-zinc-400" aria-hidden="true" />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-zinc-200">Nenhum pedido cadastrado</h3>
                <p className="mt-1 text-sm text-zinc-500 max-w-sm">
                    Ainda não há pedidos no sistema. Comece cadastrando o primeiro projeto recebido.
                </p>
                <div className="mt-6">
                    <Link
                        href="/pedidos/novo"
                        className="inline-flex items-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-200 shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 border border-zinc-700 transition"
                    >
                        Cadastrar Primeiro Pedido
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-800 text-left text-sm">
                    <thead>
                        <tr className="bg-zinc-950/50">
                            <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-400">
                                Pedido / Orçamento
                            </th>
                            <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-400">
                                Cliente
                            </th>
                            <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-400">
                                Prazo
                            </th>
                            <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-400">
                                Status
                            </th>
                            <th scope="col" className="px-4 py-3.5 font-semibold text-zinc-400 text-right">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60 bg-transparent">
                        {pedidos.map((pedido) => {
                            const formattedDate = pedido.data_prometida
                                ? new Intl.DateTimeFormat('pt-BR').format(new Date(pedido.data_prometida))
                                : 'Não definido';

                            const displayId = pedido.id.substring(0, 8).toUpperCase();

                            return (
                                <tr key={pedido.id} className="hover:bg-zinc-800/30 transition-colors">
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center gap-x-2">
                                            <FileText className="h-4 w-4 text-zinc-500" />
                                            <span className="font-mono text-zinc-300">
                                                {pedido.numero_orcamento ? `#${pedido.numero_orcamento}` : `#${displayId}`}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 font-medium text-zinc-300">
                                        <div className="flex items-center gap-x-2">
                                            <User className="h-4 w-4 text-zinc-500" />
                                            <span className="truncate max-w-[200px]" title={pedido.clientes?.nome || pedido.cliente_nome || 'Cliente não informado'}>
                                                {pedido.clientes?.nome || pedido.cliente_nome || 'Cliente não informado'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-zinc-400">
                                        <div className="flex items-center gap-x-2">
                                            <Calendar className="h-4 w-4 text-zinc-500" />
                                            {formattedDate}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <PedidoStatusBadge status={pedido.status_comercial} />
                                            
                                            {/* Alerta de Medição Ausente para Pedidos Aprovados/Em Produção */}
                                            {(() => {
                                                const status = pedido.status_comercial?.toLowerCase() || '';
                                                if (status === 'aprovado' || status === 'em produção') {
                                                    const hasActiveMedicao = pedido.medicoes_v2 && 
                                                        Array.isArray(pedido.medicoes_v2) 
                                                            ? pedido.medicoes_v2.some((m: any) => m.status !== 'Cancelada')
                                                            : (pedido.medicoes_v2 && pedido.medicoes_v2.status !== 'Cancelada');
                                                            
                                                    if (!hasActiveMedicao) {
                                                        return (
                                                            <div 
                                                                className="flex items-center justify-center text-amber-500 hover:text-amber-400 cursor-help" 
                                                                title="Atenção: Este pedido não possui agenda de medição prevista (Ou foi cancelada). Verifique se é necessário reagendar."
                                                            >
                                                                <AlertTriangle className="h-4 w-4" />
                                                            </div>
                                                        );
                                                    }
                                                }
                                                return null;
                                            })()}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/pedidos/${pedido.id}`}
                                                className="inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700"
                                                title="Ver Detalhes e Histórico"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>

                                            <Link
                                                href={`/pedidos/${pedido.id}/editar`}
                                                className="inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-colors border border-zinc-700"
                                                title="Editar Pedido"
                                            >
                                                <Edit2 className="h-4 w-4" />
                                            </Link>

                                            {isAdmin ? (
                                                <DeleteButton 
                                                    pedidoId={pedido.id} 
                                                    pedidoIdentificador={pedido.numero_orcamento || displayId} 
                                                />
                                            ) : (
                                                <button
                                                    disabled
                                                    className="inline-flex items-center justify-center rounded-md p-2 transition-colors border bg-zinc-800/50 text-zinc-600 border-zinc-800/50 cursor-not-allowed"
                                                    title="Permissão Restrita: Apenas Administradores podem excluir pedidos"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function DeleteButton({ pedidoId, pedidoIdentificador }: { pedidoId: string, pedidoIdentificador: string }) {
    const [isPending, startTransition] = useTransition();
    const [showModal, setShowModal] = useState(false);
    const [motivo, setMotivo] = useState('');
    const [confirmacao, setConfirmacao] = useState('');

    const handleDeleteClick = () => {
        setShowModal(true);
        setMotivo('');
        setConfirmacao('');
    };

    const handleConfirmDelete = () => {
        if (confirmacao !== pedidoIdentificador) {
            alert('Número do pedido digitado não confere.');
            return;
        }

        if (!motivo.trim() || motivo.length < 5) {
            alert('Por favor, informe um motivo válido para a exclusão (mínimo 5 caracteres).');
            return;
        }

        startTransition(async () => {
            const result = await excluirPedidoComercial(pedidoId, motivo);
            if (!result.success) {
                alert(result.message);
            }
            setShowModal(false);
        });
    };

    return (
        <>
            <button
                onClick={handleDeleteClick}
                disabled={isPending}
                className={`inline-flex items-center justify-center rounded-md p-2 transition-colors border ${isPending ? 'bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed' : 'bg-zinc-800 text-red-400 hover:bg-red-500/10 border-zinc-700 hover:border-red-500/20'}`}
                title="Excluir Pedido"
            >
                <Trash2 className="h-4 w-4" />
            </button>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
                    <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl relative">
                        <button 
                            onClick={() => setShowModal(false)}
                            className="absolute right-4 top-4 text-zinc-400 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                                <AlertTriangle className="h-5 w-5 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Excluir Pedido</h3>
                        </div>

                        <div className="space-y-4 text-left">
                            <p className="text-sm text-zinc-400">
                                Esta ação irá cancelar o pedido <strong>{pedidoIdentificador}</strong> e liberará este número para ser reutilizado. Operações em andamento de medição também poderão ser afetadas.
                            </p>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">
                                    Motivo da exclusão *
                                </label>
                                <textarea
                                    value={motivo}
                                    onChange={(e) => setMotivo(e.target.value)}
                                    placeholder="Descreva o motivo pelo qual este pedido está sendo excluído..."
                                    className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">
                                    Confirme o número do pedido *
                                </label>
                                <p className="text-xs text-zinc-500 mb-2">
                                    Para confirmar, digite exatamente: <strong className="font-mono text-zinc-300 select-all">{pedidoIdentificador}</strong>
                                </p>
                                <input
                                    type="text"
                                    value={confirmacao}
                                    onChange={(e) => setConfirmacao(e.target.value)}
                                    placeholder={pedidoIdentificador}
                                    className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                            </div>

                            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-zinc-800">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="rounded-md px-4 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    disabled={isPending}
                                    className="inline-flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? (
                                        <>Aguarde...</>
                                    ) : (
                                        <>
                                            <Trash2 className="h-4 w-4" />
                                            Confirmar Exclusão
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
