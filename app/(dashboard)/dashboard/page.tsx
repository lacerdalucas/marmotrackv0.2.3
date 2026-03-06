// app/(dashboard)/dashboard/page.tsx
export default function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-2xl font-semibold text-white tracking-tight mb-8">Painel Geral</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* O.S Abertas */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-zinc-400">O.S Abertas</h3>
                        <p className="text-3xl font-bold mt-2 text-white">12</p>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                            +12% este mês
                        </span>
                    </div>
                </div>

                {/* Peças na Fábrica */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-zinc-400">Peças na Fábrica</h3>
                        <p className="text-3xl font-bold mt-2 text-white">143</p>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="inline-flex items-center rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-500/20">
                            -5% este mês
                        </span>
                    </div>
                </div>

                {/* Retrabalhos */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-zinc-400">Retrabalhos</h3>
                        <p className="text-3xl font-bold mt-2 text-white">2</p>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                            -2 desde ontem
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
