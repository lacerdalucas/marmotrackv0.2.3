'use client';

import { useState, useRef } from 'react';
import { uploadOrcamentoAction } from '@/app/actions/importActions';
import { UploadCloud, FileText, Loader2, X } from 'lucide-react';
import { toast } from 'sonner';

export default function ImportPage() {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    };

    const handleFileSelect = (selectedFile: File) => {
        if (selectedFile.type !== 'application/pdf') {
            toast.error('Apenas arquivos PDF são aceitos.');
            return;
        }
        if (selectedFile.size > 10 * 1024 * 1024) {
            toast.error('O arquivo excede o limite de 10MB.');
            return;
        }
        setFile(selectedFile);
    };

    const clearFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            toast.error('Selecione um arquivo PDF primeiro.');
            return;
        }

        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const result = await uploadOrcamentoAction(formData);

            // Se retornar algo, significa que falhou (o redirect dá throw error no Next.js em caso de sucesso)
            if (result && !result.success) {
                toast.error(result.error || 'Falha no upload do orçamento.');
                setIsUploading(false);
            }
        } catch (error: any) {
            // No Next.js Server Actions, a função navigation.redirect(...) lança um erro 
            // "NEXT_REDIRECT". Se for outro erro, a gente exibe no toast.
            if (error.message && error.message.includes('NEXT_REDIRECT')) {
                // Redirecionamento em andamento, não faça nada
                return;
            }
            toast.error('Erro de conexão ao enviar arquivo.');
            setIsUploading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-zinc-100 mb-2">Importar Orçamento (PDF)</h1>
            <p className="text-zinc-400 mb-8">Faça o upload do documento gerado pelo sistema comercial. O sistema extrairá as peças sugeridas para sua revisão estrutural.</p>

            <form onSubmit={handleSubmit}>
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => !file && fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${!file ? 'cursor-pointer hover:bg-zinc-900' : ''
                        } ${isDragging ? 'border-violet-500 bg-violet-500/10' : 'border-zinc-700 bg-zinc-950/50'
                        }`}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileInput}
                        accept=".pdf,application/pdf"
                        className="hidden"
                    />

                    {!file ? (
                        <>
                            <div className="mx-auto w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mb-4">
                                <UploadCloud className="w-8 h-8 text-zinc-400" />
                            </div>
                            <h3 className="text-lg font-medium text-zinc-200">Clique para selecionar ou arraste o PDF</h3>
                            <p className="mt-1 text-sm text-zinc-500">Apenas arquivos .pdf do sistema Promob/ERP Legado (Max 10MB)</p>
                        </>
                    ) : (
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-violet-500/10 border border-violet-500/30 rounded-full flex items-center justify-center mb-4 text-violet-500">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-medium text-zinc-200">{file.name}</h3>
                            <p className="mt-1 text-sm text-zinc-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>

                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); clearFile(); }}
                                disabled={isUploading}
                                className="mt-4 px-4 py-2 border border-zinc-700 text-sm font-medium rounded-md text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-2 disabled:opacity-50"
                            >
                                <X className="w-4 h-4" /> Remover Arquivo
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        disabled={!file || isUploading}
                        className={`inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${!file || isUploading ? 'bg-violet-600/50 cursor-not-allowed' : 'bg-violet-600 hover:bg-violet-500'
                            } transition-colors gap-2`}
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Enviando...
                            </>
                        ) : (
                            'Fazer Upload e Iniciar Revisão'
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
