-- Migration 07: Módulo do Medidor (O Funil Anterior à Fábrica)

-- 1. Tabela de Visitas de Medição
CREATE TABLE measurement_visits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    measurer_id UUID NOT NULL REFERENCES auth.users(id),
    
    scheduled_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT NOT NULL DEFAULT 'SCHEDULED' CHECK (status IN ('SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELED')),
    
    notes TEXT,
    field_notes TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Stored Procedure (RPC) para Concluir a Medição de Forma Segura
CREATE OR REPLACE FUNCTION complete_measurement_visit(
    p_visit_id UUID,
    p_field_notes TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_visit RECORD;
    v_operator_id UUID;
    v_company_id UUID;
BEGIN
    v_operator_id := auth.uid();
    
    IF v_operator_id IS NULL THEN
        RAISE EXCEPTION 'unauthorized: Usuário não autenticado.';
    END IF;

    SELECT * INTO v_visit 
    FROM measurement_visits 
    WHERE id = p_visit_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'visit_not_found: Visita não encontrada.';
    END IF;

    SELECT company_id INTO v_company_id FROM users_profile WHERE id = v_operator_id;
    
    IF v_visit.company_id != v_company_id THEN
        RAISE EXCEPTION 'unauthorized: Visita pertence a outra empresa.';
    END IF;

    UPDATE measurement_visits
    SET status = 'COMPLETED', 
        field_notes = p_field_notes,
        updated_at = now()
    WHERE id = p_visit_id;

    UPDATE projects
    SET status = 'PRODUCTION',
        updated_at = now()
    WHERE id = v_visit.project_id AND status = 'MEASUREMENT';

    RETURN '{"status": "success", "message": "Medição concluída e obra liberada com sucesso."}'::jsonb;
END;
$$;

-- 3. Configuração de Row Level Security (RLS)
ALTER TABLE measurement_visits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view measurements of their company"
    ON measurement_visits FOR ALL
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);