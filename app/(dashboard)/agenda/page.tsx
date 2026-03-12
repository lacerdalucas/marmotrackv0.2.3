import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { CalendarDays } from 'lucide-react';
import AgendaClient from './AgendaClient';

export const revalidate = 0;

export default async function AgendaPage() {
    const supabase = await createClient();

    // Buscar medições agendadas/concluídas/canceladas
    // Nota: NÃO incluir motivo_cancelamento/cancelado_em no select para evitar
    // falha silenciosa caso o SQL migration ainda não tenha sido executado
    const { data: medicoesData, error } = await supabase
        .from('medicoes_v2')
        .select(`
            id,
            pedido_id,
            status,
            data_agendada,
            pendencias_obra,
            responsavel_id,
            pedidos_v2 (
                id,
                numero_orcamento,
                alertas_producao,
                obras (endereco, cidade, responsavel_obra),
                clientes (nome)
            )
        `)
        .in('status', ['Agendada', 'Concluida', 'Frustrada', 'Cancelada', 'Em Andamento'])
        .order('data_agendada', { ascending: true, nullsFirst: false });

    if (error) {
        console.error('[Agenda] Erro ao buscar medições:', error);
    }

    // Buscar técnicos
    const { data: tecnicosData } = await supabase
        .from('users_profile')
        .select('id, full_name, roles!inner(name)')
        .eq('roles.name', 'medidor')
        .eq('active', true);

    const tecnicos = (tecnicosData || []).map((t: any) => ({ id: t.id, full_name: t.full_name }));

    // Map the responsible names manually in-memory
    const medicoes = (medicoesData || []).map(m => {
        const responsavelProfile = m.responsavel_id ? tecnicos.find(t => t.id === m.responsavel_id) : null;
        return {
            ...m,
            users_profile: [{ full_name: responsavelProfile ? responsavelProfile.full_name : '' }]
        };
    });

    console.log(`[Agenda] ${medicoes.length} medições carregadas (filtro: Agendada/Concluida/Cancelada/Em Andamento)`);

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="mb-8 pb-4 border-b border-zinc-800">
                <h1 className="text-3xl font-bold text-zinc-100 flex items-center gap-3">
                    <CalendarDays className="text-blue-500 w-8 h-8" />
                    Agenda de Medições
                </h1>
                <p className="text-zinc-400 mt-2">Cronograma de visitas técnicas. Filtre por data ou status.</p>
            </div>

            <AgendaClient medicoes={medicoes} tecnicos={tecnicos} />
        </div>
    );
}
