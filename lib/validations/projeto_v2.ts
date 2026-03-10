import { z } from 'zod';

export const assumirProjetoSchema = z.object({
  pedido_id: z.string().uuid(),
  projetista_id: z.string().uuid().optional(),
});

export const concluirProjetoSchema = z.object({
  projeto_id: z.string().uuid(),
  arquivo_url: z.string().optional(), // Fake url ou reference for now
  observacoes: z.string().optional()
});

export const aprovarProjetoSchema = z.object({
  projeto_id: z.string().uuid(),
  status: z.enum(['Aprovado', 'Reprovado']),
  observacoes: z.string().optional()
});

export type AssumirProjetoInput = z.infer<typeof assumirProjetoSchema>;
export type ConcluirProjetoInput = z.infer<typeof concluirProjetoSchema>;
export type AprovarProjetoInput = z.infer<typeof aprovarProjetoSchema>;
