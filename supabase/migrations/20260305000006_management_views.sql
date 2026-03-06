-- Migration 06: Gestão de Pendências (Hospital) e Views Analíticas

-- 1. Tabela Híbrida de Exceções (O "Hospital" das Pedras)
-- Esta tabela vive o ciclo de vida gerencial da pendência reportada pelo Chão de Fábrica.
CREATE TABLE piece_issues (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    piece_id UUID NOT NULL REFERENCES project_pieces(id) ON DELETE CASCADE,
    
    -- Vínculo Incorruptível com o evento que originou o deastre
    trigger_event_id UUID REFERENCES piece_events(id),
    
    status TEXT NOT NULL DEFAULT 'OPEN' CHECK (status IN ('OPEN', 'ANALYZING', 'RESOLVED')),
    
    reported_by UUID NOT NULL REFERENCES auth.users(id),
    reported_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    
    -- Parte Gerencial
    resolution_notes TEXT,
    resolved_by UUID REFERENCES auth.users(id),
    resolved_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Trigger para Automação Híbrida
-- Quando o scanner bipar BLOCK_REWORK, cria automaticamente o chamado no Hospital.
CREATE OR REPLACE FUNCTION trg_create_issue_on_rework()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    IF NEW.event_type = 'BLOCK_REWORK' THEN
        INSERT INTO piece_issues (company_id, piece_id, trigger_event_id, reported_by, status)
        VALUES (NEW.company_id, NEW.piece_id, NEW.id, NEW.operator_id, 'OPEN');
    END IF;
    RETURN NEW;
END;
$$;

CREATE TRIGGER create_issue_after_event
AFTER INSERT ON piece_events
FOR EACH ROW
EXECUTE FUNCTION trg_create_issue_on_rework();

-- 3. Views Operacionais Rápidas (Tempo Real para o Kanban)
-- Consulta leve focada apenas em peças não entregues. Permite o front puxar as colunas rapidamente.
CREATE OR REPLACE VIEW vw_kanban_board AS
SELECT 
    p.id AS piece_id,
    p.qr_code_id,
    p.name AS piece_name,
    p.material_name,
    p.status AS piece_status,
    p.updated_at AS last_status_change,
    EXTRACT(EPOCH FROM (now() - p.updated_at))/3600 AS hours_in_current_status, -- Detecção de pedra estagnada
    
    ps.id AS stage_id,
    ps.name AS stage_name,
    ps.sequence_order,
    
    env.name AS environment_name,
    
    proj.id AS project_id,
    proj.erp_reference,
    proj.company_id
FROM project_pieces p
JOIN production_stages ps ON p.current_stage_id = ps.id
JOIN project_environments env ON p.environment_id = env.id
JOIN projects proj ON env.project_id = proj.id
WHERE proj.status != 'DONE';

-- 4. View de Dashboards Analíticos (D1 / Custo computacional isolado)
-- Esta view processa o Tempo (Lead Time) de cada setor subtraindo IN e OUT.
-- Em produção pesada, usaríamos MATERIALIZED VIEW atualizada no cron. Para o MVP, uma View standard resolve.
CREATE OR REPLACE VIEW vw_stage_durations AS
SELECT 
    in_event.company_id,
    in_event.piece_id,
    in_event.stage_id,
    stg.name AS stage_name,
    in_event.created_at AS stage_in_time,
    out_event.created_at AS stage_out_time,
    EXTRACT(EPOCH FROM (out_event.created_at - in_event.created_at))/3600 AS duration_hours,
    in_event.operator_id AS in_operator
FROM piece_events in_event
JOIN production_stages stg ON in_event.stage_id = stg.id
-- Busca o OUT correlato (o primeiro ocorrido após o IN para a mesma peça no mesmo estágio)
LEFT JOIN piece_events out_event ON 
    out_event.piece_id = in_event.piece_id 
    AND out_event.stage_id = in_event.stage_id 
    AND out_event.event_type = 'STAGE_OUT' 
    AND out_event.created_at > in_event.created_at
WHERE in_event.event_type = 'STAGE_IN';

-- 5. RLS
ALTER TABLE piece_issues ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view issues of their company"
    ON piece_issues FOR ALL
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);
