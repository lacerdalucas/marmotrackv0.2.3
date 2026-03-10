import React from 'react';
import KanbanBoard from '@/components/kanban/KanbanBoard';

export const revalidate = 0;

export default function KanbanPage() {
    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl">Quadro de Produção (Kanban)</h1>
                <p className="mt-1 text-sm text-zinc-400">
                    Gerencie o fluxo de peças pela fábrica e acompanhe o status de cada Ordem de Produção (O.P.).
                </p>
            </div>

            <div className="flex-1 overflow-hidden">
                {/* Usamos o Client Component para a UI interativa de Drag & Drop (Mock por enquanto) */}
                <KanbanBoard />
            </div>
        </div>
    );
}
