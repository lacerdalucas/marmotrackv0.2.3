'use client';

import React, { useState, useMemo } from 'react';
import { MapPin, Edit2, Trash2, X, Loader2, User, AlertTriangle, Calendar, Filter, CheckCircle, Ban, Clock } from 'lucide-react';
import { cancelarMedicaoAction, editarAgendamentoAction } from '@/app/actions/agenda';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Tecnico { id: string; full_name: string; }

type DateFilter = 'todos' | 'hoje' | '7dias' | 'mes';
type StatusFilter = 'por_executar' | 'concluidas' | 'canceladas' | 'todas';

export default function AgendaClient({ medicoes, tecnicos }: { medicoes: any[]; tecnicos: Tecnico[] }) {
    const [dateFilter, setDateFilter] = useState<DateFilter>('todos');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('por_executar');

    // Modal states
    const [editModal, setEditModal] = useState<any>(null);
    const [cancelModal, setCancelModal] = useState<any>(null);

    const [editForm, setEditForm] = useState({ data_agendada: '', responsavel_id: '', observacoes: '' });
    const [cancelForm, setCancelForm] = useState({ motivo: '', confirmacao: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ─── Filtros ───
    const filteredMedicoes = useMemo(() => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        return medicoes.filter((m: any) => {
            // Status filter
            if (statusFilter === 'por_executar' && !['Agendada', 'Em Andamento'].includes(m.status)) return false;
            if (statusFilter === 'concluidas' && !['Concluida', 'Frustrada'].includes(m.status)) return false;
            if (statusFilter === 'canceladas' && m.status !== 'Cancelada') return false;

            // Date filter
            if (dateFilter !== 'todos' && m.data_agendada) {
                const d = new Date(m.data_agendada);
                if (dateFilter === 'hoje') {
                    const dDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                    if (dDay.getTime() !== today.getTime()) return false;
                } else if (dateFilter === '7dias') {
                    const diff = (d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
                    if (diff < 0 || diff > 7) return false;
                } else if (dateFilter === 'mes') {
                    if (d.getMonth() !== now.getMonth() || d.getFullYear() !== now.getFullYear()) return false;
                }
            } else if (dateFilter !== 'todos' && !m.data_agendada) return false;

            return true;
        });
    }, [medicoes, dateFilter, statusFilter]);

    // ─── Handlers ───
    const openEditModal = (m: any) => {
        setEditForm({
            data_agendada: m.data_agendada ? new Date(m.data_agendada).toISOString().slice(0, 16) : '',
            responsavel_id: m.responsavel_id || '',
            observacoes: '',
        });
        setEditModal(m);
    };

    const handleEdit = async () => {
        if (!editForm.data_agendada) { toast.error('Selecione a data.'); return; }
        setIsSubmitting(true);
        try {
            const res = await editarAgendamentoAction(editModal.id, {
                data_agendada: new Date(editForm.data_agendada).toISOString(),
                responsavel_id: editForm.responsavel_id || undefined,
                observacoes: editForm.observacoes || undefined,
            });
            if (res.success) { toast.success(res.message); setEditModal(null); }
            else toast.error(res.message);
        } catch { toast.error('Erro de comunicação.'); }
        finally { setIsSubmitting(false); }
    };

    const openCancelModal = (m: any) => {
        setCancelForm({ motivo: '', confirmacao: '' });
        setCancelModal(m);
    };

    // Safety check: digitar nº orçamento ou nome do cliente
    const pedidoCancelamento = cancelModal?.pedidos_v2;
    const pedidoData = Array.isArray(pedidoCancelamento) ? pedidoCancelamento[0] : pedidoCancelamento;
    const safetyTarget = pedidoData?.numero_orcamento || pedidoData?.clientes?.nome || '';
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

    const formatDate = (iso: string) => {
        try { return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
        catch { return 'Data inválida'; }
    };

    const statusBadge = (status: string) => {
        const map: Record<string, string> = {
            'Agendada': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
            'Em Andamento': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
            'Concluida': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            'Frustrada': 'bg-red-500/10 text-red-400 border-red-500/20',
            'Cancelada': 'bg-zinc-800 text-zinc-500 border-zinc-700',
        };
        return <span className={cn("inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border", map[status] || map['Cancelada'])}>{status === 'Concluida' ? 'Concluída' : status}</span>;
    };

    return (
        <>
            {/* ═══ Filtros ═══ */}
            <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-1.5 mr-4">
                    <Filter className="w-4 h-4 text-zinc-500" />
                    <span className="text-xs font-semibold text-zinc-500 uppercase">Data:</span>
                </div>
                {[ ['todos', 'Todos'], ['hoje', 'Hoje'], ['7dias', '7 Dias'], ['mes', 'Este Mês'] ].map(([key, label]) => (
                    <button key={key} onClick={() => setDateFilter(key as DateFilter)}
                        className={cn("px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors",
                            dateFilter === key ? "bg-blue-500/15 text-blue-400 border-blue-500/30" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700")}>
                        {label}
                    </button>
                ))}

                <div className="w-px bg-zinc-800 mx-2" />

                <div className="flex items-center gap-1.5 mr-2">
                    <span className="text-xs font-semibold text-zinc-500 uppercase">Status:</span>
                </div>
                {[
                    ['por_executar', 'Por Executar', <Clock key="c" className="w-3 h-3" />],
                    ['concluidas', 'Concluídas', <CheckCircle key="ch" className="w-3 h-3" />],
                    ['canceladas', 'Canceladas', <Ban key="b" className="w-3 h-3" />],
                    ['todas', 'Todas', null],
                ].map(([key, label, icon]) => (
                    <button key={key as string} onClick={() => setStatusFilter(key as StatusFilter)}
                        className={cn("px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5",
                            statusFilter === key ? "bg-blue-500/15 text-blue-400 border-blue-500/30" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700")}>
                        {icon} {label as string}
                    </button>
                ))}
            </div>

            {/* ═══ Tabela ═══ */}
            <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                <table className="min-w-full divide-y divide-zinc-800">
                    <thead className="bg-zinc-900 border-b border-zinc-800">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Obra / Cliente</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Data & Horário</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Técnico</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-zinc-400 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50 bg-zinc-950/30">
                        {filteredMedicoes.length === 0 ? (
                            <tr><td colSpan={5} className="px-6 py-12 text-center text-sm text-zinc-500">Nenhuma medição encontrada com os filtros selecionados.</td></tr>
                        ) : filteredMedicoes.map((m: any) => {
                            const pedido = Array.isArray(m.pedidos_v2) ? m.pedidos_v2[0] : m.pedidos_v2;
                            const profile = Array.isArray(m.users_profile) ? m.users_profile[0] : m.users_profile;
                            return (
                                <tr key={m.id} className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">#{pedido?.numero_orcamento || '—'}</span>
                                            <div>
                                                <div className="text-sm font-semibold text-zinc-200">{pedido?.clientes?.nome || 'Desconhecido'}</div>
                                                <div className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                                                    <MapPin className="w-3 h-3" /> {pedido?.obras?.endereco || 'Sem endereço'}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300 font-medium">
                                        {m.data_agendada ? formatDate(m.data_agendada) : 'A definir'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                                                {profile?.full_name?.charAt(0) || '?'}
                                            </div>
                                            {profile?.full_name || 'Não atribuído'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{statusBadge(m.status)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        {m.status === 'Agendada' && (
                                            <div className="flex items-center justify-end gap-1">
                                                <button onClick={() => openEditModal(m)}
                                                    className="text-blue-400 hover:text-blue-300 p-2 hover:bg-blue-500/10 rounded-md transition-colors" title="Alterar">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => openCancelModal(m)}
                                                    className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded-md transition-colors" title="Cancelar">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                        {m.status === 'Cancelada' && m.motivo_cancelamento && (
                                            <span className="text-xs text-zinc-600 italic" title={m.motivo_cancelamento}>Cancelada</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* ═══ Modal Editar Agendamento ═══ */}
            {editModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl w-full max-w-lg">
                        <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-950/50">
                            <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                                <Edit2 className="w-5 h-5 text-blue-500" /> Alterar Agendamento
                            </h2>
                            <button onClick={() => setEditModal(null)} className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">Nova Data e Horário *</label>
                                <input type="datetime-local" value={editForm.data_agendada}
                                    onChange={e => setEditForm(p => ({ ...p, data_agendada: e.target.value }))}
                                    className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-md px-3 text-sm text-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none [color-scheme:dark]" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2"><User className="w-4 h-4 text-zinc-500" /> Técnico</label>
                                <select value={editForm.responsavel_id} onChange={e => setEditForm(p => ({ ...p, responsavel_id: e.target.value }))}
                                    className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-md px-3 text-sm text-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                                    <option value="">Manter atual</option>
                                    {tecnicos.map(t => <option key={t.id} value={t.id}>{t.full_name}</option>)}
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">Observação do reagendamento</label>
                                <textarea value={editForm.observacoes} onChange={e => setEditForm(p => ({ ...p, observacoes: e.target.value }))}
                                    rows={2} placeholder="Ex: Cliente pediu remarcação..."
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                            </div>
                            <div className="pt-4 flex justify-end gap-3 border-t border-zinc-800">
                                <button onClick={() => setEditModal(null)} className="px-4 py-2 text-sm text-zinc-300 hover:text-white">Cancelar</button>
                                <button onClick={handleEdit} disabled={isSubmitting || !editForm.data_agendada}
                                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-md disabled:opacity-50 flex items-center gap-2">
                                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />} Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ═══ Modal Cancelamento com Safety Check ═══ */}
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
                                <p className="text-xs text-red-400/80">Esta medição será marcada como Cancelada. O motivo ficará registrado na auditoria do sistema.</p>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">Motivo do Cancelamento *</label>
                                <textarea value={cancelForm.motivo}
                                    onChange={e => setCancelForm(p => ({ ...p, motivo: e.target.value }))}
                                    rows={3} placeholder="Ex: Cliente solicitou reagendamento, obra não liberada..."
                                    className="w-full bg-zinc-950 border border-red-500/20 rounded-md p-3 text-sm text-zinc-200 focus:ring-2 focus:ring-red-500 outline-none resize-none" />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-zinc-300">
                                    Confirmação de segurança: digite <span className="font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">{safetyTarget}</span>
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
