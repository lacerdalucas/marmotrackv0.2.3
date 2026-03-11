-- ═══════════════════════════════════════════════════════════════
-- MarmoTrack v0.2.0 - Migration: Checklist de Medição + Novos Campos
-- ═══════════════════════════════════════════════════════════════
-- Data: 2026-03-11
-- Descrição: 
--   1. Adiciona coluna checklist_tecnico (JSONB) na tabela medicoes_v2
--   2. Adiciona colunas marcenaria_responsavel e contato_arquitetura na tabela pedidos_v2
--   3. Adiciona coluna cidade na tabela obras
-- ═══════════════════════════════════════════════════════════════

-- 1. Checklist Técnico de Medição
-- Formato esperado do JSONB:
-- {
--   "itens_verificados": [...],
--   "observacoes_tecnicas": "...",
--   "fotos_referencia": [...],
--   "conferido_por": "uuid",
--   "data_conferencia": "ISO8601"
-- }
ALTER TABLE medicoes_v2 
ADD COLUMN IF NOT EXISTS checklist_tecnico JSONB DEFAULT NULL;

-- Comentário para documentação do schema
COMMENT ON COLUMN medicoes_v2.checklist_tecnico IS 
  'Checklist técnico de medição em formato JSONB. Contém itens verificados, observações técnicas e metadados de conferência.';

-- 2. Novos campos do Pedido Comercial
ALTER TABLE pedidos_v2 
ADD COLUMN IF NOT EXISTS marcenaria_responsavel TEXT DEFAULT NULL;

ALTER TABLE pedidos_v2 
ADD COLUMN IF NOT EXISTS contato_arquitetura TEXT DEFAULT NULL;

COMMENT ON COLUMN pedidos_v2.marcenaria_responsavel IS 
  'Nome da marcenaria responsável pelo projeto.';

COMMENT ON COLUMN pedidos_v2.contato_arquitetura IS 
  'Contato do escritório de arquitetura responsável.';

-- 3. Campo cidade na tabela de Obras
ALTER TABLE obras 
ADD COLUMN IF NOT EXISTS cidade TEXT DEFAULT NULL;

COMMENT ON COLUMN obras.cidade IS 
  'Cidade e UF da obra (extraída do PDF do ERP).';
