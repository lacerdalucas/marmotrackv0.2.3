-- 1. Adicionar o Número do Orçamento na tabela pedidos_v2
ALTER TABLE pedidos_v2 ADD COLUMN numero_orcamento VARCHAR(50);

-- Garantir que a coluna seja UNIQUE para evitar duplicidades
ALTER TABLE pedidos_v2 ADD CONSTRAINT pedidos_v2_numero_orcamento_key UNIQUE (numero_orcamento);

-- 2. Conserto do Gatilho PCP na tabela medicoes_v2
-- Atualizar a constraint de check do status para aceitar o status inicial 'PENDENTE'
ALTER TABLE medicoes_v2 DROP CONSTRAINT IF EXISTS medicoes_v2_status_check;

ALTER TABLE medicoes_v2 ADD CONSTRAINT medicoes_v2_status_check 
CHECK (status IN ('PENDENTE', 'Agendada', 'Em Andamento', 'Concluida', 'Frustrada', 'Cancelada'));
