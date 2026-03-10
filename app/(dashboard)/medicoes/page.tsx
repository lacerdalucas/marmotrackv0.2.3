import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { MapPin, CalendarClock, Ruler } from 'lucide-react';
import { DeleteMedicaoButton } from './DeleteMedicaoButton';
import { FiltroMedicoes } from './FiltroMedicoes';

export const revalidate = 0; // Evitar lock de cache agressivo na fila de controle

export default async function MedicoesFilaPage(props: { searchParams?: Promise<{ status?: string }> | { status?: string } }) {
    const supabase = await createClient();

    // Compatibilidade com Next 15 searchParams síncrono vs assíncrono
    const rawParams = props.searchParams ? await Promise.resolve(props.searchParams) : {};
    const statusQuery = rawParams.status || 'ativas';

    // Construir a query base
    let query = supabase
        .from('medicoes_v2')
        .select(`
      id,
      status,
      data_agendada,
      apto_para_projeto,
      created_at,
      pedidos_v2 (
        id,
        numero_orcamento,
        urgencia,
        obras (endereco, responsavel_obra),
        clientes (nome)
      )
    `);

    // Aplica os filtros baseados na URL
    if (statusQuery === 'ativas') {
        query = query.in('status', ['PENDENTE', 'Agendada', 'Em Andamento']);
    } else if (statusQuery === 'concluidas') {
        query = query.in('status', ['Concluida', 'Frustrada']);
    } else if (statusQuery === 'canceladas') {
        query = query.eq('status', 'Cancelada');
    }

    // Executa e ordena
    const { data: medicoes, error } = await query.order('created_at', { ascending: false });

    if (error) {
        console.error("Erro ao buscar medições", error);
    }

    const { data: { user } } = await supabase.auth.getUser();
    const isAdmin = user?.app_metadata?.role_name === 'admin' ||
        user?.email === 'lucas@nexusxp.com.br' ||
        user?.email === 'admin@marmo.com';

    const list = medicoes || [];

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl flex items-center gap-2">
                        <Ruler className="text-violet-500" /> Fila de Medição
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Acompanhe o painel de obras aguardando vistoria da equipe de medição técnica.
                    </p>
                </div>
                <div className="flex shrink-0">
                    <FiltroMedicoes />
                </div>
            </div>

            {list.length === 0 ? (
                <div className="flex-1 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center p-8 text-center">
                    <CalendarClock className="w-12 h-12 text-zinc-600 mb-4" />
                    <h3 className="text-lg font-medium text-zinc-300">Nenhuma Medição Agendada</h3>
                    <p className="text-sm text-zinc-500 mt-1 max-w-sm">
                        Os pedidos recém aprovados pela aba comercial que exigem aferição em obra aparecerão aqui.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto custom-scrollbar pb-6">
                    {list.map((medicao: any) => (
                        <div key={medicao.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors shadow-sm cursor-default">
                            <div className="flex justify-between items-start mb-3">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${medicao.pedidos_v2?.urgencia === 'Alta' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                                    }`}>
                                    Prioridade {medicao.pedidos_v2?.urgencia}
                                </span>

                                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${medicao.status === 'Agendada' ? 'bg-blue-500/10 text-blue-400' :
                                        medicao.status === 'Concluida' ? 'bg-emerald-500/10 text-emerald-400' :
                                            medicao.status === 'Em Andamento' ? 'bg-amber-500/10 text-amber-400' :
                                                'bg-red-500/10 text-red-400'
                                    }`}>
                                    {medicao.status}
                                </span>
                            </div>

                            <div className="flex justify-between items-start">
                                <h3 className="text-base font-semibold text-zinc-100 truncate">
                                    {medicao.pedidos_v2?.clientes?.nome || 'Cliente não Cadastrado'}
                                </h3>
                                
                                <DeleteMedicaoButton 
                                    medicaoId={medicao.id} 
                                    pedidoIdentificador={medicao.pedidos_v2?.numero_orcamento || medicao.pedidos_v2?.id?.substring(0,8).toUpperCase() || 'Desconhecido'} 
                                    isAdmin={isAdmin}
                                />
                            </div>

                            <div className="mt-4 flex flex-col gap-2">
                                <div className="flex items-start gap-2 text-sm text-zinc-400">
                                    <MapPin className="w-4 h-4 shrink-0 text-zinc-500 mt-0.5" />
                                    <span className="line-clamp-2">
                                        {medicao.pedidos_v2?.obras?.endereco || 'Endereço não informado'}
                                        {medicao.pedidos_v2?.obras?.responsavel_obra && ` (${medicao.pedidos_v2?.obras?.responsavel_obra})`}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-800 border-dashed flex items-center justify-between">
                                <div className="text-xs text-zinc-500">
                                    Criada em: {new Date(medicao.created_at).toLocaleDateString('pt-BR')}
                                </div>
                                {medicao.status !== 'Concluida' && medicao.status !== 'Cancelada' && (
                                    <button className="text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors py-1 px-3 bg-violet-500/10 hover:bg-violet-500/20 rounded-md">
                                        Iniciar / Check-in
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
