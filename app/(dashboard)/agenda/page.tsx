// app/(dashboard)/agenda/page.tsx
// Tela Web do PCP: Agenda de Medições.

import React from 'react';

export default function AgendaPage() {
    // Mock Data: Na vida real -> supabase.from('measurement_visits').select('*, projects(customer_name, erp_reference), users_profile(full_name)')
    const mockVisits = [
        { id: 'visit-1', project_ref: 'OS-1050', customer_name: 'Residencial Alpha', measurer_name: 'João Silva', date: '10/03/2026 14:00', status: 'SCHEDULED', notes: 'Levar trena a laser nova.' },
        { id: 'visit-2', project_ref: 'OS-1042', customer_name: 'Dona Maria', measurer_name: 'Marcos (Técnico)', date: '12/03/2026 09:00', status: 'COMPLETED', notes: '', field_notes: 'Canto fora de esquadro, aumentar 2cm no frontão.' }
    ];

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="flex justify-between items-end mb-8 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Agenda de Medições</h1>
                    <p className="text-gray-500 mt-2">Agende visitas do setor técnico para liberar o PDF da O.S. para produção física.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors shadow-sm">
                    + Agendar Nova Medição
                </button>
            </div>

            {/* Placeholder Grid de Vistas Agendadas */}
            <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente / O.S.</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data & Horário</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsável</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockVisits.map((visit) => (
                            <tr key={visit.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">{visit.customer_name}</div>
                                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider bg-gray-100 inline-block px-2 py-0.5 rounded">{visit.project_ref}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                                    {visit.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {visit.measurer_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${visit.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                        }`}>
                                        {visit.status === 'COMPLETED' ? 'LIBERADA' : 'AGENDADA'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 mr-4">Editar</button>
                                    {visit.status === 'COMPLETED' && (
                                        <button className="text-gray-500 hover:text-gray-700" title={visit.field_notes}>Ver Laudo</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
