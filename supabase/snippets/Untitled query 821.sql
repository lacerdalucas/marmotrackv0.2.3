-- 1. Definindo a Capacidade Máxima da Fábrica (Horas por Semana)
INSERT INTO setup_capacidade_setor_v2 (id, setor, capacidade_horas_semana) VALUES
(gen_random_uuid(), 'Corte', 160),      -- Ex: 2 máquinas x 80h/sem
(gen_random_uuid(), 'Acabamento', 240), -- Ex: 3 bancadas x 80h/sem
(gen_random_uuid(), 'Polimento', 80);   -- Ex: 1 máquina x 80h/sem

-- 2. Definindo o Tempo Padrão dos Serviços (Horas)
INSERT INTO setup_tempos_padrao_v2 (id, tipo_servico, tempo_estimado_horas) VALUES
(gen_random_uuid(), 'CORTE_M2', 0.5),          -- Leva meia hora para cortar 1m²
(gen_random_uuid(), 'ACABAMENTO_ML', 0.3),     -- Leva 18 minutos (0.3h) para 1m linear
(gen_random_uuid(), 'POLIMENTO_ML', 0.2),      -- Leva 12 minutos (0.2h) para 1m linear
(gen_random_uuid(), 'FURO_CUBA_UN', 1.0),      -- Leva 1 hora para fazer furo de cuba
(gen_random_uuid(), 'REBAIXO_ITALIANO_M2', 2.0); -- Leva 2 horas para fazer 1m² de rebaixo