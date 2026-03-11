'use server';

/**
 * LEGACY STUB - Ação v1 depreciada.
 * Mantida apenas para evitar erro de build do componente legado NovoPedidoForm.tsx.
 * Use criarPedidoComercial de pedidos_v2.ts para novos pedidos.
 */
export async function createPedidoAction(_formData: FormData) {
  return { 
    success: false, 
    message: 'Esta ação foi descontinuada. Use o formulário v2 em /pedidos/novo.' 
  };
}
