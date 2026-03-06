// app/(mobile)/layout.tsx
// Layout para PWA Fábrica/Obra. Oculta menus complexos, foco na imersão.
import React from 'react'

export default function MobileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-zinc-950 text-white min-h-screen flex-col">
            {/* Header Fixo Simples */}
            <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4">
                <div className="font-bold text-lg">M-Track Lado Fábrica</div>
                <div className="text-xs text-zinc-400">João (Corte)</div>
            </header>

            {/* Conteúdo Imersivo */}
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
