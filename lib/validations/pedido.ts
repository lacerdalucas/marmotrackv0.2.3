import { z } from 'zod';

export const createPedidoSchema = z.object({
  cliente_nome: z.string().min(1, 'Nome do cliente é obrigatório'),
  prazo_entrega: z.coerce.date().optional(),
  status: z.string().optional().default('Pendente'),
  arquivo_pdf_url: z.string().url().optional().nullable(),
});

export type CreatePedidoInput = z.infer<typeof createPedidoSchema>;

export interface Pedido {
  id: string;
  cliente_nome: string;
  prazo_entrega: string | Date | null;
  status: string;
  texto_extraido: string | null;
  created_at: string | Date;
}
