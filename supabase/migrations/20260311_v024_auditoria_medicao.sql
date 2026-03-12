-- Migration: Fase 7 - Auditoria de Medição e Divergências In Loco

-- 1. Controle de Alerta no Pedido Principal
ALTER TABLE public.pedidos_v2 
ADD COLUMN IF NOT EXISTS alerta_medicao_divergente BOOLEAN DEFAULT false;
-- Flag vitalícia: Se true, significa que o técnico adicionou ou removeu peças na obra
-- em desacordo com o fechado pelo Comercial. Disparará badges visuais no sistema inteiro.

-- 2. Rastreamento por Item (Qual peça foi inventada na obra?)
ALTER TABLE public.pedidos_itens_v2
ADD COLUMN IF NOT EXISTS item_extra_medicao BOOLEAN DEFAULT false;
-- Flag indicativa: Marcada como `true` se a peça foi adicionada via botão 
-- "Adicionar Extra" na tela de Execução de Medição pelo tablet do Medidor.
