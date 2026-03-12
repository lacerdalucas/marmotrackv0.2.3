import React from 'react'
import Link from 'next/link'
import { LayoutDashboard, FileUp, KanbanSquare, LogOut, Ruler, PenTool, FilePlus, ClipboardList, CalendarDays, AlertTriangle } from 'lucide-react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
            {/* Sidebar Desktop */}
            <aside className="hidden w-64 md:flex md:flex-col bg-[#0a0a0a] border-r border-zinc-800 p-4">
                <div className="text-xl font-bold mb-8 px-2 tracking-tight">MarmoTrack</div>

                <nav className="flex-1 space-y-6 mt-2 overflow-y-auto">
                    {/* Principal */}
                    <div className="space-y-1">
                        <Link href="/dashboard" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                        </Link>
                        <Link href="/kanban" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                            <KanbanSquare className="w-4 h-4" />
                            Kanban Produção
                        </Link>
                    </div>

                    {/* Comercial / Entradas */}
                    <div>
                        <div className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Comercial / Entradas</div>
                        <div className="space-y-1">
                            <Link href="/pedidos/novo" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                                <FilePlus className="w-4 h-4" />
                                Novo Pedido
                            </Link>
                            <Link href="/pedidos" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                                <ClipboardList className="w-4 h-4" />
                                Lista de Pedidos
                            </Link>
                        </div>
                    </div>

                    {/* Projetos & PCP */}
                    <div>
                        <div className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Projetos & PCP</div>
                        <div className="space-y-1">
                            <Link href="/medicoes" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                                <Ruler className="w-4 h-4" />
                                Fila de Medição
                            </Link>
                            <Link href="/agenda" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                                <CalendarDays className="w-4 h-4" />
                                Agenda de Medições
                            </Link>
                            <Link href="/projetos" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                                <PenTool className="w-4 h-4" />
                                Setor de Projetos
                            </Link>
                        </div>
                    </div>

                    {/* Manutenção / Qualidade */}
                    <div>
                        <div className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Manutenção / Qualidade</div>
                        <div className="space-y-1">
                            <Link href="/issues" className="flex items-center gap-3 py-2.5 px-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all font-medium text-sm">
                                <AlertTriangle className="w-4 h-4" />
                                Hospital de Peças
                            </Link>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header Minimalista */}
                <header className="h-16 flex items-center justify-end px-8 border-b border-zinc-800 bg-black/50 backdrop-blur-sm">
                    <button className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-md py-1.5 px-2.5 hover:bg-zinc-900">
                        <LogOut className="w-4 h-4" />
                        Sair
                    </button>
                </header>

                {/* Main */}
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
