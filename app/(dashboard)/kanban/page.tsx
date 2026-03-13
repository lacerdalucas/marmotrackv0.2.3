import React from 'react';
import KanbanBoard from '@/components/kanban/KanbanBoard';
import { getCapacidadeProducaoGeralAction } from '@/app/actions/capacidade';
import { getItensEmProducaoAction } from '@/app/actions/kanban';
import { ShieldAlert } from 'lucide-react';

export const revalidate = 0;

export default async function KanbanPage() {
    const capacidadeRef = await getCapacidadeProducaoGeralAction();
    const resItens = await getItensEmProducaoAction();
    const itensReais = resItens.success ? resItens.data : [];

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl">Quadro de Produção (Kanban)</h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Gerencie o fluxo de peças pela fábrica e acompanhe o status de cada Ordem de Produção (O.P.).
                    </p>
                </div>
                
                {capacidadeRef.corGeral === 'red' && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg text-red-500 text-sm font-semibold animate-pulse">
                        <ShieldAlert className="w-5 h-5" /> 
                        Fábrica Sobrecarregada ({capacidadeRef.ocupacaoGeralMedia}%)
                    </div>
                )}
            </div>

            <div className="flex-1 overflow-hidden">
                <KanbanBoard 
                    capacidadeGeral={capacidadeRef.estatisticas || []} 
                    itensIniciais={itensReais}
                />
            </div>
        </div>
    );
}
