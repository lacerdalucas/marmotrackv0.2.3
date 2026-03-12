-- Migration: Inteligência Estratégica de Produção (Capacidade e Tempos)

-- 1. Tabela de Capacidade Total por Setor
CREATE TABLE IF NOT EXISTS public.setup_capacidade_setor_v2 (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    setor TEXT NOT NULL UNIQUE, -- 'Corte', 'Acabamento', 'Polimento'
    capacidade_horas_semana NUMERIC NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS
ALTER TABLE public.setup_capacidade_setor_v2 ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura pública autenticada para capacidade" ON public.setup_capacidade_setor_v2 FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins podem gerenciar capacidade" ON public.setup_capacidade_setor_v2 FOR ALL TO authenticated USING (true); -- Idealmente role admin

-- Inserir dados iniciais de exemplo (Capacidade em Horas por Semana)
INSERT INTO public.setup_capacidade_setor_v2 (setor, capacidade_horas_semana)
VALUES 
    ('Corte', 120),       -- Ex: 3 máquinas rodando 40h/semana
    ('Acabamento', 160),  -- Ex: 4 bancadas 40h/semana
    ('Polimento', 80)     -- Ex: 2 lixadeiras/acabadores 40h/semana
ON CONFLICT (setor) DO NOTHING;

-- 2. Tabela de Tempos Padrão (Fichas Técnicas Parametrizadas)
CREATE TABLE IF NOT EXISTS public.setup_tempos_padrao_v2 (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tipo_servico TEXT NOT NULL, -- Ex: 'Corte Reto (m)', 'Biselado (m)', 'Furo Cuba (un)'
    tempo_estimado_horas NUMERIC NOT NULL,
    setor_responsavel TEXT references setup_capacidade_setor_v2(setor) ON UPDATE CASCADE,
    material_base TEXT, -- Opcional (Se for especifico para Quartzito, Granito, etc)
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.setup_tempos_padrao_v2 ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Leitura pública autenticada para tempos" ON public.setup_tempos_padrao_v2 FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins podem gerenciar tempos" ON public.setup_tempos_padrao_v2 FOR ALL TO authenticated USING (true);

-- Inserir Alguns tempos base (Mock genérico para simulação)
INSERT INTO public.setup_tempos_padrao_v2 (tipo_servico, setor_responsavel, tempo_estimado_horas)
VALUES 
    ('Corte', 'Corte', 0.5),           -- 30 min por peça média (ou simplificação)
    ('Acabamento', 'Acabamento', 1.0), -- 1 hora por peça média
    ('Polimento', 'Polimento', 0.5)    -- 30 min por peça
ON CONFLICT DO NOTHING;

-- 3. Alterar pedidos_v2 para fazer cache da Carga Horária (evitar re-calculos massivos na visualização do Kanban)
ALTER TABLE public.pedidos_v2 
ADD COLUMN IF NOT EXISTS carga_horaria_estimada JSONB DEFAULT '{}'::jsonb;
-- Ex: {"Corte": 4.5, "Acabamento": 8.0, "Polimento": 2.5}
