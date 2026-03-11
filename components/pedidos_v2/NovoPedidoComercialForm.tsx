'use client';

import React, { useState, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, PlusCircle, Building2, Calendar, AlertTriangle, Upload, FileText, X, Package, ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPedidoComercialSchema, type CreatePedidoComercialInput } from '@/lib/validations/pedido_v2';
import { criarPedidoComercial } from '@/app/actions/pedidos_v2';
import { previewPdfDataAction } from '@/app/actions/parser';
import { useRouter } from 'next/navigation';
import type { ExtractedItem } from '@/lib/marmotrack-parser';

// ─── Helpers para itens vazios ───
function createEmptyPeca() {
    return { peca: '', comprimento: '', largura: '', quantidade: '1' };
}
function createEmptyAcabamento() {
    return { descricao: '', unidade: 'ML', quantidade: '' };
}
function createEmptyServico() {
    return { descricao: '', unidade: 'UN', quantidade: '' };
}
function createEmptyItem(): ExtractedItem {
    return { ambiente: '', material: '', partes_medidas: [], acabamentos: [], servicos: [] };
}

export default function NovoPedidoComercialForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverState, setServerState] = useState<{ type: 'error' | 'success' | null, msg: string }>({ type: null, msg: '' });

    // Drag and Drop
    const [visualFile, setVisualFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    // Human-in-the-loop
    const [isExtracting, setIsExtracting] = useState(false);
    const [autoFilledFields, setAutoFilledFields] = useState<string[]>([]);

    // Itens dinâmicos (editáveis)
    const [items, setItems] = useState<ExtractedItem[]>([]);
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreatePedidoComercialInput>({
        resolver: zodResolver(createPedidoComercialSchema),
        defaultValues: {
            status_comercial: 'Orçamento',
            urgencia: 'Normal',
            cliente_nome: '',
            marcenaria_responsavel: '',
            contato_arquitetura: '',
            cidade_obra: '',
        }
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
    const addPeca = useCallback((itemIdx: number) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, partes_medidas: [...item.partes_medidas, createEmptyPeca()] } : item));
    }, []);

    const removePeca = useCallback((itemIdx: number, pecaIdx: number) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, partes_medidas: item.partes_medidas.filter((_, j) => j !== pecaIdx) } : item));
    }, []);

    const updatePeca = useCallback((itemIdx: number, pecaIdx: number, field: string, value: string) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, partes_medidas: item.partes_medidas.map((p, j) => j === pecaIdx ? { ...p, [field]: value } : p) } : item));
    }, []);

    const addAcabamento = useCallback((itemIdx: number) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, acabamentos: [...item.acabamentos, createEmptyAcabamento()] } : item));
    }, []);

    const removeAcabamento = useCallback((itemIdx: number, acabIdx: number) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, acabamentos: item.acabamentos.filter((_, j) => j !== acabIdx) } : item));
    }, []);

    const updateAcabamento = useCallback((itemIdx: number, acabIdx: number, field: string, value: string) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, acabamentos: item.acabamentos.map((a, j) => j === acabIdx ? { ...a, [field]: value } : a) } : item));
    }, []);

    const addServico = useCallback((itemIdx: number) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, servicos: [...item.servicos, createEmptyServico()] } : item));
    }, []);

    const removeServico = useCallback((itemIdx: number, servIdx: number) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, servicos: item.servicos.filter((_, j) => j !== servIdx) } : item));
    }, []);

    const updateServico = useCallback((itemIdx: number, servIdx: number, field: string, value: string) => {
        setItems(prev => prev.map((item, i) => i === itemIdx
            ? { ...item, servicos: item.servicos.map((s, j) => j === servIdx ? { ...s, [field]: value } : s) } : item));
    }, []);

    // ─── Drag & Drop ───
    const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault(); setIsDragging(false);
        if (e.dataTransfer.files?.[0]) handleFileSelection(e.dataTransfer.files[0]);
    };

    const handleFileSelection = async (f: File) => {
        if (f.type !== 'application/pdf') { setServerState({ type: 'error', msg: 'Apenas PDFs.' }); return; }
        setVisualFile(f); setServerState({ type: null, msg: '' });
        await processPdfForPreview(f);
    };

    const processPdfForPreview = async (f: File) => {
        setIsExtracting(true);
        setServerState({ type: null, msg: 'Extraindo dados via State Machine v3.0...' });
        try {
            const fd = new FormData(); fd.append('arquivoPdf', f);
            const res = await previewPdfDataAction(fd) as { success: boolean; msg?: string; data?: any };
            if (res.success && res.data) {
                const filled: string[] = [];
                if (res.data.cliente_nome) { setValue('cliente_nome', res.data.cliente_nome, { shouldValidate: true }); filled.push('cliente_nome'); }
                if (res.data.documento) { setValue('documento', res.data.documento, { shouldValidate: true }); filled.push('documento'); }
                if (res.data.endereco_obra) { setValue('endereco_obra', res.data.endereco_obra, { shouldValidate: true }); filled.push('endereco_obra'); }
                if (res.data.cidade_obra) { setValue('cidade_obra', res.data.cidade_obra, { shouldValidate: true }); filled.push('cidade_obra'); }
                if (res.data.numero_orcamento) { setValue('numero_orcamento', res.data.numero_orcamento, { shouldValidate: true }); filled.push('numero_orcamento'); }

                if (res.data.itens?.length > 0) {
                    setItems(res.data.itens);
                    setExpandedItems(new Set([0]));
                }
                setAutoFilledFields(filled);
                const ic = res.data.itens?.length || 0;
                setServerState({ type: 'success', msg: `${filled.length} campos + ${ic} itens extraídos. Revise e edite abaixo.` });
            } else {
                setServerState({ type: 'error', msg: res.msg || 'Falha ao ler PDF.' });
            }
        } catch { setServerState({ type: 'error', msg: 'Erro de conexão.' }); }
        finally { setIsExtracting(false); }
    };

    const clearFile = () => {
        setVisualFile(null); setAutoFilledFields([]); setItems([]); setExpandedItems(new Set());
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const toggleItem = (i: number) => setExpandedItems(prev => {
        const n = new Set(Array.from(prev)); n.has(i) ? n.delete(i) : n.add(i); return n;
    });

    const onSubmit: SubmitHandler<CreatePedidoComercialInput> = async (data) => {
        setIsSubmitting(true); setServerState({ type: null, msg: '' });
        try {
            const fd = new FormData();
            Object.entries(data).forEach(([k, v]) => fd.append(k, (v ?? '') as string));
            if (visualFile) fd.append('arquivoPdf', visualFile);
            if (items.length > 0) fd.append('itens_extraidos', JSON.stringify(items));
            const res = await criarPedidoComercial(fd);
            if (res.success) {
                setServerState({ type: 'success', msg: res.message! });
                setTimeout(() => router.push('/pedidos'), 1200);
            } else {
                setServerState({ type: 'error', msg: res.message! });
            }
        } catch { setServerState({ type: 'error', msg: 'Falha de comunicação.' }); }
        finally { setIsSubmitting(false); }
    };

    // ─── Renderização de sub-item inline ───
    const renderMiniInput = (value: string, onChange: (v: string) => void, placeholder: string, className?: string) => (
        <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
            className={cn("h-7 bg-zinc-950 border border-zinc-800 rounded px-2 text-xs text-zinc-200 outline-none focus:border-violet-500 transition-colors", className)} />
    );

    return (
        <div className="w-full max-w-4xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
            <div className="mb-8 border-b border-zinc-800 pb-5">
                <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
                    <PlusCircle className="text-violet-500 w-6 h-6" /> Entrada Comercial
                </h2>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    Cadastre um orçamento ou pedido comercial. Importe via PDF ou preencha manualmente.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* ═══ Seção 1: Upload PDF ═══ */}
                <div className="space-y-4 bg-zinc-950/40 p-5 rounded-xl border border-zinc-800/80">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> 1. Importação Inteligente (Opcional)
                    </h3>
                    <p className="text-xs text-zinc-400 mb-2">Arraste o orçamento do ERP para extração automática, ou preencha tudo manualmente abaixo.</p>

                    {!visualFile ? (
                        <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={cn("flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors w-full h-32",
                                isDragging ? "border-violet-500 bg-violet-500/10" : "border-zinc-700 bg-zinc-900/50 hover:border-violet-500/50 hover:bg-violet-900/10")}>
                            <Upload className={cn("w-6 h-6 mb-2", isDragging ? "text-violet-500" : "text-zinc-500")} />
                            <p className="text-sm font-medium text-zinc-300">
                                {isDragging ? 'Solte o PDF aqui' : 'Clique ou arraste o PDF do ERP para extração automática'}
                            </p>
                            <input type="file" accept="application/pdf" className="hidden" ref={fileInputRef}
                                onChange={e => { if (e.target.files?.[0]) handleFileSelection(e.target.files[0]); }} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-between p-4 border border-emerald-500/30 bg-emerald-500/5 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    {isExtracting ? <Loader2 className="w-5 h-5 text-emerald-400 animate-spin" /> : <FileText className="w-5 h-5 text-emerald-400" />}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-emerald-200">{visualFile.name}</span>
                                    <span className="text-xs text-emerald-500/70">
                                        {isExtracting ? 'Extraindo...' : `${items.length} itens extraídos.`}
                                    </span>
                                </div>
                            </div>
                            {!isExtracting && (
                                <button type="button" onClick={clearFile}
                                    className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors shrink-0">
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* ═══ Seção 2: Cliente e Obra ═══ */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> 2. Dados do Cliente e Obra
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* Nº Orçamento */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Nº Orçamento *
                                {autoFilledFields.includes('numero_orcamento') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input {...register('numero_orcamento')}
                                className={cn("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    errors.numero_orcamento ? "border-red-500/50" : autoFilledFields.includes('numero_orcamento') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500")}
                                placeholder="Ex: 3124" />
                            {errors.numero_orcamento && <span className="text-[10px] text-red-400">{errors.numero_orcamento.message}</span>}
                        </div>
                        {/* Nome Cliente */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Nome do Cliente *
                                {autoFilledFields.includes('cliente_nome') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input {...register('cliente_nome')}
                                className={cn("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    errors.cliente_nome ? "border-red-500/50" : autoFilledFields.includes('cliente_nome') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500")}
                                placeholder="Ex: Construtora Apex" />
                            {errors.cliente_nome && <span className="text-[10px] text-red-400">{errors.cliente_nome.message}</span>}
                        </div>
                        {/* Telefone */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Telefone</label>
                            <input {...register('telefone')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors" placeholder="(00) 00000-0000" />
                        </div>
                        {/* Documento */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Documento
                                {autoFilledFields.includes('documento') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input {...register('documento')}
                                className={cn("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    autoFilledFields.includes('documento') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500")}
                                placeholder="CPF ou CNPJ" />
                        </div>
                        {/* Endereço */}
                        <div className="space-y-1.5 md:col-span-2 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Endereço da Obra
                                {autoFilledFields.includes('endereco_obra') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input {...register('endereco_obra')}
                                className={cn("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    autoFilledFields.includes('endereco_obra') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500")}
                                placeholder="Ex: Av. Paulista, 1000" />
                        </div>
                        {/* Cidade */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Cidade / UF
                                {autoFilledFields.includes('cidade_obra') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input {...register('cidade_obra')}
                                className={cn("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    autoFilledFields.includes('cidade_obra') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500")}
                                placeholder="Ex: São Paulo - SP" />
                        </div>
                        {/* Responsável */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Arquiteto / Responsável</label>
                            <input {...register('responsavel_obra')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors" placeholder="Ex: Arq. Juliana" />
                        </div>
                        {/* Marcenaria */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Marcenaria Responsável</label>
                            <input {...register('marcenaria_responsavel')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors" placeholder="Ex: Marcenaria Silva" />
                        </div>
                        {/* Contato Arq */}
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Contato Arquitetura</label>
                            <input {...register('contato_arquitetura')} className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors" placeholder="Ex: (51) 99999-0000" />
                        </div>
                    </div>
                </div>

                {/* ═══ Seção 3: Acordo Comercial ═══ */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> 3. Detalhes do Acordo
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300">Status Comercial</label>
                            <select {...register('status_comercial')} className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none">
                                <option value="Orçamento">Apenas Orçamento</option>
                                <option value="Aguardando Aprovação">Aguardando Aprovação</option>
                                <option value="Aprovado">Venda Aprovada (Iniciar)</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-yellow-500" /> Urgência</label>
                            <select {...register('urgencia')} className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none">
                                <option value="Baixa">Baixa</option>
                                <option value="Normal">Normal</option>
                                <option value="Alta">Alta</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300">Data Prometida</label>
                            <input type="date" {...register('data_prometida')} className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors [color-scheme:dark]" />
                        </div>
                        <div className="space-y-1.5 md:col-span-3">
                            <label className="text-xs font-medium text-zinc-300">Observações</label>
                            <textarea {...register('observacoes')} rows={3} placeholder="Descritivo de materiais, pagamento..."
                                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors resize-none" />
                        </div>
                    </div>
                </div>

                {/* ═══ Seção 4: Itens (Dinâmico + Editável) ═══ */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                            <Package className="w-4 h-4" /> 4. Ambientes e Peças {items.length > 0 && `(${items.length})`}
                        </h3>
                        <button type="button" onClick={addItem}
                            className="flex items-center gap-1.5 text-xs font-medium text-violet-400 hover:text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 px-3 py-1.5 rounded-lg border border-violet-500/20 transition-colors">
                            <Plus className="w-3.5 h-3.5" /> Criar Ambiente Manualmente
                        </button>
                    </div>

                    {items.length === 0 && (
                        <div className="text-center py-8 border border-dashed border-zinc-800 rounded-xl bg-zinc-950/30">
                            <Package className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
                            <p className="text-sm text-zinc-500">Nenhum ambiente cadastrado.</p>
                            <p className="text-xs text-zinc-600 mt-1">Importe um PDF ou clique em &quot;Criar Ambiente Manualmente&quot;.</p>
                        </div>
                    )}

                    <div className="space-y-3">
                        {items.map((item, idx) => (
                            <div key={idx} className="border border-zinc-800 rounded-lg bg-zinc-950/50 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between p-3 hover:bg-zinc-800/30 transition-colors">
                                    <button type="button" onClick={() => toggleItem(idx)} className="flex items-center gap-3 flex-1 text-left">
                                        <span className="text-xs font-mono bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded">#{idx + 1}</span>
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
                                        {/* Ambiente + Material inputs */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-medium text-zinc-500 uppercase">Ambiente</label>
                                                <input value={item.ambiente} onChange={e => updateItemField(idx, 'ambiente', e.target.value)}
                                                    className="w-full h-8 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors"
                                                    placeholder="Ex: 101 - LAVANDERIA" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-medium text-zinc-500 uppercase">Material</label>
                                                <input value={item.material} onChange={e => updateItemField(idx, 'material', e.target.value)}
                                                    className="w-full h-8 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors"
                                                    placeholder="Ex: GRANITO PRETO SÃO GABRIEL" />
                                            </div>
                                        </div>

                                        {/* ── Peças / Medidas ── */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-400">Peças / Medidas</p>
                                                <button type="button" onClick={() => addPeca(idx)}
                                                    className="flex items-center gap-1 text-[10px] text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded transition-colors">
                                                    <Plus className="w-3 h-3" /> Peça
                                                </button>
                                            </div>
                                            {item.partes_medidas.length === 0 && <p className="text-xs text-zinc-700 italic">Nenhuma peça.</p>}
                                            {item.partes_medidas.map((pm, pmIdx) => (
                                                <div key={pmIdx} className="flex items-center gap-2 mb-1.5">
                                                    {renderMiniInput(pm.peca, v => updatePeca(idx, pmIdx, 'peca', v), 'Peça', 'flex-1')}
                                                    {renderMiniInput(pm.comprimento, v => updatePeca(idx, pmIdx, 'comprimento', v), 'Comp.', 'w-20')}
                                                    {renderMiniInput(pm.largura, v => updatePeca(idx, pmIdx, 'largura', v), 'Larg.', 'w-20')}
                                                    {renderMiniInput(pm.quantidade, v => updatePeca(idx, pmIdx, 'quantidade', v), 'Qtd', 'w-14')}
                                                    <button type="button" onClick={() => removePeca(idx, pmIdx)} className="p-1 text-zinc-600 hover:text-red-400 transition-colors">
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* ── Acabamentos ── */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">Acabamentos</p>
                                                <button type="button" onClick={() => addAcabamento(idx)}
                                                    className="flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded transition-colors">
                                                    <Plus className="w-3 h-3" /> Acabamento
                                                </button>
                                            </div>
                                            {item.acabamentos.length === 0 && <p className="text-xs text-zinc-700 italic">Nenhum acabamento.</p>}
                                            {item.acabamentos.map((ac, acIdx) => (
                                                <div key={acIdx} className="flex items-center gap-2 mb-1.5">
                                                    {renderMiniInput(ac.descricao, v => updateAcabamento(idx, acIdx, 'descricao', v), 'Descrição', 'flex-1')}
                                                    <select value={ac.unidade} onChange={e => updateAcabamento(idx, acIdx, 'unidade', e.target.value)}
                                                        className="h-7 bg-zinc-950 border border-zinc-800 rounded px-1.5 text-xs text-zinc-200 outline-none focus:border-violet-500 w-16 appearance-none">
                                                        <option>ML</option><option>UN</option><option>M2</option><option>PC</option><option>CJ</option><option>VB</option>
                                                    </select>
                                                    {renderMiniInput(ac.quantidade, v => updateAcabamento(idx, acIdx, 'quantidade', v), 'Qtd', 'w-16')}
                                                    <button type="button" onClick={() => removeAcabamento(idx, acIdx)} className="p-1 text-zinc-600 hover:text-red-400 transition-colors">
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* ── Serviços ── */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Serviços</p>
                                                <button type="button" onClick={() => addServico(idx)}
                                                    className="flex items-center gap-1 text-[10px] text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded transition-colors">
                                                    <Plus className="w-3 h-3" /> Serviço
                                                </button>
                                            </div>
                                            {item.servicos.length === 0 && <p className="text-xs text-zinc-700 italic">Nenhum serviço.</p>}
                                            {item.servicos.map((sv, svIdx) => (
                                                <div key={svIdx} className="flex items-center gap-2 mb-1.5">
                                                    {renderMiniInput(sv.descricao, v => updateServico(idx, svIdx, 'descricao', v), 'Descrição', 'flex-1')}
                                                    <select value={sv.unidade} onChange={e => updateServico(idx, svIdx, 'unidade', e.target.value)}
                                                        className="h-7 bg-zinc-950 border border-zinc-800 rounded px-1.5 text-xs text-zinc-200 outline-none focus:border-violet-500 w-16 appearance-none">
                                                        <option>UN</option><option>ML</option><option>M2</option><option>PC</option><option>CJ</option><option>VB</option>
                                                    </select>
                                                    {renderMiniInput(sv.quantidade, v => updateServico(idx, svIdx, 'quantidade', v), 'Qtd', 'w-16')}
                                                    <button type="button" onClick={() => removeServico(idx, svIdx)} className="p-1 text-zinc-600 hover:text-red-400 transition-colors">
                                                        <X className="w-3 h-3" />
                                                    </button>
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
                        className="flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-violet-900/20">
                        {isSubmitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Registrando...</>) : 'Criar Entrada Comercial'}
                    </button>
                </div>
            </form>
        </div>
    );
}
