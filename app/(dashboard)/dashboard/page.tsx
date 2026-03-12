import { getCapacidadeProducaoGeralAction } from '@/app/actions/capacidade';
import { ShieldAlert, Cpu, Activity, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

export const revalidate = 0; // Garantir dados frescos

export default async function DashboardPage() {
    // Buscar Inteligência de Fábrica
    const { success, estatisticas, ocupacaoGeralMedia, corGeral } = await getCapacidadeProducaoGeralAction();

    let BadgeCorGeral = 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    let labelGeral = 'Capacidade Disponível';

    if (corGeral === 'red') {
        BadgeCorGeral = 'bg-red-500/10 text-red-500 border-red-500/20 animate-pulse';
        labelGeral = 'Fábrica Sobrecarregada';
    } else if (corGeral === 'yellow') {
        BadgeCorGeral = 'bg-amber-500/10 text-amber-500 border-amber-500/20';
        labelGeral = 'Carga Alta';
    }

    return (
        <div className="max-w-7xl mx-auto w-full p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-zinc-800">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-100 tracking-tight flex items-center gap-3">
                        <Activity className="w-8 h-8 text-blue-500" />
                        Inteligência Estratégica
                    </h1>
                    <p className="text-sm text-zinc-400 mt-1">Visão geral do tráfego de produção e ocupação de fábrica.</p>
                </div>

                {success && (
                    <div className="mt-4 md:mt-0 flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl shadow-sm">
                        <div className="flex flex-col items-end mr-3">
                            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Farol de Capacidade</span>
                            <span className={`text-sm font-bold ${corGeral === 'red' ? 'text-red-400' : corGeral === 'yellow' ? 'text-amber-400' : 'text-emerald-400'}`}>
                                {labelGeral}
                            </span>
                        </div>
                        <div className={`flex items-center justify-center w-14 h-14 rounded-full border-4 shadow-inner ${corGeral === 'red' ? 'border-red-500 bg-red-500/20' : corGeral === 'yellow' ? 'border-amber-500 bg-amber-500/20' : 'border-emerald-500 bg-emerald-500/20'}`}>
                            <span className="text-lg font-black text-white">{ocupacaoGeralMedia}%</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Gráficos de Ocupação Setorial */}
            <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                
                <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2 mb-6">
                    <Cpu className="text-blue-500 w-5 h-5" /> 
                    Carga Horária vs Capacidade por Setor
                </h3>

                <div className="space-y-6">
                    {estatisticas?.map((setor) => {
                        const isOverloaded = setor.percentual >= 95;
                        const isWarning = setor.percentual >= 80 && setor.percentual < 95;
                        
                        // Barra não deve ultrapassar visualmente limites muito insanos, cap 100% para a barra principal
                        const viewPercent = Math.min(setor.percentual, 100);

                        return (
                            <div key={setor.setor} className="relative">
                                <div className="flex justify-between items-end mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-zinc-200">{setor.setor}</span>
                                        {isOverloaded && <ShieldAlert className="w-4 h-4 text-red-500" />}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-bold text-white tracking-tight">{setor.percentual}%</span>
                                        <span className="text-xs text-zinc-500 ml-2">({setor.horasOcupadas}h de {setor.horasDisponiveis}h previstas)</span>
                                    </div>
                                </div>
                                <div className="h-4 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800 relative">
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                            isOverloaded ? 'bg-gradient-to-r from-red-600 to-red-500' :
                                            isWarning ? 'bg-gradient-to-r from-amber-500 to-amber-400' :
                                            'bg-gradient-to-r from-emerald-500 to-emerald-400'
                                        }`}
                                        style={{ width: `${viewPercent}%` }}
                                    />
                                    {/* Linha da META recomendada 80% */}
                                    <div className="absolute top-0 bottom-0 border-l border-zinc-500 border-dashed z-10" style={{ left: '80%' }}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="mt-5 flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-emerald-500"></div> Livres</span>
                    <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-amber-500"></div> Atenção (&gt;80%)</span>
                    <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-red-500"></div> Crítico (&gt;95%)</span>
                    <span className="flex items-center gap-1.5 ml-auto border-l border-zinc-500 border-dashed pl-2">Meta Ideal (80%)</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Resumo Fake de O.S (Mantido pelo Layout Anterior) */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-zinc-400 flex items-center gap-2"><Clock className="w-4 h-4"/> Tempo Médio (WIP)</h3>
                        <p className="text-3xl font-bold mt-2 text-white">4 <span className="text-lg text-zinc-500 font-medium">dias</span></p>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                            + Rápido que o esperado
                        </span>
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-zinc-400 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Entregas (Mês)</h3>
                        <p className="text-3xl font-bold mt-2 text-white">12</p>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-700">
                            Meta: 20 peças
                        </span>
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-zinc-400 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Qualidade</h3>
                        <p className="text-3xl font-bold mt-2 text-white">98.5%</p>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                            Zero Retrabalhos ontem
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
