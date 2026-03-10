'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, PlusCircle, Building2, Calendar, AlertTriangle, Upload, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createPedidoComercialSchema, type CreatePedidoComercialInput } from '@/lib/validations/pedido_v2';
import { criarPedidoComercial } from '@/app/actions/pedidos_v2';
import { previewPdfDataAction } from '@/app/actions/parser';
import { useRouter } from 'next/navigation';

export default function NovoPedidoComercialForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverState, setServerState] = useState<{ type: 'error' | 'success' | null, msg: string }>({ type: null, msg: '' });

    // Drag and Drop States
    const [visualFile, setVisualFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    // Human-in-the-loop AutoFill States
    const [isExtracting, setIsExtracting] = useState(false);
    const [autoFilledFields, setAutoFilledFields] = useState<string[]>([]);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreatePedidoComercialInput>({
        resolver: zodResolver(createPedidoComercialSchema),
        defaultValues: {
            status_comercial: 'Orçamento',
            urgencia: 'Normal',
            cliente_nome: ''
        }
    });

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelection(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelection = async (f: File) => {
        if (f.type !== 'application/pdf') {
            setServerState({ type: 'error', msg: 'Apenas arquivos PDF são aceitos.' });
            return;
        }
        setVisualFile(f);
        setServerState({ type: null, msg: '' });

        // HUMAN IN THE LOOP: Auto-Fill
        await processPdfForPreview(f);
    };

    const processPdfForPreview = async (f: File) => {
        setIsExtracting(true);
        setServerState({ type: null, msg: 'Lendo dados do ERP (In-Memory)...' });

        try {
            const formData = new FormData();
            formData.append('arquivoPdf', f);

            const resultRaw = await previewPdfDataAction(formData);
            const result = resultRaw as { success: boolean, msg?: string, data?: any };

            if (result.success && result.data) {
                const filled: string[] = [];

                if (result.data.cliente_nome) {
                    setValue('cliente_nome', result.data.cliente_nome, { shouldValidate: true });
                    filled.push('cliente_nome');
                }
                if (result.data.documento) {
                    setValue('documento', result.data.documento, { shouldValidate: true });
                    filled.push('documento');
                }
                if (result.data.endereco_obra) {
                    setValue('endereco_obra', result.data.endereco_obra, { shouldValidate: true });
                    filled.push('endereco_obra');
                }
                if (result.data.numero_orcamento) {
                    setValue('numero_orcamento', result.data.numero_orcamento, { shouldValidate: true });
                    filled.push('numero_orcamento');
                }

                setAutoFilledFields(filled);
                setServerState({ type: 'success', msg: 'Dados extraídos! Por favor, revise o formulário abaixo antes de salvar.' });
            } else {
                setServerState({ type: 'error', msg: result.msg || 'Falha ao ler o PDF.' });
            }
        } catch (error) {
            setServerState({ type: 'error', msg: 'Erro de conexão com o Parser.' });
        } finally {
            setIsExtracting(false);
        }
    }

    const clearFile = () => {
        setVisualFile(null);
        setAutoFilledFields([]);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

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

            if (visualFile) {
                formData.append('arquivoPdf', visualFile);
            }

            const res = await criarPedidoComercial(formData);
            if (res.success) {
                setServerState({ type: 'success', msg: res.message! });
                setTimeout(() => {
                    // Mock redirect to the new V2 page that would exist
                    router.push('/pedidos');
                }, 1200);
            } else {
                setServerState({ type: 'error', msg: res.message! });
            }
        } catch (err) {
            setServerState({ type: 'error', msg: 'Falha de comunicação.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
            <div className="mb-8 border-b border-zinc-800 pb-5">
                <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
                    <PlusCircle className="text-violet-500 w-6 h-6" />
                    Entrada Comercial
                </h2>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    Cadastre um orçamento ou pedido comercial. Um evento inaugural de custodia
                    será gerado automaticamente no diário de operações para garantir a rastreabilidade total.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* Seção 3: Upload de PDF (ERP) MOVIDO PARA O TOPO (HUMAN IN THE LOOP) */}
                <div className="space-y-4 bg-zinc-950/40 p-5 rounded-xl border border-zinc-800/80 mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-400 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> 1. Importação Inteligente (Módulo ERP)
                    </h3>
                    <p className="text-xs text-zinc-400 mb-2">Arraste o orçamento do ERP primeiro. O sistema lerá o PDF em memória e preencherá os dados para sua revisão.</p>

                    {!visualFile ? (
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={cn(
                                "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors w-full h-32",
                                isDragging ? "border-violet-500 bg-violet-500/10" : "border-zinc-700 bg-zinc-900/50 hover:border-violet-500/50 hover:bg-violet-900/10",
                            )}
                        >
                            <Upload className={cn("w-6 h-6 mb-2", isDragging ? "text-violet-500" : "text-zinc-500")} />
                            <p className="text-sm font-medium text-zinc-300">
                                {isDragging ? 'Solte o arquivo PDF aqui' : 'Clique ou Solte o PDF do ERP aqui para Extração Automática'}
                            </p>
                            <input
                                type="file"
                                accept="application/pdf"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        handleFileSelection(e.target.files[0]);
                                    }
                                }}
                            />
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
                                        {isExtracting ? 'Extraindo dados espaciais...' : 'Extração concluída. Revise o formulário.'}
                                    </span>
                                </div>
                            </div>
                            {!isExtracting && (
                                <button
                                    type="button"
                                    onClick={clearFile}
                                    className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors shrink-0"
                                    aria-label="Remover arquivo"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Seção 1: Cliente e Obra */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> 2. Revisão de Cliente e Obra
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Nº do Orçamento *
                                {autoFilledFields.includes('numero_orcamento') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input
                                {...register('numero_orcamento')}
                                readOnly={autoFilledFields.includes('numero_orcamento')}
                                className={cn(
                                    "w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    errors.numero_orcamento ? "border-red-500/50" : autoFilledFields.includes('numero_orcamento') ? "border-emerald-500 bg-emerald-950/20 cursor-not-allowed opacity-90" : "border-zinc-800 focus:border-violet-500"
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
                                    errors.cliente_nome ? "border-red-500/50" : autoFilledFields.includes('cliente_nome') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500"
                                )}
                                placeholder="Ex: Construtora Apex"
                            />
                            {errors.cliente_nome && <span className="text-[10px] text-red-400">{errors.cliente_nome.message}</span>}
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Telefone</label>
                            <input
                                {...register('telefone')}
                                className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors"
                                placeholder="(00) 00000-0000"
                            />
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Documento (Opcional)
                                {autoFilledFields.includes('documento') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input
                                {...register('documento')}
                                className={cn(
                                    "w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    autoFilledFields.includes('documento') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500"
                                )}
                                placeholder="CPF ou CNPJ"
                            />
                        </div>

                        <div className="space-y-1.5 md:col-span-2 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                                Endereço da Obra
                                {autoFilledFields.includes('endereco_obra') && <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Auto</span>}
                            </label>
                            <input
                                {...register('endereco_obra')}
                                className={cn(
                                    "w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors",
                                    autoFilledFields.includes('endereco_obra') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500"
                                )}
                                placeholder="Ex: Av. Paulista, 1000 - Apto 34"
                            />
                        </div>

                        <div className="space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30">
                            <label className="text-xs font-medium text-zinc-300">Arquiteto / Responsável</label>
                            <input
                                {...register('responsavel_obra')}
                                className="w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors"
                                placeholder="Ex: Arq. Juliana"
                            />
                        </div>
                    </div>
                </div>

                {/* Seção 2: Especificações Comerciais */}
                <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> 3. Detalhes Básicos do Acordo
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300">Status Comercial</label>
                            <select
                                {...register('status_comercial')}
                                className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none"
                            >
                                <option value="Orçamento">Apenas Orçamento</option>
                                <option value="Aguardando Aprovação">Aguardando Aprovação</option>
                                <option value="Aprovado">Venda Aprovada (Iniciar)</option>
                            </select>
                        </div>

                        <div className="space-y-1.5 relative">
                            <label className="text-xs font-medium text-zinc-300 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-yellow-500" /> Nível de Urgência</label>
                            <select
                                {...register('urgencia')}
                                className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none"
                            >
                                <option value="Baixa">Baixa Prioridade</option>
                                <option value="Normal">Fluxo Normal</option>
                                <option value="Alta">Alta Urgência</option>
                            </select>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-300">Data Prometida (Entrega)</label>
                            <input
                                type="date"
                                {...register('data_prometida')}
                                className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors [color-scheme:dark]"
                            />
                        </div>

                        <div className="space-y-1.5 md:col-span-3">
                            <label className="text-xs font-medium text-zinc-300">Observações / Escopo</label>
                            <textarea
                                {...register('observacoes')}
                                rows={3}
                                placeholder="Detalhes adicionais, descritivo de materiais, formato de pagamento..."
                                className="w-full custom-scrollbar bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors resize-none"
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
                        className="flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-violet-900/20"
                    >
                        {isSubmitting ? (
                            <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Registrando no Sistema...</>
                        ) : (
                            'Criar Entrada Comercial'
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
}
