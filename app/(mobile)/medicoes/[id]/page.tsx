// app/(mobile)/medicoes/[id]/page.tsx
// Tela PWA para o Medidor no ambiente (Obra). Laudo + Botão de Aprovação Estruturado.

import React from 'react';
import { completeMeasurementAction } from '../actions';

export default function MeasurementDetailsPage({ params }: { params: { id: string } }) {
    // Mock Data: Na vida real -> fetch no supabase pela ID da visita (fazendo Join com projects para endereço e ERP)
    const mockVisit = {
        id: params.id,
        project_ref: 'OS-1050',
        customer_name: 'Residencial Alpha',
        address: 'Av. Paulista 1000 - Apto 34',
        time: 'Hoje • 14:00',
        pcp_notes: 'Cuidado com Elevador de Serviço. Medir shafts ao lado do balcão.',
        status: 'SCHEDULED'
    };

    // Se já estivesse completo, mostra tela de read-only
    const isCompleted = mockVisit.status === 'COMPLETED';

    return (
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col p-4">
            {/* Botão de Voltar Simples (Mobile) */}
            <a href="/medicoes" className="text-zinc-400 mb-6 flex items-center font-medium active:text-white">
                ← Voltar à Lista
            </a>

            {/* Info Contexto da Obra */}
            <div className="bg-zinc-800 rounded-2xl p-6 shadow-md border-t-4 border-t-blue-500 mb-6">
                <div className="flex justify-between items-start mb-2">
                    <h1 className="text-2xl font-black text-white">{mockVisit.customer_name}</h1>
                    <span className="text-xs font-bold bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded tracking-widest leading-none mt-1">{mockVisit.project_ref}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{mockVisit.address}</p>

                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                    <span className="text-xs uppercase font-bold tracking-widest text-zinc-500 block mb-1">Nota do PCP (Escritório)</span>
                    <p className="text-sm font-medium text-amber-200">{mockVisit.pcp_notes}</p>
                </div>
            </div>

            {/* Formulário de Finalização Logística */}
            <div className="flex-1 flex flex-col pb-8">
                <form action={async (formData: FormData) => {
                    "use server";
                    await completeMeasurementAction(mockVisit.id, formData);
                }} className="flex-1 flex flex-col">
                    <div className="flex-1 mb-6">
                        <label htmlFor="field_notes" className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2">Seu Laudo Técnico (Fábrica Lerá Isto)</label>
                        <textarea
                            id="field_notes"
                            name="field_notes"
                            rows={5}
                            className="w-full bg-zinc-800 border-2 border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            placeholder="Exemplo: Escada travada. Todas as peças devem subir partidas sem emenda. Canto esquerdo torto em 3cm."
                            disabled={isCompleted}
                        ></textarea>
                    </div>

                    {/* O "Botão Big Green" Padrão de Chão de Fábrica do MarmoTrack */}
                    {!isCompleted ? (
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-500 text-white h-20 rounded-2xl text-xl font-black uppercase shadow-[0_0_20px_rgba(22,163,74,0.3)] active:scale-95 transition-transform"
                        >
                            ✓ Finalizar Medição (Liberar O.S.)
                        </button>
                    ) : (
                        <div className="w-full bg-zinc-800 text-zinc-500 h-20 rounded-2xl flex items-center justify-center text-xl font-black uppercase border border-zinc-700">
                            ✔️ Visita Já Concluída
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
