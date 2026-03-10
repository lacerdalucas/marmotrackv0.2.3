'use client';

import React from 'react';
import { AlignLeft, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Tipagem básica para os Mocks
type Prioridade = 'Baixa' | 'Normal' | 'Urgente';

interface MockCard {
    id: string;
    peca: string;
    ambiente: string;
    material: string;
    prioridade: Prioridade;
}

interface ColumnProps {
    title: string;
    cards: MockCard[];
}

export default function KanbanBoard() {
    // Mocks iniciais para validar o layout
    const colunas = [
        {
            title: 'Fila de Corte',
            cards: [
                { id: 'op-1', peca: 'Bancada 200x60', ambiente: 'Cozinha', material: 'Preto São Gabriel', prioridade: 'Normal' as Prioridade },
                { id: 'op-2', peca: 'Ilha 150x90', ambiente: 'Cozinha', material: 'Preto São Gabriel', prioridade: 'Urgente' as Prioridade },
            ]
        },
        {
            title: 'Corte',
            cards: [
                { id: 'op-3', peca: 'Lavatório 80x50', ambiente: 'Banheiro Suíte', material: 'Branco Prime', prioridade: 'Normal' as Prioridade },
            ]
        },
        {
            title: 'Acabamento',
            cards: [
                { id: 'op-4', peca: 'Nicho 40x30', ambiente: 'Banheiro Social', material: 'Travertino Navona', prioridade: 'Baixa' as Prioridade },
            ]
        },
        {
            title: 'Polimento',
            cards: []
        },
        {
            title: 'Expedição',
            cards: [
                { id: 'op-5', peca: 'Soleiras (5 u.)', ambiente: 'Geral', material: 'Preto São Gabriel', prioridade: 'Normal' as Prioridade },
            ]
        }
    ];

    return (
        <div className="flex h-full w-full space-x-4 overflow-x-auto pb-4">
            {colunas.map((coluna) => (
                <KanbanColumn key={coluna.title} title={coluna.title} cards={coluna.cards} />
            ))}
        </div>
    );
}

function KanbanColumn({ title, cards }: ColumnProps) {
    return (
        <div className="flex w-80 shrink-0 flex-col rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                <h3 className="font-semibold text-zinc-200">{title}</h3>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-400">
                    {cards.length}
                </span>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                {cards.length === 0 ? (
                    <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-zinc-700 bg-zinc-950/50">
                        <span className="text-xs text-zinc-500">Nenhuma O.P.</span>
                    </div>
                ) : (
                    cards.map(card => <KanbanCard key={card.id} card={card} />)
                )}
            </div>
        </div>
    );
}

function KanbanCard({ card }: { card: MockCard }) {
    let badgeColor = "bg-zinc-800 text-zinc-300 border-zinc-700";

    if (card.prioridade === 'Urgente') {
        badgeColor = "bg-red-500/10 text-red-400 border-red-500/20";
    } else if (card.prioridade === 'Baixa') {
        badgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }

    return (
        <div className="group relative flex cursor-grab flex-col gap-3 rounded-md border border-zinc-700 bg-zinc-950 p-4 shadow-sm hover:border-violet-500/50 active:cursor-grabbing">
            <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-medium text-zinc-200 leading-tight">
                    {card.peca}
                </h4>
                <span className={cn("shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", badgeColor)}>
                    {card.prioridade}
                </span>
            </div>

            <div className="flex flex-col gap-1 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                    <AlignLeft className="h-3.5 w-3.5 text-zinc-600" />
                    <span>{card.ambiente}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full sm bg-zinc-700" />
                    <span className="text-zinc-400">{card.material}</span>
                </div>
            </div>
        </div>
    );
}
