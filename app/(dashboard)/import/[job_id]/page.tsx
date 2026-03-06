// app/(dashboard)/import/[job_id]/page.tsx
// Tela 2: A Quarentena (Revisão Humana das extrações do Parser)

import React from 'react'

export default function ReviewJobPage({ params }: { params: { job_id: string } }) {
    // Mock Data: Na vida real, seria um fetch DB da tabela 'import_job_extracted_items' atrelada ao job_id
    const mockItems = [
        { id: 1, confidence: 92, status: 'PENDING', parsed: { env: 'Cozinha', piece: 'Ilha', material: 'Preto Absoluto', dimensions: '1500 x 900' }, manualOverride: null, sourceText: '1x Cozinha - Ilha 150x90 Preto Absoluto' },
        { id: 2, confidence: 85, status: 'PENDING', parsed: { env: 'Banheiro Suite', piece: 'Tampo', material: 'Branco', dimensions: '2000 x 600' }, manualOverride: null, sourceText: '1x Banheiro Suite - Tampo 200x60 Branco' },
        { id: 3, confidence: 30, status: 'PENDING', parsed: { env: 'Desconhecido', piece: 'Desconhecido', material: '', dimensions: '' }, manualOverride: null, sourceText: 'Texto borrado ilegível...' },
    ]

    // Verifica se há algo urgente a ser revisado (Atenção Visual)
    const hasLowConfidenceItems = mockItems.some(i => i.confidence < 70)

    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Revisão do Lote #{params.job_id.substring(0, 6)}</h1>
                    <p className="text-gray-500 mt-1">Valide os itens extraídos da "Orçamento 8891.pdf" antes de gerar a Ordem de Produção.</p>
                </div>

                <button
                    className={`px-6 py-2 rounded-md font-medium shadow-sm transition-colors ${hasLowConfidenceItems
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                    disabled={hasLowConfidenceItems}
                >
                    {hasLowConfidenceItems ? 'Aprovação Bloqueada (Revise Alertas)' : 'Aprovar & Gerar OS'}
                </button>
            </div>

            {hasLowConfidenceItems && (
                <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">Atenção Necessária</h3>
                            <p className="text-sm text-yellow-700 mt-1">Existem itens com extração duvidosa. Edite e valide as linhas marcadas para liberar a aprovação.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabela de Revisão / DataGrid */}
            <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Texto Capturado (Original)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ambiente (Revisar)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome da Pedra (Revisar)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockItems.map((item) => (
                            <tr key={item.id} className={item.confidence < 70 ? 'bg-red-50' : ''}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.confidence >= 90 ? 'bg-green-100 text-green-800' :
                                            item.confidence >= 70 ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                        }`}>
                                        {item.confidence}%
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-xs text-gray-500 max-w-xs truncate" title={item.sourceText}>{item.sourceText}</div>
                                </td>

                                {/* Campos Editáveis */}
                                <td className="px-6 py-4">
                                    <input type="text" defaultValue={item.parsed.env} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border" />
                                </td>
                                <td className="px-6 py-4">
                                    <input type="text" defaultValue={item.parsed.piece} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {item.confidence < 70 ? (
                                        <button className="text-blue-600 hover:text-blue-900 font-semibold">Salvar Correção</button>
                                    ) : (
                                        <span className="text-gray-400">OK</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
