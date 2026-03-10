'use client';

import React, { useState, useTransition } from 'react';
import { Trash2, AlertTriangle, X } from 'lucide-react';
import { excluirMedicaoAction } from '@/app/actions/medicao';

interface DeleteMedicaoButtonProps {
    medicaoId: string;
    pedidoIdentificador: string;
    isAdmin: boolean;
}

export function DeleteMedicaoButton({ medicaoId, pedidoIdentificador, isAdmin }: DeleteMedicaoButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [showModal, setShowModal] = useState(false);
    const [motivo, setMotivo] = useState('');
    const [confirmacao, setConfirmacao] = useState('');

    if (!isAdmin) return null;

    const handleDeleteClick = () => {
        setShowModal(true);
        setMotivo('');
        setConfirmacao('');
    };

    const handleConfirmDelete = () => {
        if (confirmacao !== pedidoIdentificador) {
            alert('Número do pedido associado não confere.');
            return;
        }

        if (!motivo.trim() || motivo.length < 5) {
            alert('Por favor, informe um motivo válido para a exclusão (mínimo 5 caracteres).');
            return;
        }

        startTransition(async () => {
            const result = await excluirMedicaoAction(medicaoId, motivo);
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
                className={`flex-shrink-0 inline-flex items-center justify-center rounded-md p-1.5 transition-colors border ${isPending ? 'bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed' : 'bg-zinc-900 border-zinc-800 text-red-500 hover:bg-red-500/10 hover:border-red-500/20'}`}
                title="Excluir/Cancelar Medição"
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
                            <h3 className="text-lg font-semibold text-white">Excluir Medição</h3>
                        </div>

                        <div className="space-y-4 text-left">
                            <p className="text-sm text-zinc-400">
                                Esta ação irá **Cancelar a solicitação de Medição** atrelada ao pedido <strong>{pedidoIdentificador}</strong>. O pedido comercial <strong>não</strong> será cancelado.
                            </p>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">
                                    Motivo da exclusão *
                                </label>
                                <textarea
                                    value={motivo}
                                    onChange={(e) => setMotivo(e.target.value)}
                                    placeholder="Descreva por que esta medição não é mais necessária..."
                                    className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">
                                    Confirme o número do pedido *
                                </label>
                                <p className="text-xs text-zinc-500 mb-2">
                                    Para confirmar a exclusão da medição, digite: <strong className="font-mono text-zinc-300 select-all">{pedidoIdentificador}</strong>
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
                                    Sair
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
                                            Cancelar Medição
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
