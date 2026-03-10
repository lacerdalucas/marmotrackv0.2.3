'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2, AlertTriangle, FileWarning, Ruler, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { concluirMedicaoSchema, type ConcluirMedicaoInput } from '@/lib/validations/medicao_v2';
import { concluirMedicaoAction } from '@/app/actions/medicao';
import { toast } from 'sonner';

interface PainelMedidorProps {
    medicaoId: string;
    onClose?: () => void;
}

export default function PainelMedidorMobile({ medicaoId, onClose }: PainelMedidorProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverState, setServerState] = useState<{ type: 'error' | 'success' | null, msg: string }>({ type: null, msg: '' });

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<ConcluirMedicaoInput>({
        resolver: zodResolver(concluirMedicaoSchema),
        defaultValues: {
            medicao_id: medicaoId,
            apto_para_projeto: false,
            status: 'Concluida',
            pendencias_obra: ''
        }
    });

    const aptoToggle = watch('apto_para_projeto');
    const statusToggle = watch('status');

    const onSubmit = async (data: ConcluirMedicaoInput) => {
        setIsSubmitting(true);
        setServerState({ type: null, msg: '' });

        try {
            const res = await concluirMedicaoAction(data);
            if (res.success) {
                toast.success(res.message);
                if (onClose) {
                    setTimeout(() => onClose(), 1500);
                }
            } else {
                toast.error(res.message);
            }
        } catch (err) {
            setServerState({ type: 'error', msg: 'Falha de conexão com o painel.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl overflow-hidden flex flex-col">
            {/* Handheld Header */}
            <div className="bg-zinc-950 p-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
                        <Ruler className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-base font-bold text-zinc-100">Handover de Medição</h2>
                        <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Custódia na Obra</p>
                    </div>
                </div>
                {onClose && (
                    <button onClick={onClose} className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors rounded-full hover:bg-zinc-800">
                        <X className="w-5 h-5" />
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-6 flex-1 overflow-y-auto custom-scrollbar">

                {/* Toggle 1: Status Base */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold text-zinc-300">Como foi a visita?</label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => setValue('status', 'Concluida')}
                            className={cn(
                                "h-12 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all border",
                                statusToggle === 'Concluida' ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400" : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            <CheckCircle2 className="w-4 h-4" /> Finalizada
                        </button>
                        <button
                            type="button"
                            onClick={() => { setValue('status', 'Frustrada'); setValue('apto_para_projeto', false); }}
                            className={cn(
                                "h-12 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all border",
                                statusToggle === 'Frustrada' ? "bg-red-500/10 border-red-500/50 text-red-400" : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            <AlertTriangle className="w-4 h-4" /> Frustrada
                        </button>
                    </div>
                </div>

                {statusToggle === 'Concluida' && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {/* Toggle 2: Avaliação Estrutural */}
                        <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-950/50">
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-zinc-200 block">Obra Apta para Projeto?</label>
                                    <p className="text-xs text-zinc-500 leading-relaxed">
                                        Marque SIM se o gabarito/medidas bateram e o setor de projetos já pode desenhar.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setValue('apto_para_projeto', !aptoToggle)}
                                    className={cn(
                                        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900",
                                        aptoToggle ? "bg-violet-600" : "bg-zinc-700"
                                    )}
                                    role="switch"
                                    aria-checked={aptoToggle}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={cn(
                                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                            aptoToggle ? "translate-x-5" : "translate-x-0"
                                        )}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Justificativas (Condicional se Inapto ou sempre útil) */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                                <FileWarning className="w-4 h-4 text-amber-500" /> Relato / Pendências
                            </label>
                            <textarea
                                {...register('pendencias_obra')}
                                rows={4}
                                placeholder={!aptoToggle ? "Obrigatório detalhar o que falta (fundo de reboco, prumo, tubulação...)" : "Observações gerais da visita (Opcional)"}
                                className={cn(
                                    "w-full bg-zinc-950 border rounded-xl p-3 text-sm text-zinc-200 outline-none transition-colors resize-none custom-scrollbar",
                                    !aptoToggle && !watch('pendencias_obra') ? "border-amber-500/50 focus:border-amber-500" : "border-zinc-800 focus:border-violet-500"
                                )}
                            />
                        </div>
                    </div>
                )}

                {statusToggle === 'Frustrada' && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500" /> Motivo da Frustração *
                        </label>
                        <textarea
                            {...register('pendencias_obra')}
                            rows={4}
                            placeholder="Ex: Cliente não estava, obra embargada, sem energia, etc."
                            className="w-full bg-zinc-950 border border-red-500/30 rounded-xl p-3 text-sm text-zinc-200 outline-none focus:border-red-500 transition-colors resize-none custom-scrollbar"
                        />
                    </div>
                )}




            </form>

            {/* Footer Action */}
            <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting || (statusToggle === 'Frustrada' && !watch('pendencias_obra')) || (!aptoToggle && statusToggle === 'Concluida' && !watch('pendencias_obra'))}
                    className="w-full h-12 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-900/20"
                >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Registrar Check-out'}
                </button>
            </div>
        </div>
    );
}
