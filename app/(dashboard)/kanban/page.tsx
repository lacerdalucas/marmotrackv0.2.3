// app/(dashboard)/kanban/page.tsx
// O Kanban de Ação (Gestão). Lê dados em tempo real da view "vw_kanban_board".

import React from 'react'

export default function KanbanPage() {
    // Mock Data: Na vida real, seria: supabase.from('vw_kanban_board').select()
    const mockColumns = [
        { id: '1', name: 'Corte', sequence: 1 },
        { id: '2', name: 'Acabamento', sequence: 2 },
        { id: '3', name: 'Expedição', sequence: 3 },
    ]

    const mockCards = [
        { id: 'p1', piece_name: 'Tampo Pia', material_name: 'Branco Siena', hours_in_current_status: 2, piece_status: 'IN_PROGRESS', stage_id: '1', erp_reference: 'OS-1020', qr_code_id: 'QRC-001' },
        { id: 'p2', piece_name: 'Ilha Central', material_name: 'Preto Absoluto', hours_in_current_status: 49, piece_status: 'PENDING', stage_id: '2', erp_reference: 'OS-1020', qr_code_id: 'QRC-002' },
        { id: 'p3', piece_name: 'Lavatório', material_name: 'Travertino', hours_in_current_status: 5, piece_status: 'BLOCKED_REWORK', stage_id: '2', erp_reference: 'OS-1021', qr_code_id: 'QRC-003' },
    ]

    return (
        <div className="h-[calc(100vh-64px)] flex flex-col p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Kanban de Produção</h1>
                    <p className="text-gray-500 text-sm mt-1">Visão em tempo real das peças na fábrica</p>
                </div>

                {/* Filtros Operacionais */}
                <div className="flex gap-2">
                    <input type="text" placeholder="Filtrar por O.S..." className="border-gray-300 rounded-md shadow-sm text-sm p-2" />
                    <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 shadow-sm">
                        Destacar Atrasos (+48h)
                    </button>
                </div>
            </div>

            <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
                {mockColumns.map(col => {
                    // Filtra peças desta coluna
                    const myCards = mockCards.filter(c => c.stage_id === col.id)
                    // Regra de Ordenação Visível: Problemas flutuam p/ o topo.
                    myCards.sort((a, b) => {
                        if (a.piece_status === 'BLOCKED_REWORK') return -1;
                        if (b.piece_status === 'BLOCKED_REWORK') return 1;
                        return b.hours_in_current_status - a.hours_in_current_status; // Mais velhas em cima
                    })

                    return (
                        <div key={col.id} className="w-80 flex-shrink-0 bg-gray-100/50 rounded-lg flex flex-col border border-gray-200">
                            <div className="p-3 bg-gray-200/50 rounded-t-lg border-b border-gray-200 flex justify-between items-center">
                                <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wider">{col.name}</h3>
                                <span className="bg-gray-300 text-gray-700 text-xs py-0.5 px-2.5 rounded-full font-medium">{myCards.length}</span>
                            </div>

                            <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
                                {myCards.map(card => {
                                    const isBlocked = card.piece_status === 'BLOCKED_REWORK'
                                    const isStale = card.hours_in_current_status > 48

                                    return (
                                        <div key={card.id} className={`bg-white p-3 rounded-md shadow-sm border-l-4 ${isBlocked ? 'border-l-red-500' :
                                                card.piece_status === 'IN_PROGRESS' ? 'border-l-blue-500' :
                                                    isStale ? 'border-l-yellow-500' : 'border-l-gray-300'
                                            }`}>
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{card.erp_reference}</span>
                                                {isBlocked && (
                                                    <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded animate-pulse">QUEBRA</span>
                                                )}
                                                {(!isBlocked && isStale) && (
                                                    <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded">+{Math.floor(card.hours_in_current_status)}h PARADA</span>
                                                )}
                                            </div>

                                            <h4 className="font-semibold text-gray-800 text-sm">{card.piece_name}</h4>
                                            <p className="text-xs text-gray-500 mt-1">{card.material_name}</p>

                                            <div className="mt-3 text-right">
                                                <span className="text-[10px] text-gray-400 font-mono">{card.qr_code_id}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
