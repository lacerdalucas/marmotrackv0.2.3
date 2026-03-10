'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Edit2, Building2, Calendar, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPedidoComercialSchema, type CreatePedidoComercialInput } from '@/lib/validations/pedido_v2';
import { atualizarPedidoComercial } from '@/app/actions/pedidos_v2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EditarPedidoForm({
    initialData,
    pedidoId
}: {
    initialData: any,
    pedidoId: string
}) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverState, setServerState] = useState<{ type: 'error' | 'success' | null, msg: string }>({ type: null, msg: '' });

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePedidoComercialInput>({
        resolver: zodResolver(createPedidoComercialSchema),
        defaultValues: initialData
    });

    const onSubmit: SubmitHandler<CreatePedidoComercialInput> = async (data) => {
        setIsSubmitting(true);
        setServerState({ type: null, msg: '' });

        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (value !== undefined && value !== null && value !== '') {
                    formData.append(key, value as string);
                }
            });

            const res = await atualizarPedidoComercial(pedidoId, formData);
            if (res.success) {
                setServerState({ type: 'success', msg: res.message });
                setTimeout(() => {
                    router.push('/pedidos');
                }, 1200);
            } else {
                setServerState({ type: 'error', msg: res.message });
            }
        } catch (err) {
            setServerState({ type: 'error', msg: 'Falha de comunicação.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
            <div className="mb-8 border-b border-zinc-800 pb-5 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
                        <Edit2 className="text-blue-500 w-6 h-6" />
                        Editar Pedido
                    </h2>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                        Atualize as informações do pedido. Essa ação será anotada no diário de operações.
                    </p>
                </div>
                <Link
                    href="/pedidos"
                    className="text-sm font-medium text-zinc-400 hover:text-white bg-zinc-800 px-4 py-2 flex items-center justify-center rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors"
                >
                    Voltar
                </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* Seção 1: Cliente e Obra */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> 1. Revisão de Cliente e Obra
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">
                                Nº do Orçamento *
                            </label>
                            <input
                                {...register('numero_orcamento')}
                                className={cn(
                                    "w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    errors.numero_orcamento ? "border-red-500/50" : "border-zinc-800 focus:border-blue-500"
                                )}
                                placeholder="Ex: 3124"
                            />
                            {errors.numero_orcamento && <span className="text-[10px] text-red-400">{errors.numero_orcamento.message}</span>}
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Nome do Cliente *</label>
                            <input
                                {...register('cliente_nome')}
                                className={cn(
                                    "w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    errors.cliente_nome ? "border-red-500/50" : "border-zinc-800 focus:border-blue-500"
                                )}
                                placeholder="Ex: Construtora Apex"
                            />
                            {errors.cliente_nome && <span className="text-[10px] text-red-400">{errors.cliente_nome.message}</span>}
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Telefone</label>
                            <input
                                {...register('telefone')}
                                className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors"
                                placeholder="(00) 00000-0000"
                            />
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">
                                Documento (Opcional)
                            </label>
                            <input
                                {...register('documento')}
                                className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors"
                                placeholder="CPF ou CNPJ"
                            />
                        </div>

                        <div className="space-y-1.5 md:col-span-2 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">
                                Endereço da Obra
                            </label>
                            <input
                                {...register('endereco_obra')}
                                className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors"
                                placeholder="Ex: Av. Paulista, 1000 - Apto 34"
                            />
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Arquiteto / Responsável</label>
                            <input
                                {...register('responsavel_obra')}
                                className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors"
                                placeholder="Ex: Arq. Juliana"
                            />
                        </div>
                    </div>
                </div>

                {/* Seção 2: Especificações Comerciais */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> 2. Detalhes Básicos do Acordo
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Status Comercial</label>
                            <select
                                {...register('status_comercial')}
                                className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors appearance-none"
                            >
                                <option value="Orçamento">Apenas Orçamento</option>
                                <option value="Aguardando Aprovação">Aguardando Aprovação</option>
                                <option value="Aprovado">Venda Aprovada (Iniciar)</option>
                            </select>
                        </div>

                        <div className="space-y-1.5 relative border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-yellow-500" /> Nível de Urgência</label>
                            <select
                                {...register('urgencia')}
                                className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors appearance-none"
                            >
                                <option value="Baixa">Baixa Prioridade</option>
                                <option value="Normal">Fluxo Normal</option>
                                <option value="Alta">Alta Urgência</option>
                            </select>
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Data Prometida (Entrega)</label>
                            <input
                                type="date"
                                {...register('data_prometida')}
                                className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors [color-scheme:dark]"
                            />
                        </div>

                        <div className="space-y-1.5 md:col-span-3 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Observações / Escopo</label>
                            <textarea
                                {...register('observacoes')}
                                rows={3}
                                placeholder="Detalhes adicionais, descritivo de materiais, formato de pagamento..."
                                className="w-full custom-scrollbar bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Status Server Feedback */}
                {serverState.type && (
                    <div className={cn(
                        "p-4 rounded-md text-sm font-medium border flex items-center gap-2",
                        serverState.type === 'error' ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    )}>
                        {serverState.type === 'success' && <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                        {serverState.msg}
                    </div>
                )}

                <div className="pt-6 border-t border-zinc-800 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-blue-900/20"
                    >
                        {isSubmitting ? (
                            <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Salvando Alterações...</>
                        ) : (
                            'Salvar Alterações'
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
}
