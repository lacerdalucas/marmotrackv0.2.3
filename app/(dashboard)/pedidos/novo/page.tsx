import React from 'react';
import { FilePlus, FileUp, ArrowRight } from 'lucide-react';
import NovoPedidoComercialForm from '@/components/pedidos_v2/NovoPedidoComercialForm';
import Link from 'next/link';

export default function NovoPedidoPage() {
    return (
        <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl flex items-center gap-2">
                        <FilePlus className="text-violet-500" /> Novo Orçamento / Pedido
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Crie um pedido manualmente ou gere um mapa de peças a partir de um PDF do ERP.
                    </p>
                </div>
            </div>

            {/* Smart Import Banner */}
            <div className="mb-8">
                <Link
                    href="/import"
                    className="group block border border-violet-500/30 bg-violet-500/5 hover:bg-violet-500/10 rounded-xl p-6 transition-all hover:border-violet-500/50 relative overflow-hidden"
                >
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl group-hover:bg-violet-600/20 transition-all"></div>
                    <div className="flex items-start md:items-center gap-5 relative z-10 w-full">
                        <div className="p-3 bg-violet-600/20 rounded-lg text-violet-400 border border-violet-500/20 shrink-0">
                            <FileUp className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                                Importação Inteligente (Promob/ERP)
                                <span className="text-[10px] uppercase font-bold tracking-wider bg-violet-600 px-2 py-0.5 rounded text-white">Recomendado</span>
                            </h3>
                            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                                Faça o upload do documento gerado no setor de vendas. O sistema fará o parser extraindo medidas e ambientes automaticamente, criando a estrutura da O.S.
                            </p>
                        </div>
                        <div className="hidden md:flex shrink-0">
                            <div className="flex items-center gap-2 text-violet-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                                Acessar Importador <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-4 mt-8 mb-4">
                    <div className="flex-1 h-px bg-zinc-800"></div>
                    <span className="text-xs uppercase tracking-widest font-bold text-zinc-600">Ou Preenchimento Manual</span>
                    <div className="flex-1 h-px bg-zinc-800"></div>
                </div>
            </div>

            {/* Container do Formulário Manual */}
            <div className="pb-8">
                <NovoPedidoComercialForm />
            </div>
        </div>
    );
}
