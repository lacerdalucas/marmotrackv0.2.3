-- ═══════════════════════════════════════════════════════════════
-- MarmoTrack v0.2.0 - Migration: Tabela de Itens do Pedido
-- ═══════════════════════════════════════════════════════════════
-- Data: 2026-03-11
-- Descrição: Armazena os itens (ambientes/peças) de cada pedido.
-- ═══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS pedidos_itens_v2 (
    id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    pedido_id   UUID NOT NULL REFERENCES pedidos_v2(id) ON DELETE CASCADE,
    ambiente    TEXT NOT NULL DEFAULT '',
    material    TEXT NOT NULL DEFAULT '',
    partes_medidas JSONB DEFAULT '[]'::jsonb,
    acabamentos    JSONB DEFAULT '[]'::jsonb,
    servicos       JSONB DEFAULT '[]'::jsonb,
    created_at  TIMESTAMPTZ DEFAULT now()
);

-- Índice para FK lookups
CREATE INDEX IF NOT EXISTS idx_pedidos_itens_v2_pedido_id 
    ON pedidos_itens_v2(pedido_id);

COMMENT ON TABLE pedidos_itens_v2 IS 
    'Itens (ambientes + peças) vinculados a um pedido comercial. Cada registro = 1 ambiente com 1 material.';
COMMENT ON COLUMN pedidos_itens_v2.partes_medidas IS 
    'Array JSONB: [{peca, comprimento, largura, quantidade}]';
COMMENT ON COLUMN pedidos_itens_v2.acabamentos IS 
    'Array JSONB: [{descricao, unidade, quantidade}]';
COMMENT ON COLUMN pedidos_itens_v2.servicos IS 
    'Array JSONB: [{descricao, unidade, quantidade}]';

-- RLS: habilitar e permitir acesso autenticado
ALTER TABLE pedidos_itens_v2 ENABLE ROW LEVEL SECURITY;

CREATE POLICY "pedidos_itens_v2_all_authenticated" ON pedidos_itens_v2
    FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');
