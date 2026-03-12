'use client';

import React, { useState, useTransition } from 'react';
import { ChevronDown, ChevronUp, QrCode, Calculator, CheckCircle2, RotateCw, Loader2, AlertTriangle, ArrowLeftRight, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '@/lib/utils';
import { gerarQrCodesPedidoAction, aprovarParaProducaoAction, devolverParaMedicaoAction } from '@/app/actions/projetos';
import { toast } from 'sonner';

interface PedidoProps {
    pedido: any;
}

export default function PedidoProjetoDetalhes({ pedido }: PedidoProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [showDevolveModal, setShowDevolveModal] = useState(false);
    const [motivoDevolucao, setMotivoDevolucao] = useState('');
    const itens = pedido.pedidos_itens_v2 || [];

    // Lote foi gerado se o primeiro item tiver codigo_qr
    const loteGerado = itens.length > 0 && !!itens[0].codigo_qr;

    const handleGerarLote = () => {
        startTransition(async () => {
            const res = await gerarQrCodesPedidoAction(pedido.id, pedido.numero_orcamento);
            if (res.success) {
                toast.success(res.message);
                setIsExpanded(true); // Abre p/ mostrar os QRs
            } else {
                toast.error(res.message);
            }
        });
    };

    const handleAprovar = () => {
        startTransition(async () => {
            const res = await aprovarParaProducaoAction(pedido.id);
            if (res.success) toast.success(res.message);
            else toast.error(res.message);
        });
    };

    const handleDevolver = () => {
        if (!motivoDevolucao.trim()) {
            toast.error('Informe o motivo da devolução da obra.');
            return;
        }
        startTransition(async () => {
            const res = await devolverParaMedicaoAction(pedido.id, motivoDevolucao);
            if (res.success) {
                toast.success(res.message);
                setShowDevolveModal(false);
            } else {
                toast.error(res.message);
            }
        });
    };

    // Computar Area do pedido e dos itens
    const calcularAreaPeca = (compStr: string, largStr: string, qtdStr: string) => {
        const c = parseFloat(compStr?.replace(',', '.') || '0');
        const l = parseFloat(largStr?.replace(',', '.') || '0');
        const q = parseInt(qtdStr || '1');
        return isNaN(c) || isNaN(l) || isNaN(q) ? 0 : (c * l * q);
    };

    let areaTotalM2 = 0;
    itens.forEach((item: any) => {
        const partes = item.partes_medidas || [];
        partes.forEach((p: any) => {
            areaTotalM2 += calcularAreaPeca(p.comprimento, p.largura, p.quantidade);
        });
    });

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm hover:border-zinc-700 transition-colors">
            
            {/* Header da O.P. */}
            <div 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex flex-col md:flex-row md:items-center justify-between p-5 cursor-pointer bg-zinc-950/40 hover:bg-zinc-950/80 transition-colors gap-4"
            >
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <span className="text-xl font-black text-blue-500">{pedido.numero_orcamento}</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-sm font-bold text-white uppercase tracking-wider">{pedido.cliente_nome}</h2>
                            {pedido.alerta_medicao_divergente && (
                                <span className="flex items-center gap-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider" title="O técnico inseriu/modificou itens diretamente na obra.">
                                    <AlertTriangle className="w-2.5 h-2.5" /> Extra In Loco
                                </span>
                            )}
                        </div>
                        <span className="text-xs text-zinc-500">{pedido.cidade_obra} • {itens.length} ambientes</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    {/* Consumo de Insumo (Chapas) */}
                    <div className="flex flex-col items-end hidden sm:flex">
                        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider flex items-center gap-1"><Calculator className="w-3 h-3"/> Calculado (Pós-Med.)</span>
                        <span className="text-sm font-bold text-emerald-400">{areaTotalM2.toFixed(2)} m² <span className="text-zinc-500 text-xs">brutos</span></span>
                    </div>

                    <div className="flex items-center gap-2">
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-zinc-500" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
                    </div>
                </div>
            </div>

            {/* Expansão e Renderização de Engenharia */}
            {isExpanded && (
                <div className="p-5 border-t border-zinc-800 space-y-6">
                    
                    {/* Toolbar Rastreio e Saída */}
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-950 p-4 rounded-lg border border-zinc-800 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-zinc-900 rounded-md">
                                <QrCode className="w-5 h-5 text-zinc-400" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-zinc-200">Geração de Lote QR Code</p>
                                <p className="text-xs text-zinc-500">
                                    {loteGerado ? 'Identificadores gerados com sucesso.' : 'O lote de etiquetas ainda não foi processado.'}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                            <button 
                                onClick={() => setShowDevolveModal(true)} disabled={isPending}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-red-500/10 text-red-400 text-sm font-medium px-4 py-2 rounded-md border border-red-500/20 transition-colors disabled:opacity-50">
                                <ArrowLeftRight className="w-4 h-4" /> Devolver (Medição)
                            </button>

                            {!loteGerado ? (
                                <button 
                                    onClick={handleGerarLote} disabled={isPending}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-50">
                                    {isPending ? <Loader2 className="w-4 h-4 animate-spin"/> : <RotateCw className="w-4 h-4" />}
                                    Gerar Lote de Rastreio (QR)
                                </button>
                            ) : (
                                <button 
                                    onClick={handleAprovar} disabled={isPending}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-50">
                                    {isPending ? <Loader2 className="w-4 h-4 animate-spin"/> : <CheckCircle2 className="w-4 h-4" />}
                                    Aprovar para Produção
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Modal Devolução à Medição */}
                    {showDevolveModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
                                <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-950/50">
                                    <h2 className="text-lg font-bold text-red-500 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5" /> Devolver para Medição
                                    </h2>
                                    <button onClick={() => setShowDevolveModal(false)} className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="p-5 space-y-4">
                                    <p className="text-sm text-zinc-400">
                                        O pedido <strong>#{pedido.numero_orcamento}</strong> sairá da tela de Projetos e voltará para o tablet do medidor. 
                                        Explique o que faltou ou o que precisa ser re-medido.
                                    </p>
                                    <div>
                                        <label className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">Motivo da Devolução *</label>
                                        <textarea
                                            value={motivoDevolucao}
                                            onChange={(e) => setMotivoDevolucao(e.target.value)}
                                            placeholder="Ex: Faltou enviar a medida das guarnições da porta."
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-red-500/50 resize-none h-24"
                                        />
                                    </div>
                                </div>
                                <div className="p-5 border-t border-zinc-800 bg-zinc-950 flex justify-end gap-3">
                                    <button onClick={() => setShowDevolveModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                                        Cancelar
                                    </button>
                                    <button onClick={handleDevolver} disabled={isPending || motivoDevolucao.trim().length < 5} 
                                        className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-red-500/20 disabled:opacity-50 flex items-center gap-2 transition-all">
                                        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Confirmar Devolução'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Lista de Ambientes e Peças */}
                    <div className="space-y-4">
                        {itens.map((item: any, idxAmb: number) => {
                            const partes = item.partes_medidas || [];
                            
                            // Área do Ambiente
                            let areaAmbiente = 0;
                            partes.forEach((p: any) => areaAmbiente += calcularAreaPeca(p.comprimento, p.largura, p.quantidade));

                            return (
                                <div key={item.id} className="border border-zinc-800 bg-zinc-950/50 rounded-lg overflow-hidden flex flex-col md:flex-row md:items-stretch">
                                    
                                    {/* Etiqueta QR Mãe do Ambiente */}
                                    {item.codigo_qr && (
                                        <div className="shrink-0 flex flex-col items-center justify-center bg-white p-4 w-full md:w-32 border-b md:border-b-0 md:border-r border-zinc-200">
                                            <QRCodeSVG value={item.codigo_qr} size={64} level="M" />
                                            <span className="text-[10px] font-mono font-bold text-black mt-2">{item.codigo_qr}</span>
                                        </div>
                                    )}

                                    <div className="p-4 flex-1">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-sm font-bold text-white uppercase tracking-tight">{item.ambiente}</h3>
                                                <span className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded leading-none inline-block mt-1">{item.material}</span>
                                            </div>
                                            <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">{areaAmbiente.toFixed(2)} m²</span>
                                        </div>

                                        {/* Peças da Ficha Técnica */}
                                        <div className="mt-3 space-y-2">
                                            {partes.map((p: any, idxPeca: number) => {
                                                const subQrCode = item.codigo_qr ? `${item.codigo_qr}_${String.fromCharCode(65 + idxPeca)}` : null; // Ex: 3124-01_A
                                                
                                                return (
                                                    <div key={idxPeca} className="flex items-center justify-between bg-zinc-900 p-2 rounded border border-zinc-800/80">
                                                        <div className="flex items-center gap-3">
                                                            {subQrCode && (
                                                                <span className="text-[9px] font-mono bg-zinc-950 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-800">
                                                                    {subQrCode}
                                                                </span>
                                                            )}
                                                            <span className="text-xs font-medium text-zinc-300">{p.peca}</span>
                                                        </div>
                                                        <div className="text-xs text-zinc-500 font-mono">
                                                            {p.comprimento} x {p.largura} <span className="text-zinc-700 ml-1">({p.quantidade} un)</span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        
                                        {/* Acabamentos Sumarizados */}
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {(item.acabamentos || []).map((a: any, i: number) => (
                                                <span key={i} className="text-[10px] bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded border border-amber-500/20 truncate max-w-[150px]">
                                                    {a.descricao}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            )}
        </div>
    );
}
