import React from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { PedidosTable } from '@/components/pedidos/PedidosTable';
import { FilePlus } from 'lucide-react';

export const revalidate = 0; // Para MVP ágil sem cache neste momento

export default async function PedidosPage({ params }: { params: Promise<any> | any }) {
    // Para resolver warnings de params caso seja estendido futuramente, manter a convensão
    const supabase = await createClient();

    // Buscar os últimos 50 pedidos da tabela real
    // Fazendo join com clientes para pegar o nome
    const { data: pedidos, error } = await supabase
        .from('pedidos_v2')
        .select(`
            *,
            clientes(nome),
            medicoes_v2(id, status)
        `)
        .neq('status_comercial', 'Cancelado')
        .order('created_at', { ascending: false })
        .limit(50);

    const { data: { user } } = await supabase.auth.getUser();

    // Verificando permissão de Administrador (baseado na metadata injetada no token via auth)
    const isAdmin = user?.app_metadata?.role_name === 'admin' ||
        user?.email === 'lucas@nexusxp.com.br' ||
        user?.email === 'admin@marmo.com'; // Fallback de emergência

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold leading-7 text-zinc-100 sm:truncate sm:text-3xl sm:tracking-tight">
                        Pedidos Recentes
                    </h1>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">
                        Lista de pedidos cadastrados com projetos para entrada no PCP.
                    </p>
                </div>
                <div className="flex shrink-0">
                    <Link
                        href="/pedidos/novo"
                        className="inline-flex items-center gap-x-2 rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-colors"
                    >
                        <FilePlus className="-ml-0.5 h-4 w-4" aria-hidden="true" />
                        Novo Pedido
                    </Link>
                </div>
            </div>

            {error ? (
                <div className="rounded-md border border-red-500/20 bg-red-500/10 p-4">
                    <div className="flex">
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-400">Erro ao carregar dados</h3>
                            <div className="mt-2 text-sm text-red-300">
                                <p>Ocorreu um erro de conexão com o banco de dados: {error.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <PedidosTable pedidos={pedidos || []} isAdmin={isAdmin} />
            )}
        </div>
    );
}
