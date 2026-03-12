-- Migration: Fase 6 - Projetos, Fila de Produção e Segurança no Kanban

-- 1. Controle de Etapas e Alertas no Pai (pedidos_v2)
ALTER TABLE public.pedidos_v2 
ADD COLUMN IF NOT EXISTS etapa_fabrica TEXT DEFAULT 'projetos'; -- Fluxo: 'projetos' -> 'fila_producao' -> 'em_producao' -> 'concluido'
-- Obs: A etapa_fabrica só começa a fazer sentido quando a Medição desse pedido for "Concluída" 
-- O comercial usa "status_comercial" ('Orçamento', 'Aprovado'). 
-- Assim que Aprovado -> Fila de Medição -> Agenda -> Medição Concluída -> Cai em "Projetos" da Fabrica.

ALTER TABLE public.pedidos_v2
ADD COLUMN IF NOT EXISTS alertas_producao JSONB DEFAULT '[]'::jsonb;
-- Ex: [{"data": "...", "peca": "Bancada Cozinha", "motivo": "Medida errada", "usuario": "Zé"}]

-- 2. Rastreabilidade no Filho (pedidos_itens_v2)
ALTER TABLE public.pedidos_itens_v2
ADD COLUMN IF NOT EXISTS codigo_qr TEXT;
-- Ex: '3124-01_A' (Onde 3124=Orcamento, 01=Índice Ambiente, A=Índice Peça)
