-- Adiciona controle de status de produção por peça individual
-- Permite que o Kanban rastreie o progresso de cada item do pedido no chão de fábrica

ALTER TABLE public.pedidos_itens_v2 
ADD COLUMN IF NOT EXISTS status_producao TEXT DEFAULT 'fila_corte' 
CHECK (status_producao IN ('fila_corte', 'corte', 'acabamento', 'polimento', 'expedicao', 'concluido'));

COMMENT ON COLUMN public.pedidos_itens_v2.status_producao IS 'Status da peça individual no fluxo do Kanban (MES).';
