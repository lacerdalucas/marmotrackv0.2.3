-- ═══════════════════════════════════════════════════════════════
-- MarmoTrack v0.2.1 - Migration: Colunas de Auditoria de Cancelamento
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE medicoes_v2  
    ADD COLUMN IF NOT EXISTS motivo_cancelamento TEXT,
    ADD COLUMN IF NOT EXISTS cancelado_por_id UUID REFERENCES auth.users(id),
    ADD COLUMN IF NOT EXISTS cancelado_em TIMESTAMPTZ;

COMMENT ON COLUMN medicoes_v2.motivo_cancelamento IS 'Motivo informado pelo operador ao cancelar a medição';
COMMENT ON COLUMN medicoes_v2.cancelado_por_id IS 'UUID do usuário que executou o cancelamento';
COMMENT ON COLUMN medicoes_v2.cancelado_em IS 'Timestamp do momento do cancelamento';