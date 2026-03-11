import { z } from 'zod';

export const createPedidoComercialSchema = z.object({
  cliente_nome: z.string().min(3, 'O nome do cliente é obrigatório e deve ter no mínimo 3 caracteres.'),
  numero_orcamento: z.string().min(1, "O número do orçamento é obrigatório."),
  telefone: z.string().optional().or(z.literal('')),
  documento: z.string().optional().or(z.literal('')), // CPF / CNPJ
  
  endereco_obra: z.string().optional().or(z.literal('')),
  cidade_obra: z.string().optional().or(z.literal('')),
  responsavel_obra: z.string().optional().or(z.literal('')),
  
  // Novos campos opcionais e não-bloqueantes
  marcenaria_responsavel: z.string().optional().or(z.literal('')),
  contato_arquitetura: z.string().optional().or(z.literal('')),
  
  status_comercial: z.enum(['Orçamento', 'Aguardando Aprovação', 'Aprovado', 'Em Produção', 'Concluído', 'Cancelado']),
  data_prometida: z.string().optional().or(z.literal('')), // Format YYYY-MM-DD
  urgencia: z.enum(['Baixa', 'Normal', 'Alta']),
  observacoes: z.string().optional().or(z.literal('')),
});

export type CreatePedidoComercialInput = z.infer<typeof createPedidoComercialSchema>;
