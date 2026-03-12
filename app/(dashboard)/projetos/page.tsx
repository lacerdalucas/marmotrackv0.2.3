import React from 'react';
import { getPedidosParaProjetosAction } from '@/app/actions/projetos';
import { MonitorPlay, AlertCircle } from 'lucide-react';
import PedidoProjetoDetalhes from '@/components/projetos/PedidoProjetoDetalhes';

export const revalidate = 0;

export default async function ProjetosPage() {
    const res = await getPedidosParaProjetosAction();
    const pedidos = res.data || [];

    return (
        <div className="max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
            <div className="mb-8 border-b border-zinc-800 pb-5">
                <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl flex items-center gap-3">
                    <MonitorPlay className="w-8 h-8 text-blue-500" /> Setor de Projetos
                </h1>
                <p className="mt-2 text-sm text-zinc-400">
                    Obras com medição concluída aguardando detalhamento técnico, verificação de medidas e rastreabilidade (QR Code).
                </p>
            </div>

            {pedidos.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <AlertCircle className="w-12 h-12 text-zinc-700 mb-4" />
                    <h3 className="text-lg font-medium text-zinc-300">Fila Vazia</h3>
                    <p className="text-zinc-500 text-sm mt-1">Todas as obras pós-medição já foram aprovadas para produção.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {pedidos.map(pedido => (
                        <PedidoProjetoDetalhes key={pedido.id} pedido={pedido} />
                    ))}
                </div>
            )}
        </div>
    );
}
