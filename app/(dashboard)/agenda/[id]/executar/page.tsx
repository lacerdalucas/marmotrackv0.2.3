import React from 'react';
import { getMedicaoParaExecutarAction } from '@/app/actions/execucao_medicao';
import ExecucaoMedicaoForm from './ExecucaoMedicaoForm';
import { ClipboardType, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function ExecutarMedicaoPage({ params }: { params: { id: string } | any }) {
    const resolvedParams = await (typeof params === 'object' && 'then' in params ? params : Promise.resolve(params));
    const res = await getMedicaoParaExecutarAction(resolvedParams.id);

    if (!res.success || !res.data) return notFound();

    const medicao = res.data;
    const pedido = Array.isArray(medicao.pedidos_v2) ? medicao.pedidos_v2[0] : medicao.pedidos_v2;

    if (!pedido) return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-950 p-6">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <h1 className="text-xl font-bold text-white mb-2">Vínculo Perdido</h1>
            <p className="text-zinc-500">O Orçamento Pai desta agenda de medição não foi localizado no banco de dados.</p>
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto w-full p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
                <Link href="/agenda" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-4">
                    <ArrowLeft className="w-4 h-4" /> Voltar à Agenda
                </Link>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl flex items-center gap-3">
                            <ClipboardType className="w-8 h-8 text-blue-500" /> Execução In Loco
                        </h1>
                        <p className="mt-2 text-sm text-zinc-400">
                            Cópia Digital da Obra. Insira as dimensões reais, adicione itens se necessário e assine a liberação pro PCM.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div>
                        <p className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Cód. OP</p>
                        <p className="text-base sm:text-lg font-black text-white px-3 py-1 bg-zinc-800 rounded-md">#{pedido.numero_orcamento}</p>
                    </div>
                    <div>
                        <p className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Cliente / Endereço</p>
                        <p className="text-sm font-semibold text-zinc-200">{(pedido as any).cliente_nome}</p>
                        <p className="text-xs text-zinc-500">{(pedido as any).endereco_obra} - {(pedido as any).cidade_obra}</p>
                    </div>
                </div>
            </div>

            <ExecucaoMedicaoForm medicao={medicao} pedido={pedido} />
        </div>
    );
}
