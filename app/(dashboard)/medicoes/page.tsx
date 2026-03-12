import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { Ruler, CalendarClock } from 'lucide-react';
import FilaDeMedicaoClient from './FilaDeMedicaoClient';

export const revalidate = 0;

export default async function MedicoesFilaPage() {
    const supabase = await createClient();

    // Buscar medições PENDENTE com dados do pedido/cliente/obra
    const { data: medicoes } = await supabase
        .from('medicoes_v2')
        .select(`
            id,
            status,
            created_at,
            pedidos_v2 (
                id,
                numero_orcamento,
                urgencia,
                obras (endereco, cidade, responsavel_obra),
                clientes (nome)
            )
        `)
        .eq('status', 'PENDENTE')
        .order('created_at', { ascending: true });

    // Buscar técnicos disponíveis
    const { data: tecnicosData } = await supabase
        .from('users_profile')
        .select('id, full_name, roles!inner(name)')
        .eq('roles.name', 'medidor')
        .eq('active', true);

    // Ordenar por numero_orcamento
    const sorted = (medicoes || []).sort((a: any, b: any) => {
        const numA = parseInt(a.pedidos_v2?.numero_orcamento || '0', 10);
        const numB = parseInt(b.pedidos_v2?.numero_orcamento || '0', 10);
        return numA - numB;
    });

    const tecnicos = (tecnicosData || []).map((t: any) => ({ id: t.id, full_name: t.full_name }));

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-zinc-100 sm:text-3xl flex items-center gap-2">
                    <Ruler className="text-violet-500" /> Fila de Medição
                </h1>
                <p className="mt-1 text-sm text-zinc-400">
                    Obras aguardando vistoria técnica. Clique em &quot;Agendar&quot; para enviar para a Agenda.
                </p>
            </div>

            {sorted.length === 0 ? (
                <div className="flex-1 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center p-8 text-center">
                    <CalendarClock className="w-12 h-12 text-zinc-600 mb-4" />
                    <h3 className="text-lg font-medium text-zinc-300">Fila Vazia</h3>
                    <p className="text-sm text-zinc-500 mt-1 max-w-sm">
                        Não há medições pendentes. Pedidos aprovados aparecerão aqui automaticamente.
                    </p>
                </div>
            ) : (
                <FilaDeMedicaoClient medicoes={sorted} tecnicos={tecnicos} />
            )}
        </div>
    );
}
