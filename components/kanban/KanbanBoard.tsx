'use client';

import React, { useState, useTransition } from 'react';
import { AlignLeft, Clock, Activity, Zap, X, Calculator, CalendarClock, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import { simularImpactoPedidoAction } from '@/app/actions/capacidade';

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
    capacidade?: any;
    abreSimulador?: () => void;
}

export default function KanbanBoard({ capacidadeGeral }: { capacidadeGeral?: any[] }) {
    const [showSimulador, setShowSimulador] = useState(false);

    // Mocks iniciais para validar o layout
    const colunas = [
        {
            title: 'Fila de Corte',
            cards: [
                { id: 'op-1', peca: 'Bancada 200x60', ambiente: 'Cozinha', material: 'Preto São Gabriel', prioridade: 'Normal' as Prioridade },
                { id: 'op-2', peca: 'Ilha 150x90', ambiente: 'Cozinha', material: 'Preto São Gabriel', prioridade: 'Urgente' as Prioridade },
            ],
            // Setor null para fila
            capacidade: null
        },
        {
            title: 'Corte',
            cards: [
                { id: 'op-3', peca: 'Lavatório 80x50', ambiente: 'Banheiro Suíte', material: 'Branco Prime', prioridade: 'Normal' as Prioridade },
            ],
            capacidade: (capacidadeGeral || []).find((c:any) => c.setor === 'Corte')
        },
        {
            title: 'Acabamento',
            cards: [
                { id: 'op-4', peca: 'Nicho 40x30', ambiente: 'Banheiro Social', material: 'Travertino Navona', prioridade: 'Baixa' as Prioridade },
            ],
            capacidade: (capacidadeGeral || []).find((c:any) => c.setor === 'Acabamento')
        },
        {
            title: 'Polimento',
            cards: [],
            capacidade: (capacidadeGeral || []).find((c:any) => c.setor === 'Polimento')
        },
        {
            title: 'Expedição',
            cards: [
                { id: 'op-5', peca: 'Soleiras (5 u.)', ambiente: 'Geral', material: 'Preto São Gabriel', prioridade: 'Normal' as Prioridade },
            ],
            capacidade: null
        }
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4 flex flex-row justify-end px-2">
                <button 
                    onClick={() => setShowSimulador(true)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg shadow-blue-500/20 transition-all border border-blue-500">
                    <Zap className="w-4 h-4" /> Simulador de Impacto (PCP)
                </button>
            </div>

            <div className="flex h-full w-full space-x-4 overflow-x-auto pb-4">
                {colunas.map((coluna) => (
                    <KanbanColumn 
                        key={coluna.title} 
                        title={coluna.title} 
                        cards={coluna.cards} 
                        capacidade={coluna.capacidade}
                    />
                ))}
            </div>

            {showSimulador && <ModalSimulador onClose={() => setShowSimulador(false)} />}
        </div>
    );
}

function KanbanColumn({ title, cards, capacidade }: ColumnProps) {
    let capIndicator = null;
    let dataEstimada = 'Imediato';

    if (capacidade) {
        const perc = capacidade.percentual || 0;
        let corBg = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
        let corDot = 'bg-emerald-500';
        
        if (perc >= 95) {
            corBg = 'bg-red-500/10 text-red-500 border-red-500/20';
            corDot = 'bg-red-500';
            dataEstimada = '+15 dias úteis';
        } else if (perc >= 80) {
            corBg = 'bg-amber-500/10 text-amber-500 border-amber-500/20';
            corDot = 'bg-amber-500';
            dataEstimada = '+10 dias úteis';
        }

        capIndicator = (
            <div className="flex flex-col items-end gap-1 mt-2 mb-1 w-full border-t border-zinc-800/80 pt-2">
                <div className="w-full flex justify-between items-center px-1">
                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Carga Atual</span>
                    <span className={cn("text-xs font-bold px-2 py-0.5 rounded-md border flex items-center gap-1.5", corBg)}>
                        <div className={cn("w-1.5 h-1.5 rounded-full", corDot)}></div>
                        {perc}%
                    </span>
                </div>
                <div className="w-full flex justify-between items-center px-1">
                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Próx. Slot Livre</span>
                    <span className="text-[11px] font-medium text-zinc-300 flex items-center gap-1">
                        <CalendarClock className="w-3 h-3 text-zinc-500" /> {dataEstimada}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-80 shrink-0 flex-col rounded-lg bg-zinc-900 border border-zinc-800 h-full">
            <div className="flex flex-col p-4 border-b border-zinc-800 bg-zinc-950/40 rounded-t-lg">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-200 tracking-tight">{title}</h3>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs font-medium text-zinc-400">
                        {cards.length}
                    </span>
                </div>
                {capIndicator}
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
                    <span className="inline-block w-2 h-2 rounded-full bg-zinc-700" />
                    <span className="text-zinc-400">{card.material}</span>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// MODAL: SIMULADOR DE IMPACTO PCP
// ==========================================
function ModalSimulador({ onClose }: { onClose: () => void }) {
    const [isPending, startTransition] = useTransition();
    const [resultado, setResultado] = useState<any>(null);
    const [horasSubmetidas, setHorasSubmetidas] = useState('24'); // mock 24h impacto
    const [nomeOrcamento, setNomeOrcamento] = useState('Orçamento de Teste #3991');

    const handleSimular = () => {
        startTransition(async () => {
             // Mock de um dicionário de horas que a server action receberia
             const res = await simularImpactoPedidoAction({ 'Corte': Number(horasSubmetidas)/2, 'Acabamento': Number(horasSubmetidas)/2 });
             if (res.success) {
                 setResultado(res);
             }
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden shadow-blue-500/10">
                
                <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-950/80">
                    <div>
                        <h2 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                            <Zap className="w-5 h-5" /> Simulador de Impacto na Fábrica
                        </h2>
                        <p className="text-xs text-zinc-400 mt-0.5">Teste o gargalo produtivo de orçamentos em negociação.</p>
                    </div>
                    <button onClick={onClose} className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Formulário Fake de Seleção */}
                    {!resultado ? (
                        <>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-zinc-300 block mb-1.5">Orçamento Alvo</label>
                                    <input type="text" value={nomeOrcamento} onChange={e => setNomeOrcamento(e.target.value)} 
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-zinc-300 block mb-1.5">Esforço Estimado (Total Horas Fábrica)</label>
                                    <input type="number" value={horasSubmetidas} onChange={e => setHorasSubmetidas(e.target.value)} 
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 outline-none focus:border-blue-500" />
                                </div>
                            </div>
                            
                            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-start gap-3">
                                <Activity className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                <p className="text-xs text-blue-300 leading-relaxed">
                                    O simulador irá somar o esforço deste orçamento com as <strong className="text-blue-400">Ordens de Produção Atuais</strong>. Caso cruze a meta de 80% (Carga Alta) ou 95% (Crítico) de ocupação semanal, a Data de Entrega ideal sugerida pelo sistema será deslocada.
                                </p>
                            </div>

                            <button onClick={handleSimular} disabled={isPending}
                                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium p-3 rounded-lg flex items-center justify-center gap-2">
                                {isPending ? <Activity className="w-5 h-5 animate-spin" /> : <Calculator className="w-5 h-5" />}
                                Rodar Simulação Aritmética
                            </button>
                        </>
                    ) : (
                        /* Tela de Resultado do Simulador */
                        <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                            
                            <div className="text-center pb-2">
                                <h3 className="text-xl font-bold text-white mb-2">{nomeOrcamento}</h3>
                                {resultado.alertaSobrecarga && (
                                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold mb-4 animate-pulse">
                                        <ShieldAlert className="w-5 h-5" />
                                        {resultado.alertaSobrecarga}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-xl text-center">
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Carga Geral Adicionada</p>
                                    <p className="text-3xl font-black text-white">{resultado.ocupacaoPreSimulacao}% <span className="text-blue-500 text-lg">→ +{Math.round(Number(horasSubmetidas)/2)}%</span></p>
                                </div>
                                <div className={cn("bg-zinc-950 border border-zinc-800 p-4 rounded-xl text-center", resultado.alertaSobrecarga ? "border-red-500/30" : "border-emerald-500/30")}>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Data Mínima Segura</p>
                                    <p className={cn("text-lg font-bold", resultado.alertaSobrecarga ? "text-red-400" : "text-emerald-400")}>
                                        {new Date(resultado.dataMetaSugerida).toLocaleDateString('pt-BR')}
                                    </p>
                                    <p className="text-[10px] text-zinc-500 mt-1">Acrescentado {resultado.previsaoDiasUteis} dias úteis</p>
                                </div>
                            </div>

                            <button onClick={onClose}
                                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium p-3 rounded-lg mt-4">
                                Fechar Simulador
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
