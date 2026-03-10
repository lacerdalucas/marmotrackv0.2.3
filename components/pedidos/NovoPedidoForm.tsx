'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadCloud, X, Loader2, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { createPedidoSchema, type CreatePedidoInput } from '@/lib/validations/pedido';
import { createPedidoAction } from '@/app/actions/pedidos';
import { cn } from '@/lib/utils';

export function NovoPedidoForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    // Drag & Drop UI State
    const [isDragging, setIsDragging] = React.useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        setError,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(createPedidoSchema),
        defaultValues: {
            cliente_nome: '',
            status: 'Pendente',
        },
    });

    // Usamos o useState apenas para feedback visual da File (o source of truth agora é o react-hook-form/Zod ou State control)
    const [visualFile, setVisualFile] = React.useState<File | null>(null);

    // Estado customizado apenas para o erro do PDF
    const [pdfError, setPdfError] = React.useState<string | null>(null);

    // Funções de Drag & Drop
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const validateAndSetFile = (file: File) => {
        if (file.type !== 'application/pdf') {
            setError('arquivo_pdf_url', {
                type: 'manual',
                message: 'Por favor, selecione apenas arquivos PDF.'
            });
            setVisualFile(null);
            return;
        }

        clearErrors('arquivo_pdf_url');
        setVisualFile(file);
        setSubmitStatus({ type: null, message: '' });
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            validateAndSetFile(e.target.files[0]);
        }
    };

    const clearFile = () => {
        setVisualFile(null);
        setPdfError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Submissão do Form
    const onSubmit = async (data: any) => {
        console.log("Variáveis de form submetidas via Zod:", data);

        if (!visualFile) {
            setPdfError('O projeto em PDF é obrigatório.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const formData = new FormData();
            formData.append('cliente_nome', data.cliente_nome);
            if (data.prazo_entrega) {
                const dataFormatada = new Date(data.prazo_entrega);
                formData.append('prazo_entrega', dataFormatada.toISOString());
            }
            formData.append('arquivoPdf', visualFile);

            const response = await createPedidoAction(formData);

            if (response.success) {
                setSubmitStatus({
                    type: 'success',
                    message: response.message || 'Pedido cadastrado com sucesso!',
                });

                // Opção 1: Limpar o form
                setValue('cliente_nome', '');
                setValue('prazo_entrega', undefined);
                clearFile();

                // Opção 2: Redirecionar p/ import ou dashboard após sucesso
                setTimeout(() => {
                    // Módulo 2 ou Dashboard Principal
                    router.push('/pedidos');
                }, 1500);

            } else {
                setSubmitStatus({
                    type: 'error',
                    message: response.message || 'Erro ao processar a requisição.',
                });
            }
        } catch (err) {
            console.error(err);
            setSubmitStatus({
                type: 'error',
                message: 'Ocorreu um erro catastrófico de conexão (Offline).',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Função auxiliar pra logar erros do hook form e impedir dead clicks
    const onError = (errors: any) => {
        console.log("Erros do form:", errors);
        if (!visualFile) {
            setError('arquivo_pdf_url', {
                type: 'manual',
                message: 'O projeto em PDF é obrigatório.'
            });
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-zinc-100 mb-1">Novo Pedido</h2>
                <p className="text-sm text-zinc-400">
                    Cadastre os dados iniciais do cliente e faça o upload do projeto em PDF.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">

                {/* Row 1: Dados Base */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="cliente_nome" className="text-sm font-medium text-zinc-200">
                            Nome do Cliente
                        </label>
                        <input
                            id="cliente_nome"
                            type="text"
                            placeholder="Ex: Marmoraria Silva"
                            className={cn(
                                "flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500",
                                "focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all",
                                errors.cliente_nome && "border-red-500/50 focus:ring-red-500"
                            )}
                            {...register('cliente_nome')}
                        />
                        {typeof errors.cliente_nome?.message === 'string' && (
                            <span className="text-xs text-red-400">
                                {errors.cliente_nome.message}
                            </span>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="prazo_entrega" className="text-sm font-medium text-zinc-200">
                            Prazo de Entrega (Opcional)
                        </label>
                        <input
                            id="prazo_entrega"
                            type="date"
                            className={cn(
                                "flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500",
                                "focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all custom-calendar-picker",
                                "[color-scheme:dark]",
                                errors.prazo_entrega && "border-red-500/50 focus:ring-red-500"
                            )}
                            {...register('prazo_entrega')}
                        />
                        {typeof errors.prazo_entrega?.message === 'string' && (
                            <span className="text-xs text-red-400">
                                {errors.prazo_entrega.message}
                            </span>
                        )}
                    </div>
                </div>

                {/* Upload Zone */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-200">
                        Projeto (PDF)
                    </label>
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => !visualFile && fileInputRef.current?.click()}
                        className={cn(
                            "relative flex flex-col items-center justify-center w-full min-h-[160px] rounded-lg border-2 border-dashed transition-colors",
                            !visualFile ? "cursor-pointer" : "cursor-default",
                            isDragging
                                ? "border-violet-500 bg-violet-500/5"
                                : "border-zinc-800 bg-zinc-950 hover:bg-zinc-950/80",
                            visualFile && "border-zinc-700 bg-zinc-900/50",
                            pdfError && "border-red-500/50 bg-red-500/5"
                        )}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,application/pdf"
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        {!visualFile ? (
                            <div className="flex flex-col items-center text-center p-6 space-y-3">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                    <UploadCloud className="w-6 h-6 text-zinc-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-300">
                                        Clique para selecionar ou arraste o arquivo PDF aqui
                                    </p>
                                    <p className="text-xs text-zinc-500 mt-1">
                                        Tamanho máximo recomendado: 10MB
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between w-full p-4">
                                <div className="flex items-center space-x-4 overflow-hidden">
                                    <div className="w-10 h-10 rounded bg-violet-500/10 flex items-center justify-center shrink-0 border border-violet-500/20">
                                        <CheckCircle2 className="w-5 h-5 text-violet-400" />
                                    </div>
                                    <div className="flex flex-col min-w-0 pr-4">
                                        <span className="text-sm font-medium text-zinc-200 truncate">
                                            {visualFile.name}
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            {(visualFile.size / 1024 / 1024).toFixed(2)} MB
                                        </span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        clearFile();
                                    }}
                                    className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors shrink-0"
                                    aria-label="Remover arquivo"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                    {pdfError && (
                        <span className="text-xs text-red-400 mt-1 block">
                            {String(pdfError)}
                        </span>
                    )}
                </div>

                {/* Global Feedback Messages */}
                {submitStatus.type && (
                    <div
                        className={cn(
                            "px-4 py-3 rounded-md text-sm font-medium border",
                            submitStatus.type === 'error'
                                ? "bg-red-500/10 border-red-500/20 text-red-400"
                                : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        )}
                    >
                        {String(submitStatus.message)}
                    </div>
                )}

                {/* Submit Button */}
                <div className="pt-4 border-t border-zinc-800">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "flex items-center justify-center w-full sm:w-auto sm:ml-auto h-10 px-6 rounded-md text-sm font-medium text-white transition-all",
                            "bg-violet-600 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900",
                            "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Enviando projeto...
                            </>
                        ) : (
                            'Salvar Pedido'
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
}
