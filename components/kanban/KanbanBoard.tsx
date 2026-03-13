'use client';

import React, { useState, useTransition } from 'react';
import { AlignLeft, Clock, Activity, Zap, X, Calculator, CalendarClock, ShieldAlert, Trash2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { simularImpactoPedidoAction } from '@/app/actions/capacidade';
import { registrarExclusaoCardKanbanAction } from '@/app/actions/kanban_seguranca';
import { moverPecaKanbanAction } from '@/app/actions/kanban';
import { QRCodeSVG } from 'qrcode.react';
import { toast } from 'sonner';

// Tipagem para os itens reais
interface KanbanItem {
    id: string;
    peca: string;
    ambiente: string;
    material: string;
    status_producao: string;
    prioridade: 'Baixa' | 'Normal' | 'Urgente';
    numero_orcamento: string;
    cliente_nome: string;
    codigo_qr?: string;
    medidas: any[];
}

interface ColumnProps {
    id: string;
    title: string;
    cards: KanbanItem[];
    capacidade?: any;
    onMove?: (cardId: string, toCol: string) => void;
    onDelete?: (id: string, peca: string) => void;
}

const COLUNAS_SISTEMA = [
    { id: 'fila_corte', title: 'Fila de Corte' },
    { id: 'corte', title: 'Corte' },
    { id: 'acabamento', title: 'Acabamento' },
    { id: 'polimento', title: 'Polimento' },
    { id: 'expedicao', title: 'Expedição' },
];

export default function KanbanBoard({ capacidadeGeral, itensIniciais = [] }: { capacidadeGeral?: any[], itensIniciais?: any[] }) {
    const [showSimulador, setShowSimulador] = useState(false);
    const [cards, setCards] = useState<KanbanItem[]>(itensIniciais);
    const [isMoving, setIsMoving] = useState<string | null>(null);

    const handleMoveCard = async (cardId: string, toCol: string) => {
        setIsMoving(cardId);
        
        // Update otimista no front
        setCards(prev => prev.map(c => c.id === cardId ? { ...c, status_producao: toCol } : c));

        const res = await moverPecaKanbanAction(cardId, toCol);
        if (res.success) {
            toast.success('Movimentação persistida.');
        } else {
            toast.error('Erro ao salvar no banco.');
            // Reverter em caso de erro
            setCards(prev => prev.map(c => c.id === cardId ? { ...c, status_producao: cards.find(x => x.id === cardId)?.status_producao || 'fila_corte' } : c));
        }
        setIsMoving(null);
    };

    const handleDeleteCard = async (cardId: string, peca: string) => {
        const motivo = window.prompt(`Motivo da exclusão estrutural para a peça ${peca}:`);
        if (!motivo) return;

        toast.promise(
            registrarExclusaoCardKanbanAction(cardId, peca, motivo), 
            {
                loading: 'Registrando ocorrência de perda...',
                success: (res) => {
                    setCards(prev => prev.filter(c => c.id !== cardId));
                    return res.success ? res.message : 'Excluído do quadro.';
                },
                error: 'Falha no servidor.'
            }
        );
    };

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
                {COLUNAS_SISTEMA.map((coluna) => (
                    <KanbanColumn 
                        key={coluna.id} 
                        id={coluna.id}
                        title={coluna.title} 
                        cards={cards.filter(c => c.status_producao === coluna.id)} 
                        capacidade={coluna.title === 'Corte' ? (capacidadeGeral || []).find((c:any) => c.setor === 'Corte') : coluna.title === 'Acabamento' ? (capacidadeGeral || []).find((c:any) => c.setor === 'Acabamento') : coluna.title === 'Polimento' ? (capacidadeGeral || []).find((c:any) => c.setor === 'Polimento') : null}
                        onDelete={handleDeleteCard}
                        onMove={handleMoveCard}
                    />
                ))}
            </div>

            {showSimulador && <ModalSimulador onClose={() => setShowSimulador(false)} />}
        </div>
    );
}

function KanbanColumn({ id, title, cards, capacidade, onDelete, onMove }: ColumnProps) {
    let capIndicator = null;
    let dataEstimada = 'Imediato';

    // Para um DnD real sem biblioteca, usamos onDragOver e onDrop
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault(); // Necessário para permitir o drop
    };

    const handleDrop = (e: React.DragEvent) => {
        const cardId = e.dataTransfer.getData('cardId');
        if (cardId && onMove) {
            onMove(cardId, id);
        }
    };

    if (capacidade) {
        // ... (lógica de capacidade permanece igual)
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
        <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="flex w-80 shrink-0 flex-col rounded-lg bg-zinc-900 border border-zinc-800 h-full">
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
                    cards.map(card => <KanbanCard key={card.id} card={card} onDelete={onDelete} />)
                )}
            </div>
        </div>
    );
}

function KanbanCard({ card, onDelete }: { card: KanbanItem, onDelete?: (id:string, peca:string) => void }) {
    let badgeColor = "bg-zinc-800 text-zinc-300 border-zinc-700";

    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData('cardId', card.id);
    };

    if (card.prioridade === 'Urgente') {
        badgeColor = "bg-red-500/10 text-red-400 border-red-500/20";
    } else if (card.prioridade === 'Baixa') {
        badgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }

    return (
        <div 
            draggable 
            onDragStart={handleDragStart}
            className="group relative flex cursor-grab flex-col gap-3 rounded-md border border-zinc-700 bg-zinc-950 p-4 shadow-sm hover:border-blue-500/50 active:cursor-grabbing transition-all hover:shadow-lg hover:shadow-blue-500/5">
            <div className="flex items-start justify-between gap-2">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded">#{card.numero_orcamento}</span>
                        <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", badgeColor)}>
                            {card.prioridade}
                        </span>
                    </div>
                    <h4 className="text-sm font-bold text-zinc-200 leading-tight">
                        {card.peca}
                    </h4>
                    <p className="text-[10px] text-zinc-500 mt-0.5 font-medium truncate w-40">{card.cliente_nome}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <button onClick={(e) => { e.stopPropagation(); onDelete && onDelete(card.id, card.peca); }} 
                        className="text-zinc-600 hover:text-red-400 p-0.5 rounded hover:bg-zinc-800 transition-colors" title="Descartar Peça (Perda/Quebra)">
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-800/50 pt-3">
                <div className="flex flex-col gap-1 text-[11px] text-zinc-500">
                    <div className="flex items-center gap-1.5">
                        <AlignLeft className="h-3 w-3 text-zinc-600" />
                        <span className="truncate w-32">{card.ambiente}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                        <span className="text-zinc-400 italic font-medium">{card.material}</span>
                    </div>
                </div>

                {card.codigo_qr && (
                    <div className="bg-white p-1 rounded shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        <QRCodeSVG value={card.codigo_qr} size={32} />
                    </div>
                )}
            </div>

            {/* Tooltip de Medidas ao passar o mouse */}
            <div className="hidden group-hover:block absolute top-full left-0 right-0 z-10 mt-1 bg-zinc-900 border border-zinc-800 p-2 rounded shadow-xl text-[10px]">
                <p className="text-zinc-400 font-bold mb-1 uppercase tracking-widest">Dimensões:</p>
                {card.medidas?.length > 0 ? card.medidas.map((m:any, i:number) => (
                    <div key={i} className="flex justify-between text-zinc-300 border-b border-zinc-800 py-0.5 last:border-0 font-mono">
                        <span>{m.peca}</span>
                        <span>{m.comprimento} x {m.largura} (x{m.quantidade})</span>
                    </div>
                )) : <span className="text-zinc-600 italic">Sem medidas detalhadas</span>}
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
