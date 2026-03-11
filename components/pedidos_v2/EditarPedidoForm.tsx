'use client';

import React, { useState, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Edit2, Building2, Calendar, AlertTriangle, Package, ChevronDown, ChevronUp, Plus, Trash2, X, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPedidoComercialSchema, type CreatePedidoComercialInput } from '@/lib/validations/pedido_v2';
import { atualizarPedidoComercial } from '@/app/actions/pedidos_v2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { ExtractedItem } from '@/lib/marmotrack-parser';

// ─── Helpers para sub-itens vazios ───
function createEmptyPeca() { return { peca: '', comprimento: '', largura: '', quantidade: '1' }; }
function createEmptyAcabamento() { return { descricao: '', unidade: 'ML', quantidade: '' }; }
function createEmptyServico() { return { descricao: '', unidade: 'UN', quantidade: '' }; }
function createEmptyItem(): ExtractedItem { return { ambiente: '', material: '', partes_medidas: [], acabamentos: [], servicos: [] }; }

export default function EditarPedidoForm({
    initialData,
    initialItems = [],
    pedidoId
}: {
    initialData: any;
    initialItems?: ExtractedItem[];
    pedidoId: string;
}) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverState, setServerState] = useState<{ type: 'error' | 'success' | null; msg: string }>({ type: null, msg: '' });

    // Itens dinâmicos
    const [items, setItems] = useState<ExtractedItem[]>(initialItems);
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePedidoComercialInput>({
        resolver: zodResolver(createPedidoComercialSchema),
        defaultValues: initialData,
    });

    // ─── Item CRUD ───
    const addItem = useCallback(() => {
        setItems(prev => [...prev, createEmptyItem()]);
        setExpandedItems(prev => new Set([...Array.from(prev), items.length]));
    }, [items.length]);

    const removeItem = useCallback((idx: number) => {
        setItems(prev => prev.filter((_, i) => i !== idx));
        setExpandedItems(prev => {
            const next = new Set<number>();
            Array.from(prev).forEach(i => { if (i < idx) next.add(i); else if (i > idx) next.add(i - 1); });
            return next;
        });
    }, []);

    const updateItemField = useCallback((idx: number, field: keyof ExtractedItem, value: string) => {
        setItems(prev => prev.map((item, i) => i === idx ? { ...item, [field]: value } : item));
    }, []);

    // Sub-items CRUD
    const addPeca = useCallback((ii: number) => { setItems(p => p.map((it, i) => i === ii ? { ...it, partes_medidas: [...it.partes_medidas, createEmptyPeca()] } : it)); }, []);
    const removePeca = useCallback((ii: number, pi: number) => { setItems(p => p.map((it, i) => i === ii ? { ...it, partes_medidas: it.partes_medidas.filter((_, j) => j !== pi) } : it)); }, []);
    const updatePeca = useCallback((ii: number, pi: number, f: string, v: string) => { setItems(p => p.map((it, i) => i === ii ? { ...it, partes_medidas: it.partes_medidas.map((pm, j) => j === pi ? { ...pm, [f]: v } : pm) } : it)); }, []);

    const addAcabamento = useCallback((ii: number) => { setItems(p => p.map((it, i) => i === ii ? { ...it, acabamentos: [...it.acabamentos, createEmptyAcabamento()] } : it)); }, []);
    const removeAcabamento = useCallback((ii: number, ai: number) => { setItems(p => p.map((it, i) => i === ii ? { ...it, acabamentos: it.acabamentos.filter((_, j) => j !== ai) } : it)); }, []);
    const updateAcabamento = useCallback((ii: number, ai: number, f: string, v: string) => { setItems(p => p.map((it, i) => i === ii ? { ...it, acabamentos: it.acabamentos.map((a, j) => j === ai ? { ...a, [f]: v } : a) } : it)); }, []);

    const addServico = useCallback((ii: number) => { setItems(p => p.map((it, i) => i === ii ? { ...it, servicos: [...it.servicos, createEmptyServico()] } : it)); }, []);
    const removeServico = useCallback((ii: number, si: number) => { setItems(p => p.map((it, i) => i === ii ? { ...it, servicos: it.servicos.filter((_, j) => j !== si) } : it)); }, []);
    const updateServico = useCallback((ii: number, si: number, f: string, v: string) => { setItems(p => p.map((it, i) => i === ii ? { ...it, servicos: it.servicos.map((s, j) => j === si ? { ...s, [f]: v } : s) } : it)); }, []);

    const toggleItem = (i: number) => setExpandedItems(prev => {
        const n = new Set(Array.from(prev)); n.has(i) ? n.delete(i) : n.add(i); return n;
    });

    const renderMiniInput = (value: string, onChange: (v: string) => void, placeholder: string, className?: string) => (
        <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
            className={cn("h-7 bg-zinc-950 border border-zinc-800 rounded px-2 text-xs text-zinc-200 outline-none focus:border-blue-500 transition-colors", className)} />
    );

    const onSubmit: SubmitHandler<CreatePedidoComercialInput> = async (data) => {
        setIsSubmitting(true);
        setServerState({ type: null, msg: '' });
        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, (value ?? '') as string);
            });
            if (items.length > 0) {
                formData.append('itens_extraidos', JSON.stringify(items));
            }
            const res = await atualizarPedidoComercial(pedidoId, formData);
            if (res.success) {
                setServerState({ type: 'success', msg: res.message });
                setTimeout(() => router.push('/pedidos'), 1200);
            } else {
                setServerState({ type: 'error', msg: res.message });
            }
        } catch { setServerState({ type: 'error', msg: 'Falha de comunicação.' }); }
        finally { setIsSubmitting(false); }
    };

    return (
        <div className="w-full max-w-4xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
            <div className="mb-8 border-b border-zinc-800 pb-5 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
                        <Edit2 className="text-blue-500 w-6 h-6" /> Editar Pedido
                    </h2>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                        Atualize as informações do pedido. Essa ação será anotada no diário de operações.
                    </p>
                </div>
                <Link href="/pedidos"
                    className="text-sm font-medium text-zinc-400 hover:text-white bg-zinc-800 px-4 py-2 flex items-center justify-center rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors">
                    Voltar
                </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* ═══ Seção 1: Cliente e Obra ═══ */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> 1. Revisão de Cliente e Obra
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* Nº Orçamento — READONLY */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                                <Lock className="w-3 h-3 text-zinc-600" /> Nº do Orçamento
                            </label>
                            <input {...register('numero_orcamento')} readOnly
                                className="w-full h-9 bg-zinc-950/50 border border-zinc-800/50 rounded px-3 text-sm text-zinc-500 outline-none cursor-not-allowed" />
                        </div>
                        {/* Nome Cliente */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Nome do Cliente *</label>
                            <input {...register('cliente_nome')}
                                className={cn("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    errors.cliente_nome ? "border-red-500/50" : "border-zinc-800 focus:border-blue-500")}
                                placeholder="Ex: Construtora Apex" />
                            {errors.cliente_nome && <span className="text-[10px] text-red-400">{errors.cliente_nome.message}</span>}
                        </div>
                        {/* Telefone */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Telefone</label>
                            <input {...register('telefone')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors" placeholder="(00) 00000-0000" />
                        </div>
                        {/* Documento */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Documento</label>
                            <input {...register('documento')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors" placeholder="CPF ou CNPJ" />
                        </div>
                        {/* Endereço */}
                        <div className="space-y-1.5 md:col-span-2 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Endereço da Obra</label>
                            <input {...register('endereco_obra')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors" placeholder="Ex: Av. Paulista, 1000" />
                        </div>
                        {/* Cidade */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Cidade / UF</label>
                            <input {...register('cidade_obra')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors" placeholder="Ex: São Paulo - SP" />
                        </div>
                        {/* Responsável */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Arquiteto / Responsável</label>
                            <input {...register('responsavel_obra')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors" placeholder="Ex: Arq. Juliana" />
                        </div>
                        {/* Marcenaria */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Marcenaria Responsável</label>
                            <input {...register('marcenaria_responsavel')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors" placeholder="Ex: Marcenaria Silva" />
                        </div>
                        {/* Contato Arq */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Contato Arquitetura</label>
                            <input {...register('contato_arquitetura')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors" placeholder="Ex: (51) 99999-0000" />
                        </div>
                    </div>
                </div>

                {/* ═══ Seção 2: Detalhes Comerciais ═══ */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> 2. Detalhes do Acordo
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300">Status Comercial</label>
                            <select {...register('status_comercial')} className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors appearance-none">
                                <option value="Orçamento">Apenas Orçamento</option>
                                <option value="Aguardando Aprovação">Aguardando Aprovação</option>
                                <option value="Aprovado">Venda Aprovada (Iniciar)</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-yellow-500" /> Urgência</label>
                            <select {...register('urgencia')} className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors appearance-none">
                                <option value="Baixa">Baixa</option>
                                <option value="Normal">Normal</option>
                                <option value="Alta">Alta</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300">Data Prometida</label>
                            <input type="date" {...register('data_prometida')} className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors [color-scheme:dark]" />
                        </div>
                        <div className="space-y-1.5 md:col-span-3">
                            <label className="text-xs font-medium text-zinc-300">Observações</label>
                            <textarea {...register('observacoes')} rows={3} placeholder="Descritivo de materiais, pagamento..."
                                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors resize-none" />
                        </div>
                    </div>
                </div>

                {/* ═══ Seção 3: Itens / Ambientes ═══ */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                            <Package className="w-4 h-4" /> 3. Ambientes e Peças {items.length > 0 && `(${items.length})`}
                        </h3>
                        <button type="button" onClick={addItem}
                            className="flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-3 py-1.5 rounded-lg border border-blue-500/20 transition-colors">
                            <Plus className="w-3.5 h-3.5" /> Criar Ambiente
                        </button>
                    </div>

                    {items.length === 0 && (
                        <div className="text-center py-8 border border-dashed border-zinc-800 rounded-xl bg-zinc-950/30">
                            <Package className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
                            <p className="text-sm text-zinc-500">Nenhum ambiente cadastrado neste pedido.</p>
                            <p className="text-xs text-zinc-600 mt-1">Clique em &quot;Criar Ambiente&quot; para adicionar.</p>
                        </div>
                    )}

                    <div className="space-y-3">
                        {items.map((item, idx) => (
                            <div key={idx} className="border border-zinc-800 rounded-lg bg-zinc-950/50 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between p-3 hover:bg-zinc-800/30 transition-colors">
                                    <button type="button" onClick={() => toggleItem(idx)} className="flex items-center gap-3 flex-1 text-left">
                                        <span className="text-xs font-mono bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">#{idx + 1}</span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-zinc-200 truncate">{item.ambiente || 'Ambiente sem nome'}</p>
                                            <p className="text-xs text-zinc-500 truncate">{item.material || 'Material não definido'}</p>
                                        </div>
                                        <div className="flex gap-1.5 text-[10px] mr-2">
                                            {item.partes_medidas.length > 0 && <span className="bg-blue-500/15 text-blue-400 px-1.5 py-0.5 rounded">{item.partes_medidas.length}p</span>}
                                            {item.acabamentos.length > 0 && <span className="bg-amber-500/15 text-amber-400 px-1.5 py-0.5 rounded">{item.acabamentos.length}a</span>}
                                            {item.servicos.length > 0 && <span className="bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded">{item.servicos.length}s</span>}
                                        </div>
                                        {expandedItems.has(idx) ? <ChevronUp className="w-4 h-4 text-zinc-500" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                                    </button>
                                    <button type="button" onClick={() => removeItem(idx)}
                                        className="p-1.5 text-zinc-600 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors ml-1">
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>

                                {/* Expanded */}
                                {expandedItems.has(idx) && (
                                    <div className="px-4 pb-4 space-y-4 border-t border-zinc-800/50">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-medium text-zinc-500 uppercase">Ambiente</label>
                                                <input value={item.ambiente} onChange={e => updateItemField(idx, 'ambiente', e.target.value)}
                                                    className="w-full h-8 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors"
                                                    placeholder="Ex: 101 - LAVANDERIA" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-medium text-zinc-500 uppercase">Material</label>
                                                <input value={item.material} onChange={e => updateItemField(idx, 'material', e.target.value)}
                                                    className="w-full h-8 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors"
                                                    placeholder="Ex: GRANITO PRETO SÃO GABRIEL" />
                                            </div>
                                        </div>

                                        {/* Peças */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">Peças / Medidas</p>
                                                <button type="button" onClick={() => addPeca(idx)}
                                                    className="flex items-center gap-1 text-[10px] text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded transition-colors">
                                                    <Plus className="w-3 h-3" /> Peça
                                                </button>
                                            </div>
                                            {item.partes_medidas.length === 0 && <p className="text-xs text-zinc-700 italic">Nenhuma peça.</p>}
                                            {item.partes_medidas.map((pm, pi) => (
                                                <div key={pi} className="flex items-center gap-2 mb-1.5">
                                                    {renderMiniInput(pm.peca, v => updatePeca(idx, pi, 'peca', v), 'Peça', 'flex-1')}
                                                    {renderMiniInput(pm.comprimento, v => updatePeca(idx, pi, 'comprimento', v), 'Comp.', 'w-20')}
                                                    {renderMiniInput(pm.largura, v => updatePeca(idx, pi, 'largura', v), 'Larg.', 'w-20')}
                                                    {renderMiniInput(pm.quantidade, v => updatePeca(idx, pi, 'quantidade', v), 'Qtd', 'w-14')}
                                                    <button type="button" onClick={() => removePeca(idx, pi)} className="p-1 text-zinc-600 hover:text-red-400 transition-colors"><X className="w-3 h-3" /></button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Acabamentos */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Acabamentos</p>
                                                <button type="button" onClick={() => addAcabamento(idx)}
                                                    className="flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded transition-colors">
                                                    <Plus className="w-3 h-3" /> Acabamento
                                                </button>
                                            </div>
                                            {item.acabamentos.length === 0 && <p className="text-xs text-zinc-700 italic">Nenhum acabamento.</p>}
                                            {item.acabamentos.map((ac, ai) => (
                                                <div key={ai} className="flex items-center gap-2 mb-1.5">
                                                    {renderMiniInput(ac.descricao, v => updateAcabamento(idx, ai, 'descricao', v), 'Descrição', 'flex-1')}
                                                    <select value={ac.unidade} onChange={e => updateAcabamento(idx, ai, 'unidade', e.target.value)}
                                                        className="h-7 bg-zinc-950 border border-zinc-800 rounded px-1.5 text-xs text-zinc-200 outline-none focus:border-blue-500 w-16 appearance-none">
                                                        <option>ML</option><option>UN</option><option>M2</option><option>PC</option><option>CJ</option><option>VB</option>
                                                    </select>
                                                    {renderMiniInput(ac.quantidade, v => updateAcabamento(idx, ai, 'quantidade', v), 'Qtd', 'w-16')}
                                                    <button type="button" onClick={() => removeAcabamento(idx, ai)} className="p-1 text-zinc-600 hover:text-red-400 transition-colors"><X className="w-3 h-3" /></button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Serviços */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Serviços</p>
                                                <button type="button" onClick={() => addServico(idx)}
                                                    className="flex items-center gap-1 text-[10px] text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded transition-colors">
                                                    <Plus className="w-3 h-3" /> Serviço
                                                </button>
                                            </div>
                                            {item.servicos.length === 0 && <p className="text-xs text-zinc-700 italic">Nenhum serviço.</p>}
                                            {item.servicos.map((sv, si) => (
                                                <div key={si} className="flex items-center gap-2 mb-1.5">
                                                    {renderMiniInput(sv.descricao, v => updateServico(idx, si, 'descricao', v), 'Descrição', 'flex-1')}
                                                    <select value={sv.unidade} onChange={e => updateServico(idx, si, 'unidade', e.target.value)}
                                                        className="h-7 bg-zinc-950 border border-zinc-800 rounded px-1.5 text-xs text-zinc-200 outline-none focus:border-blue-500 w-16 appearance-none">
                                                        <option>UN</option><option>ML</option><option>M2</option><option>PC</option><option>CJ</option><option>VB</option>
                                                    </select>
                                                    {renderMiniInput(sv.quantidade, v => updateServico(idx, si, 'quantidade', v), 'Qtd', 'w-16')}
                                                    <button type="button" onClick={() => removeServico(idx, si)} className="p-1 text-zinc-600 hover:text-red-400 transition-colors"><X className="w-3 h-3" /></button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══ Feedback + Submit ═══ */}
                {serverState.type && (
                    <div className={cn("p-4 rounded-md text-sm font-medium border flex items-center gap-2",
                        serverState.type === 'error' ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400")}>
                        {serverState.type === 'success' && <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                        {serverState.msg}
                    </div>
                )}

                <div className="pt-6 border-t border-zinc-800 flex justify-end">
                    <button type="submit" disabled={isSubmitting}
                        className="flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-blue-900/20">
                        {isSubmitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Salvando Alterações...</>) : 'Salvar Alterações'}
                    </button>
                </div>
            </form>
        </div>
    );
}
