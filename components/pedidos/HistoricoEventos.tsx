import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { Clock, Info, User, CheckCircle2, FileText, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface HistoricoEventosProps {
    pedidoId: string;
}

function getIconForEvent(tipo: string) {
    if (tipo.includes('Importação') || tipo.includes('PDF')) return <FileText className="w-5 h-5 text-blue-400" />;
    if (tipo.includes('Aprovação') || tipo.includes('Conclusão')) return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    if (tipo.includes('Frustrada') || tipo.includes('Bloqueado') || tipo.includes('Pausa') || tipo.includes('Defeito')) return <AlertTriangle className="w-5 h-5 text-red-400" />;
    return <Info className="w-5 h-5 text-violet-400" />;
}

export default async function HistoricoEventos({ pedidoId }: HistoricoEventosProps) {
    const supabase = await createClient();

    // Buscar Eventos
    const { data: eventosRaw, error } = await supabase
        .from('eventos_operacionais')
        .select('*')
        .eq('pedido_id', pedidoId)
        .order('created_at', { ascending: false });

    if (error || !eventosRaw || eventosRaw.length === 0) {
        return (
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center shadow-lg">
                <Clock className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                <h3 className="text-zinc-300 font-medium">Nenhum evento registrado</h3>
                <p className="text-zinc-500 text-sm mt-1">Este pedido ainda não possui rastreabilidade gravada.</p>
            </div>
        );
    }

    // Buscar IDs únicos de usuários
    const userIds = Array.from(new Set(eventosRaw.map((e: any) => e.usuario_id)));

    // Buscar nomes dos usuários na users_profile
    let usersMap: Record<string, string> = {};
    if (userIds.length > 0) {
        const { data: perfis } = await supabase
            .from('users_profile')
            .select('id, full_name')
            .in('id', userIds);

        if (perfis) {
            perfis.forEach(p => {
                usersMap[p.id] = p.full_name;
            });
        }
    }

    return (
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                <Clock className="w-5 h-5 text-violet-500" />
                <h2 className="text-lg font-bold text-zinc-100 uppercase tracking-widest text-sm">Event Sourcing (Custódia Original)</h2>
            </div>

            <div className="relative border-l border-zinc-800 ml-3 space-y-8 pb-4">
                {eventosRaw.map((evento: any, index: number) => {
                    const usuarioNome = usersMap[evento.usuario_id] || 'Usuário Desconhecido';
                    const isLatest = index === 0;

                    return (
                        <div key={evento.id} className="relative pl-6">
                            <span
                                className={cn(
                                    "absolute -left-[18px] top-1 rounded-full border-[3px] border-zinc-900 w-9 h-9 flex items-center justify-center bg-zinc-800",
                                    isLatest ? "ring-2 ring-violet-500/30 ring-offset-2 ring-offset-zinc-900" : ""
                                )}
                            >
                                {getIconForEvent(evento.tipo_evento)}
                            </span>

                            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 shadow-sm hover:border-zinc-700 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                                    <h4 className="text-zinc-100 font-bold text-base">{evento.tipo_evento}</h4>
                                    <span className="text-xs text-zinc-500 font-medium tabular-nums whitespace-nowrap bg-zinc-900 px-2 py-1 rounded-md border border-zinc-800">
                                        {format(new Date(evento.created_at), "dd 'de' MMM, HH:mm", { locale: ptBR })}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-3 text-xs text-zinc-400 font-medium">
                                    <div className="flex items-center gap-1.5 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                                        <User className="w-3 h-3 text-zinc-500" />
                                        <span>{usuarioNome}</span>
                                    </div>
                                    <span className="text-zinc-600">•</span>
                                    <span className="uppercase tracking-wider text-[10px] text-zinc-500">Etapa: {evento.etapa_atual}</span>
                                </div>

                                {evento.observacoes && (
                                    <p className="text-sm text-zinc-300 leading-relaxed border-l-2 border-zinc-700 pl-3 italic">
                                        {evento.observacoes}
                                    </p>
                                )}

                                {evento.pendencia_motivo && (
                                    <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                        <p className="text-xs font-semibold text-red-400 mb-1 uppercase tracking-wider">Motivo da Pendência</p>
                                        <p className="text-sm text-red-200">{evento.pendencia_motivo}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
