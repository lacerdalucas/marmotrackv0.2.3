// app/(mobile)/action/[qr_code]/page.tsx
// Tela Mobile de Ação: O Operador acabou de bipar a etiqueta e caiu aqui.

import React from 'react'
import { registerPieceEventAction } from '../actions'

export default function MobileActionPage({ params }: { params: { qr_code: string } }) {
    // Mock Data: Na vida real, seria um Fetch no Banco (via token do cara)
    // `SELECT * FROM project_pieces WHERE qr_code_id = params.qr_code`
    const mockPiece = {
        id: 'u-u-i-d',
        qr_code_id: params.qr_code,
        name: 'Ilha Cozinha',
        material: 'Preto Absoluto',
        status: 'PENDING', // Acabou de chegar do setor passado (STAGE_OUT). Falta o STAGE_IN meu.
        current_stage_name: 'Acabamento',
        current_stage_id: 'stage-uuid-mock'
    }

    // A tela tem que ser BURRA. A Decisão lógica de qual botão aparece é derivada do STAGE.
    // Se está PENDING, o setor atual ainda não puxou pra si. Logo, botão "RECEBER (STAGE_IN)"
    const isWaitingToStart = mockPiece.status === 'PENDING'
    // Se está IN_PROGRESS, o setor pegou, então o botão principal vira "CONCLUIR (STAGE_OUT)"
    const isWorking = mockPiece.status === 'IN_PROGRESS'

    // Usaremos um bind da Server Action passando as variaveis duras, pra rodar on submit
    // Obs: Em client components usariamos state + transition (useTransition) para UI loading

    return (
        <div className="flex flex-col h-[calc(100vh-56px)] justify-between p-4 bg-zinc-900 text-white">
            {/* Container de Info Gigante */}
            <div className="bg-zinc-800 rounded-2xl p-6 text-center shadow-lg border border-zinc-700">
                <p className="text-zinc-500 uppercase tracking-widest textxs mb-1 font-bold tracking-widest text-xs mb-1">Setor: {mockPiece.current_stage_name}</p>
                <h1 className="text-3xl font-black mb-2">{mockPiece.name}</h1>
                <p className="text-xl text-blue-400 font-semibold mb-4">{mockPiece.material}</p>

                <div className="inline-block bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2">
                    <span className="text-sm text-zinc-400">QR:</span>
                    <span className="ml-2 font-mono text-zinc-200">{params.qr_code}</span>
                </div>
            </div>

            {/* Container de Ações Gigantes (Touch Targets 40%+) */}
            <div className="space-y-4 mb-8">
                {isWaitingToStart && (
                    <form action={registerPieceEventAction.bind(null, params.qr_code, 'STAGE_IN', mockPiece.current_stage_id, undefined)}>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white h-24 rounded-2xl text-2xl font-black uppercase shadow-lg shadow-blue-900/50 active:scale-95 transition-transform"
                        >
                            Iniciei Aqui (Receber)
                        </button>
                    </form>
                )}

                {isWorking && (
                    <form action={registerPieceEventAction.bind(null, params.qr_code, 'STAGE_OUT', mockPiece.current_stage_id, undefined)}>
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-500 text-white h-24 rounded-2xl text-2xl font-black uppercase shadow-lg shadow-green-900/50 active:scale-95 transition-transform"
                        >
                            Concluí O Serviço
                        </button>
                    </form>
                )}

                <form action={registerPieceEventAction.bind(null, params.qr_code, 'BLOCK_REWORK', mockPiece.current_stage_id, "Reportado via Celular")}>
                    <button
                        type="submit"
                        className="w-full bg-transparent border-2 border-red-900/50 text-red-500 hover:bg-red-950/30 h-16 rounded-2xl text-lg font-bold uppercase active:scale-95 transition-transform"
                    >
                        Reportar Defeito / Quebra
                    </button>
                </form>
            </div>
        </div>
    )
}
