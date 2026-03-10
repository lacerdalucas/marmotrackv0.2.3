import React from 'react';
import { createClient } from '@/lib/supabase/server';
import ModalWrapper from './ModalWrapper'; // We will create this small client wrapper
import { CalendarDays, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default async function AgendaPage() {
    const supabase = await createClient();

    // 1. Busca Medições Reais já Agendadas/Concluidas para a Tabela
    const { data: medicoesData, error } = await supabase
        .from('medicoes_v2')
        .select(`
            id,
            pedido_id,
            status,
            data_agendada,
            pendencias_obra,
            responsavel_id,
            pedidos_v2(cliente_nome, endereco_obra),
            users_profile:responsavel_id(full_name)
        `)
        .order('data_agendada', { ascending: true, nullsFirst: false });

    // 2. Busca todos os pedidos Aprovados para encontrar os Pendentes de Agendamento
    const { data: pedidosAprovados } = await supabase
        .from('pedidos_v2')
        .select(`
            id,
            cliente_nome,
            endereco_obra,
            clientes(nome),
            medicoes_v2(id, status)
        `)
        .eq('status_comercial', 'Aprovado');

    // Pega todos os técnicos (Para popular o select do modal)
    const { data: tecnicosData } = await supabase
        .from('users_profile')
        .select('id, full_name, roles!inner(name)')
        .eq('roles.name', 'medidor')
        .eq('active', true);

    const medicoes = medicoesData || [];
    const tecnicos = tecnicosData || [];

    // 3. Filtra pedidos Aprovados que possuem Medição Ativa (PENDENTE ou Agendada)
    const pendentes = (pedidosAprovados || [])
        .filter((p: any) => {
            if (!p.medicoes_v2 || p.medicoes_v2.length === 0) return false;
            
            // Aceita pedidos onde exista pelo menos uma medição 'PENDENTE' ou 'Agendada'
            const arrayMedicoes = Array.isArray(p.medicoes_v2) ? p.medicoes_v2 : [p.medicoes_v2];
            return arrayMedicoes.some((m: any) => m.status === 'PENDENTE' || m.status === 'Agendada');
        })
        .map((p: any) => {
            const clienteReal = p.clientes?.nome || p.cliente_nome;
            // Pegamos a ID da medição ativa para mandar ao Modal
            const arrayMedicoes = Array.isArray(p.medicoes_v2) ? p.medicoes_v2 : [p.medicoes_v2];
            const medicaoAtiva = arrayMedicoes.find((m: any) => m.status === 'PENDENTE' || m.status === 'Agendada');

            // Passamos tambem o status para indicar no select options futuramente se desejar
            return {
                id: medicaoAtiva?.id || p.id, 
                pedido_id: p.id,
                cliente_nome: clienteReal || 'Sem Nome',
                endereco_obra: p.endereco_obra || '',
                statusAtual: medicaoAtiva?.status
            };
        });

    // Filtra as agendadas ou finalizadas para exibir na tabela principal
    const agendaList = medicoes;

    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-zinc-800 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-100 flex items-center gap-3">
                        <CalendarDays className="text-blue-500 w-8 h-8" />
                        Agenda de Medições
                    </h1>
                    <p className="text-zinc-400 mt-2">Agende visitas do setor técnico para liberar o projeto para produção.</p>
                </div>

                {/* Client Component que controla o estado do Modal passando os dados do servidor */}
                <ModalWrapper medicoesPendentes={pendentes} tecnicos={tecnicos} />
            </div>

            {/* Grid de Vistas Agendadas */}
            <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                <table className="min-w-full divide-y divide-zinc-800">
                    <thead className="bg-zinc-900 border-b border-zinc-800">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Obra / Cliente</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Data & Horário</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Técnico/Responsável</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-zinc-400 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50 bg-zinc-950/30">
                        {agendaList.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-sm text-zinc-500">
                                    Nenhuma medição agendada. Clique no botão acima para começar.
                                </td>
                            </tr>
                        ) : agendaList.map((visit: any) => {
                            const pedido = Array.isArray(visit.pedidos_v2) ? visit.pedidos_v2[0] : visit.pedidos_v2;
                            const profile = Array.isArray(visit.users_profile) ? visit.users_profile[0] : visit.users_profile;

                            return (
                                <tr key={visit.id} className="hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-semibold text-zinc-200">{pedido?.cliente_nome || 'Desconhecido'}</div>
                                        <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> {pedido?.endereco_obra || 'Endereço não informado'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300 font-medium">
                                        {visit.data_agendada ? focusDate(visit.data_agendada) : 'A Definir'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                                                {profile?.full_name?.charAt(0) || '?'}
                                            </div>
                                            {profile?.full_name || 'Não atribuído'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusBadge status={visit.status} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-blue-500 hover:text-blue-400 transition-colors mr-4 p-2 hover:bg-blue-500/10 rounded-md">Reagendar</button>
                                        {(visit.status === 'Concluida' || visit.status === 'Frustrada') && (
                                            <button className="text-zinc-400 hover:text-zinc-200 p-2 hover:bg-zinc-800 rounded-md transition-colors" title={visit.pendencias_obra}>Relato</button>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// Helpers

function focusDate(isoString: string) {
    try {
        return format(new Date(isoString), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
    } catch {
        return 'Data Inválida';
    }
}

function StatusBadge({ status }: { status: string }) {
    switch (status) {
        case 'Agendada':
            return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Agendada</span>;
        case 'Concluida':
            return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Concluída / Liberada</span>;
        case 'Frustrada':
            return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">Frustrada / Pendência</span>;
        case 'Em Andamento':
            return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">Check-in Local</span>;
        default:
            return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">{status}</span>;
    }
}
