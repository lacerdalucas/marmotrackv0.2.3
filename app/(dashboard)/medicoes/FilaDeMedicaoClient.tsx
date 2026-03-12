'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, ChevronRight, Loader2, X, User, Trash2, AlertTriangle } from 'lucide-react';
import { agendarMedicaoAction } from '@/app/actions/medicao';
import { cancelarMedicaoAction } from '@/app/actions/agenda';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Tecnico { id: string; full_name: string; }

export default function FilaDeMedicaoClient({ medicoes, tecnicos }: { medicoes: any[]; tecnicos: Tecnico[] }) {
    const [modalData, setModalData] = useState<any>(null);
    const [cancelModal, setCancelModal] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ data_agendada: '', responsavel_id: '', observacoes: '' });
    const [cancelForm, setCancelForm] = useState({ motivo: '', confirmacao: '' });

    const openModal = (med: any) => {
        setModalData(med);
        setFormData({ data_agendada: '', responsavel_id: '', observacoes: '' });
    };

    const handleAgendar = async () => {
        if (!formData.data_agendada) { toast.error('Selecione a data e horário.'); return; }
        setIsSubmitting(true);
        try {
            const res = await agendarMedicaoAction({
                pedido_id: modalData.pedidos_v2?.id,
                data_agendada: new Date(formData.data_agendada).toISOString(),
                responsavel_id: formData.responsavel_id || undefined,
                observacoes: formData.observacoes || undefined,
            });
            if (res.success) { toast.success(res.message); setModalData(null); }
            else toast.error(res.message);
        } catch { toast.error('Erro de comunicação.'); }
        finally { setIsSubmitting(false); }
    };

    // ─── Cancelamento ───
    const openCancelModal = (med: any) => {
        setCancelForm({ motivo: '', confirmacao: '' });
        setCancelModal(med);
    };

    const cancelPedido = cancelModal?.pedidos_v2;
    const safetyTarget = cancelPedido?.numero_orcamento || cancelPedido?.clientes?.nome || '';
    const isSafetyPassed = cancelForm.confirmacao.trim().toLowerCase() === safetyTarget.toString().toLowerCase();

    const handleCancel = async () => {
        if (!isSafetyPassed) return;
        if (cancelForm.motivo.trim().length < 5) { toast.error('Motivo muito curto (mín. 5 caracteres).'); return; }
        setIsSubmitting(true);
        try {
            const res = await cancelarMedicaoAction(cancelModal.id, cancelForm.motivo);
            if (res.success) { toast.success(res.message); setCancelModal(null); }
            else toast.error(res.message);
        } catch { toast.error('Erro de comunicação.'); }
        finally { setIsSubmitting(false); }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-auto custom-scrollbar pb-6">
                {medicoes.map((med: any) => (
                    <div key={med.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-violet-500/30 transition-colors group">
                        <div className="flex justify-between items-start mb-3">
                            <span className="text-xs font-mono bg-violet-500/15 text-violet-400 px-2.5 py-0.5 rounded-full border border-violet-500/20">
                                Orç. #{med.pedidos_v2?.numero_orcamento || '—'}
                            </span>
                            <div className="flex items-center gap-1.5">
                                <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                                    med.pedidos_v2?.urgencia === 'Alta' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                    'bg-zinc-800 text-zinc-400 border-zinc-700')}>
                                    {med.pedidos_v2?.urgencia || 'Normal'}
                                </span>
                                <button onClick={() => openCancelModal(med)} title="Cancelar medição"
                                    className="text-zinc-600 hover:text-red-400 p-1 hover:bg-red-500/10 rounded-md transition-colors">
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        <h3 className="text-base font-semibold text-zinc-100 truncate">
                            {med.pedidos_v2?.clientes?.nome || 'Cliente não cadastrado'}
                        </h3>

                        <div className="mt-3 flex items-start gap-2 text-sm text-zinc-400">
                            <MapPin className="w-4 h-4 shrink-0 text-zinc-500 mt-0.5" />
                            <span className="line-clamp-2">
                                {med.pedidos_v2?.obras?.endereco || 'Endereço não informado'}
                                {med.pedidos_v2?.obras?.cidade && ` — ${med.pedidos_v2.obras.cidade}`}
                            </span>
                        </div>

                        <div className="mt-5 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                            <span className="text-[10px] text-zinc-600">
                                Na fila desde {new Date(med.created_at).toLocaleDateString('pt-BR')}
                            </span>
                            <button onClick={() => openModal(med)}
                                className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 px-4 py-2 rounded-lg transition-colors">
                                <Calendar className="w-3.5 h-3.5" /> Agendar <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de Agendamento */}
            {modalData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
                        <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-950/50">
                            <div>
                                <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-violet-500" /> Agendar Medição
                                </h2>
                                <p className="text-xs text-zinc-500 mt-1">
                                    Orç. #{modalData.pedidos_v2?.numero_orcamento} — {modalData.pedidos_v2?.clientes?.nome}
                                </p>
                            </div>
                            <button onClick={() => setModalData(null)} className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">Data e Horário *</label>
                                <input type="datetime-local" value={formData.data_agendada}
                                    onChange={e => setFormData(p => ({ ...p, data_agendada: e.target.value }))}
                                    className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-md px-3 text-sm text-zinc-200 focus:ring-2 focus:ring-violet-500 outline-none [color-scheme:dark]" />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                    <User className="w-4 h-4 text-zinc-500" /> Técnico Responsável
                                </label>
                                <select value={formData.responsavel_id}
                                    onChange={e => setFormData(p => ({ ...p, responsavel_id: e.target.value }))}
                                    className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-md px-3 text-sm text-zinc-200 focus:ring-2 focus:ring-violet-500 outline-none appearance-none">
                                    <option value="">(Opcional) Atribuir medidor</option>
                                    {tecnicos.map(t => <option key={t.id} value={t.id}>{t.full_name}</option>)}
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">Observações</label>
                                <textarea value={formData.observacoes}
                                    onChange={e => setFormData(p => ({ ...p, observacoes: e.target.value }))}
                                    rows={3} placeholder="Ex: Levar trena extra, entrar pela portaria B..."
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:ring-2 focus:ring-violet-500 outline-none resize-none" />
                            </div>

                            <div className="pt-4 flex justify-end gap-3 border-t border-zinc-800">
                                <button onClick={() => setModalData(null)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white">Cancelar</button>
                                <button onClick={handleAgendar} disabled={isSubmitting || !formData.data_agendada}
                                    className="px-6 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-md disabled:opacity-50 flex items-center gap-2">
                                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />} Confirmar Agendamento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Cancelamento com Safety Check */}
            {cancelModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-zinc-900 border border-red-500/30 rounded-xl shadow-2xl w-full max-w-lg">
                        <div className="flex items-center justify-between p-5 border-b border-red-500/20 bg-red-500/5">
                            <h2 className="text-lg font-bold text-red-400 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Cancelar Medição
                            </h2>
                            <button onClick={() => setCancelModal(null)} className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 space-y-5">
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-sm text-red-300">
                                <p className="font-semibold mb-1">⚠️ Ação irreversível</p>
                                <p className="text-xs text-red-400/80">Esta medição será marcada como Cancelada. O pedido ficará órfão e poderá ser reagendado depois.</p>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">Motivo do Cancelamento *</label>
                                <textarea value={cancelForm.motivo}
                                    onChange={e => setCancelForm(p => ({ ...p, motivo: e.target.value }))}
                                    rows={3} placeholder="Ex: Cliente desistiu, obra não liberada..."
                                    className="w-full bg-zinc-950 border border-red-500/20 rounded-md p-3 text-sm text-zinc-200 focus:ring-2 focus:ring-red-500 outline-none resize-none" />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">
                                    Confirmação: digite <span className="font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">{safetyTarget}</span>
                                </label>
                                <input value={cancelForm.confirmacao}
                                    onChange={e => setCancelForm(p => ({ ...p, confirmacao: e.target.value }))}
                                    placeholder={`Digite "${safetyTarget}" para confirmar`}
                                    className={cn("w-full h-11 bg-zinc-950 border rounded-md px-3 text-sm text-zinc-200 outline-none focus:ring-2 transition-colors",
                                        isSafetyPassed ? "border-emerald-500/50 focus:ring-emerald-500" : "border-red-500/20 focus:ring-red-500")} />
                                {cancelForm.confirmacao && !isSafetyPassed && (
                                    <p className="text-[10px] text-red-400">Texto não confere.</p>
                                )}
                            </div>

                            <div className="pt-4 flex justify-end gap-3 border-t border-zinc-800">
                                <button onClick={() => setCancelModal(null)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white">Voltar</button>
                                <button onClick={handleCancel} disabled={isSubmitting || !isSafetyPassed || cancelForm.motivo.trim().length < 5}
                                    className="px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors">
                                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />} Confirmar Cancelamento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
