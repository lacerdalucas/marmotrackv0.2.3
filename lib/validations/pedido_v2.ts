import { z } from 'zod';

export const createPedidoComercialSchema = z.object({
  cliente_nome: z.string().min(3, 'O nome do cliente é obrigatório e deve ter no mínimo 3 caracteres.'),
  numero_orcamento: z.string().min(1, "O número do orçamento é obrigatório."),
  telefone: z.string().optional(),
  documento: z.string().optional(), // CPF / CNPJ
  
  endereco_obra: z.string().optional(),
  responsavel_obra: z.string().optional(),
  
  status_comercial: z.enum(['Orçamento', 'Aguardando Aprovação', 'Aprovado', 'Em Produção', 'Concluído', 'Cancelado']),
  data_prometida: z.string().optional(), // Format YYYY-MM-DD
  urgencia: z.enum(['Baixa', 'Normal', 'Alta']),
  observacoes: z.string().optional(),
});

export type CreatePedidoComercialInput = z.infer<typeof createPedidoComercialSchema>;
