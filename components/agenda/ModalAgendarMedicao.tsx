'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { agendarMedicaoSchema, type AgendarMedicaoInput } from '@/lib/validations/medicao_v2';
import { agendarMedicaoAction } from '@/app/actions/medicao';
import { toast } from 'sonner';
import { Loader2, X, Calendar as CalendarIcon, User, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MedicaoPendente {
    id: string;
    pedido_id: string;
    cliente_nome: string;
    endereco_obra?: string;
    statusAtual?: string;
}

interface Tecnico {
    id: string;
    full_name: string;
}

interface ModalAgendarMedicaoProps {
    isOpen: boolean;
    onClose: () => void;
    medicoesPendentes: MedicaoPendente[];
    tecnicos: Tecnico[];
}

export default function ModalAgendarMedicao({ isOpen, onClose, medicoesPendentes, tecnicos }: ModalAgendarMedicaoProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<AgendarMedicaoInput>({
        resolver: zodResolver(agendarMedicaoSchema),
    });

    if (!isOpen) return null;

    const onSubmit = async (data: AgendarMedicaoInput) => {
        setIsSubmitting(true);
        try {
            // Se data.data_agendada e hora estiverem separadas, o ideal é combinar o ISO string se usar input datetime-local
            // No caso datetime-local retorna YYYY-MM-DDThh:mm, o que passa como ISO 8601 string válido para Postgres.
            let isoDate = undefined;
            if (data.data_agendada) {
                isoDate = new Date(data.data_agendada).toISOString();
            }

            const response = await agendarMedicaoAction({
                ...data,
                data_agendada: isoDate
            });

            if (response.success) {
                toast.success(response.message);
                reset();
                onClose();
            } else {
                toast.error(response.message || 'Falha ao agendar medição.');
            }
        } catch (err) {
            toast.error('Erro de conexão ao processar agendamento.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-950/50">
                    <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5 text-blue-500" />
                        Gerenciar Agendamento
                    </h2>
                    <button onClick={onClose} className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded hover:bg-zinc-800">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                    {/* Selecionar Pedido/Medição */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-zinc-500" /> Pedido / O.S. Pendente
                        </label>
                        {medicoesPendentes.length === 0 ? (
                            <div className="p-3 text-sm text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-md">
                                Não há medições pendentes no momento. Aprove pedidos comerciais primeiro.
                            </div>
                        ) : (
                            <select
                                {...register('pedido_id')}
                                className={cn(
                                    "flex h-11 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200",
                                    "focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                                    errors.pedido_id && "border-red-500 focus:ring-red-500"
                                )}
                            >
                                <option value="">Selecione um pedido pendente...</option>
                                {medicoesPendentes.map((med) => (
                                    <option key={med.id} value={med.pedido_id}>
                                        [{med.statusAtual || 'PENDENTE'}] {med.cliente_nome} {med.endereco_obra ? `- ${med.endereco_obra}` : ''}
                                    </option>
                                ))}
                            </select>
                        )}
                        {errors.pedido_id && <span className="text-xs text-red-400">{errors.pedido_id.message}</span>}
                    </div>

                    {/* Selecionar Técnico */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                            <User className="w-4 h-4 text-zinc-500" /> Técnico Responsável
                        </label>
                        <select
                            {...register('responsavel_id')}
                            className="flex h-11 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        >
                            <option value="">(Opcional) Atribuir depois ou selecionar a mim</option>
                            {tecnicos.map((t) => (
                                <option key={t.id} value={t.id}>{t.full_name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Data e Hora */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-300">Data e Hora da Visita</label>
                        <input
                            type="datetime-local"
                            {...register('data_agendada')}
                            className={cn(
                                "flex h-11 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 custom-calendar-picker",
                                "focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                                "[color-scheme:dark]",
                                errors.data_agendada && "border-red-500 focus:ring-red-500"
                            )}
                        />
                        {errors.data_agendada && <span className="text-xs text-red-400">{errors.data_agendada.message}</span>}
                    </div>

                    {/* Observações */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-zinc-300">Observações para o Medidor</label>
                        <textarea
                            {...register('observacoes')}
                            rows={3}
                            placeholder="Ex: Levar trena a laser extra, acessar pela porta de serviço, etc."
                            className="flex w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                        />
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-800">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting || medicoesPendentes.length === 0}
                            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
