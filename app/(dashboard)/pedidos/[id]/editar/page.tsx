import React from 'react';
import { createClient } from '@/lib/supabase/server';
import { notFound, redirect } from 'next/navigation';
import EditarPedidoForm from '@/components/pedidos_v2/EditarPedidoForm';
import { FileEdit } from 'lucide-react';

export default async function EditarPedidoPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
    // Resolver a Promise dos params compatível com Next.js 15
    const resolvedParams = await Promise.resolve(params);
    const pedidoId = resolvedParams.id;

    const supabase = await createClient();

    // Buscar os dados do pedido atual com JOIN
    const { data: pedido, error } = await supabase
        .from('pedidos_v2')
        .select(`
            *,
            cliente:clientes (nome, telefone, documento),
            obra:obras (endereco, responsavel_obra)
        `)
        .eq('id', pedidoId)
        .single();

    if (error || !pedido || pedido.status_comercial === 'Cancelado') {
        redirect('/pedidos');
    }

    const initialData = {
        numero_orcamento: pedido.numero_orcamento || '',
        cliente_nome: pedido.cliente?.nome || pedido.cliente_nome || '',
        telefone: pedido.cliente?.telefone || '',
        documento: pedido.cliente?.documento || '',
        endereco_obra: pedido.obra?.endereco || '',
        responsavel_obra: pedido.obra?.responsavel_obra || '',
        status_comercial: pedido.status_comercial || 'Orçamento',
        data_prometida: pedido.data_prometida ? new Date(pedido.data_prometida).toISOString().split('T')[0] : '',
        urgencia: pedido.urgencia || 'Normal',
        observacoes: pedido.observacoes || '',
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <EditarPedidoForm initialData={initialData} pedidoId={pedidoId} />
        </div>
    );
}
