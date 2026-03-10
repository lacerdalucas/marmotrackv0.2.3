'use client';

import React, { useState } from 'react';
import { aprovarPedidoAction } from '@/app/actions/medicao';
import { toast } from 'sonner';
import { Check, CheckCircle2, Loader2, Ruler } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PainelAprovacaoProps {
    pedidoId: string;
    currentStatus: string;
}

export default function PainelAprovacao({ pedidoId, currentStatus }: PainelAprovacaoProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [precisaMedicao, setPrecisaMedicao] = useState(true);

    const handleAprovar = async () => {
        setIsSubmitting(true);
        try {
            const res = await aprovarPedidoAction({
                pedido_id: pedidoId,
                precisa_medicao: precisaMedicao,
                observacoes: "Aprovado via Painel Administrativo",
            });

            if (res.success) {
                toast.success(res.message);
                // O page action tem revalidatePath, o servidor vai enviar as novas props.
            } else {
                toast.error(res.message || "Erro desconhecido");
            }
        } catch (err) {
            toast.error("Erro interno ao comunicar com servidor");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (currentStatus === 'Aprovado') {
        return (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    <div>
                        <h3 className="text-emerald-400 font-bold text-sm">Pedido Aprovado e Auditado</h3>
                        <p className="text-emerald-500/70 text-xs">O gatilho de produção/medição deste pedido já foi ativado com sucesso.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900 border border-violet-500/30 rounded-xl p-5 shadow-sm shadow-violet-900/10">
            <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-2 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-violet-500" />
                Painel de Aprovação Comercial
            </h3>

            <p className="text-zinc-400 text-sm mb-4">
                Revise os dados e chancele o pedido para que ele entre no fluxo das réguas de produção fabril.
            </p>

            <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-4 bg-zinc-950 p-4 border border-zinc-800 rounded-lg mb-4">
                <div className="flex items-start justify-between w-full md:w-auto gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-zinc-200 block flex items-center gap-2">
                            <Ruler className="w-4 h-4 text-zinc-500" /> Este pedido exige Medição?
                        </label>
                        <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                            Se "Não", ele pulará direto para a Fila de Projeto/Kanban.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setPrecisaMedicao(!precisaMedicao)}
                        className={cn(
                            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 mt-1",
                            precisaMedicao ? "bg-violet-600" : "bg-zinc-700"
                        )}
                        role="switch"
                        aria-checked={precisaMedicao}
                    >
                        <span
                            aria-hidden="true"
                            className={cn(
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                precisaMedicao ? "translate-x-5" : "translate-x-0"
                            )}
                        />
                    </button>
                </div>

                <button
                    onClick={handleAprovar}
                    disabled={isSubmitting}
                    className="w-full md:w-auto h-10 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all flex justify-center items-center disabled:opacity-50 shadow-md shadow-emerald-900/20"
                >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
                    {isSubmitting ? 'Aprovando...' : 'Aprovar Pedido'}
                </button>
            </div>

            {precisaMedicao && (
                <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 opacity-80">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                    Isso irá criar e agendar a medição em /medicoes como status Pendente automaticamente
                </div>
            )}

        </div>
    );
}
