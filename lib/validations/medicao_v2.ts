import { z } from 'zod';

export const aprovarPedidoSchema = z.object({
  pedido_id: z.string().uuid(),
  precisa_medicao: z.boolean().default(true),
  observacoes: z.string().optional()
});

export const agendarMedicaoSchema = z.object({
  pedido_id: z.string().uuid(),
  responsavel_id: z.string().uuid().optional(), // Id do Medidor
  data_agendada: z.string().optional(), // ISO Date
  observacoes: z.string().optional()
});

export const concluirMedicaoSchema = z.object({
  medicao_id: z.string().uuid(),
  pendencias_obra: z.string().optional(),
  apto_para_projeto: z.boolean(),
  status: z.enum(['Concluida', 'Frustrada'])
});

export type AprovarPedidoInput = z.infer<typeof aprovarPedidoSchema>;
export type AgendarMedicaoInput = z.infer<typeof agendarMedicaoSchema>;
export type ConcluirMedicaoInput = z.infer<typeof concluirMedicaoSchema>;
