import React from 'react';
import { redirect } from 'next/navigation';
import EditarPedidoForm from '@/components/pedidos_v2/EditarPedidoForm';
import { getPedidoCompletoById } from '@/app/actions/pedidos_v2';

export default async function EditarPedidoPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
    const resolvedParams = await Promise.resolve(params);
    const pedidoId = resolvedParams.id;

    const result = await getPedidoCompletoById(pedidoId);

    if (!result.success || !result.data) {
        redirect('/pedidos');
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <EditarPedidoForm
                initialData={result.data}
                initialItems={result.items || []}
                pedidoId={pedidoId}
            />
        </div>
    );
}
