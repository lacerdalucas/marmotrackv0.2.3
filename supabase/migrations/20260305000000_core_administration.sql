-- 1. Create Core Administration Tables

-- companies (Inquilinos/Tenants)
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    document TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- slab_limits (Limites Dimensionais das Chapas/Pranchas)
CREATE TABLE slab_limits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    material_name TEXT NOT NULL,
    max_length_mm INTEGER NOT NULL,
    max_width_mm INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- production_stages (Etapas do Kanban / Fluxo de Produção)
CREATE TABLE production_stages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    sequence_order INTEGER NOT NULL,
    is_terminal_stage BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Configure Row Level Security (RLS)

-- Habilitar RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE slab_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE production_stages ENABLE ROW LEVEL SECURITY;

-- Exemplo: Policy para isolar dados do Tenant pela requisição (Supabase JWT)
-- Assume que app_metadata.company_id armazena o id do tenant logado
CREATE POLICY "Users can only view their own company"
    ON companies
    FOR SELECT
    USING (id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);

CREATE POLICY "Users can only view data from their company"
    ON slab_limits
    FOR ALL
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);

CREATE POLICY "Users can only view production stages from their company"
    ON production_stages
    FOR ALL
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);
