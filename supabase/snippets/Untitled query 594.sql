-- Pula a criação da coluna pois ela já existe.
-- 1. Garante que a coluna seja UNIQUE para evitar duplicidades:
ALTER TABLE pedidos_v2 ADD CONSTRAINT pedidos_v2_numero_orcamento_key UNIQUE (numero_orcamento);

-- 2. Conserto do Gatilho PCP na tabela medicoes_v2:
ALTER TABLE medicoes_v2 DROP CONSTRAINT IF EXISTS medicoes_v2_status_check;

ALTER TABLE medicoes_v2 ADD CONSTRAINT medicoes_v2_status_check
CHECK (status IN ('PENDENTE', 'Agendada', 'Em Andamento', 'Concluida', 'Frustrada', 'Cancelada'));