// app/(mobile)/scanner/page.tsx
// A tela de Scanner QR Code para o Operador.
// Botão GIGANTE para facilitar uso com luvas.
import React from 'react'

export default function ScannerPage() {
    return (
        <div className="flex flex-col items-center justify-center p-6 min-h-[calc(100vh-56px)]">
            {/* Placeholder para o Camera Viewfinder (react-qr-reader futuramente) */}
            <div className="w-full aspect-square bg-zinc-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-zinc-600 mb-8">
                <p className="text-zinc-500 text-center px-4">Buscando QR Code da Etiqueta...</p>
            </div>

            <div className="w-full max-w-sm space-y-4">
                <button className="w-full h-20 text-xl font-bold rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-transform">
                    BIPAR MANUALMENTE
                </button>
                <button className="w-full h-14 text-sm font-semibold rounded-xl border border-zinc-700 hover:bg-zinc-800 active:scale-95 transition-transform text-zinc-400">
                    Minhas Peças de Hoje
                </button>
            </div>
        </div>
    )
}
