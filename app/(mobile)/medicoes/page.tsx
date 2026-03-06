// app/(mobile)/medicoes/page.tsx
// Tela Mobile (PWA) de Listagem de Visitas pendentes do Medidor Logado no dia.

import React from 'react';
import Link from 'next/link';

export default function MedicoesMobilePage() {
    // Mock Data: Na vida real -> supabase.from('measurement_visits').select('*, projects(customer_name, shipping_address)').eq('measurer_id', user.id).neq('status', 'COMPLETED')
    const mockMyVisits = [
        { id: 'visit-1', project_ref: 'OS-1050', customer_name: 'Residencial Alpha', address: 'Av. Paulista 1000 - Apto 34', time: '14:00', status: 'SCHEDULED' },
        { id: 'visit-3', project_ref: 'OS-1002', customer_name: 'Dr. Roberto', address: 'Rua Augusta, 10 - Casa', time: '16:30', status: 'SCHEDULED' }
    ];

    return (
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col pt-4 px-4 pb-24">
            <div className="mb-6">
                <h1 className="text-2xl font-black text-white uppercase tracking-wider">Minhas Visitas</h1>
                <p className="text-zinc-400 text-sm mt-1">Medições pendentes do dia.</p>
            </div>

            <div className="flex-1 space-y-4">
                {mockMyVisits.length === 0 ? (
                    <div className="bg-zinc-800 rounded-2xl p-6 text-center border border-zinc-700">
                        <p className="text-zinc-400">Tudo limpo! Nenhuma medição agendada para hoje.</p>
                    </div>
                ) : (
                    mockMyVisits.map((visit) => (
                        <Link key={visit.id} href={`/medicoes/${visit.id}`}>
                            <div className="bg-zinc-800 rounded-2xl p-5 shadow-lg border border-zinc-700 active:scale-95 transition-transform cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded tracking-widest">{visit.project_ref}</span>
                                    <span className="text-sm font-bold text-blue-400">{visit.time}</span>
                                </div>

                                <h3 className="text-lg font-black text-white">{visit.customer_name}</h3>

                                <div className="mt-4 flex items-start gap-2 text-zinc-400 text-sm">
                                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="leading-tight">{visit.address}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
