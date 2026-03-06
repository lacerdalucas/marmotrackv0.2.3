// app/(dashboard)/issues/page.tsx
// O Hospital: Tela de Gestão de Pendências e Retrabalho.

import React from 'react'

export default function IssuesHospitalPage() {
    // Mock Data: Na vida real -> supabase.from('piece_issues').select('*, piece:project_pieces(*)')
    const mockIssues = [
        { id: 'iss-1', status: 'OPEN', erp_ref: 'OS-1021', piece_name: 'Lavatório', issue_date: 'Hoje, 10:43', reported_by_name: 'Operador Carlos (Acabamento)', defect_note: 'Pedra trincou na esquadria. Necessita nova chapa.' },
        { id: 'iss-2', status: 'RESOLVED', erp_ref: 'OS-0990', piece_name: 'Rodapé', issue_date: 'Ontem, 15:00', reported_by_name: 'Instalador Marcos', defect_note: 'Medida bateu errado na parede torta.' }
    ]

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Hospital de Peças (Retrabalhos)</h1>
                <p className="text-gray-500 mt-2">Gestão de exceções operacionais. Avalie, justifique e reinjete as peças no fluxo.</p>
            </div>

            <div className="space-y-6">
                {mockIssues.map(issue => (
                    <div key={issue.id} className={`border rounded-lg p-6 bg-white shadow-sm ${issue.status === 'OPEN' ? 'border-red-200 ring-1 ring-red-100' : 'border-gray-200 opacity-60'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="bg-gray-100 text-gray-600 px-2.5 py-1 text-xs font-bold rounded">{issue.erp_ref}</span>
                                <h2 className="text-xl font-bold text-gray-900 mt-2">{issue.piece_name}</h2>
                                <p className="text-sm text-gray-500 mt-1">Reportado por: {issue.reported_by_name} • {issue.issue_date}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${issue.status === 'OPEN' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {issue.status === 'OPEN' ? 'AGUARDANDO AÇÃO (PCP)' : 'RESOLVIDO'}
                            </span>
                        </div>

                        <div className="bg-red-50 p-4 rounded-md mb-4 border border-red-100">
                            <p className="text-red-800 text-sm italic">"{issue.defect_note}"</p>
                        </div>

                        {issue.status === 'OPEN' && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Resolução / Justificativa Gerencial (Para BI)</label>
                                <textarea
                                    rows={3}
                                    className="w-full border-gray-300 rounded-md shadow-sm p-2 mb-4 border text-sm"
                                    placeholder="Ex: Refaturado p/ cliente. Chapa autorizada. Reinjetada no Corte."
                                ></textarea>

                                <div className="flex gap-4">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700">
                                        Salvar e Reinjetar Peça (Retornar ao Kanban)
                                    </button>
                                    <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-50">
                                        Apenas Arquivar (Perda Total)
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
