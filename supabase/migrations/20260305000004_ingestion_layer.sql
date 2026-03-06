-- Migration 04: Ingestion and Staging Layer (Human-in-the-loop)
-- Garantia: Estes dados NUNCA tocam as tabelas `projects` e `project_pieces` sem aprovação do Frontend.

-- 1. Tabela: import_jobs (Cabeçalho da Importação)
CREATE TABLE import_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    
    file_name TEXT NOT NULL,
    storage_path TEXT NOT NULL, -- Path do Bucket no Supabase Storage
    raw_extracted_text TEXT, -- Dump completo e bruto do OCR/PDF (Para auditoria de parser)
    
    -- Status: PROCESSING, AWAITING_REVIEW, PARTIALLY_CONSOLIDATED, CONSOLIDATED, FAILED
    status TEXT NOT NULL DEFAULT 'PROCESSING',
    
    uploaded_by UUID NOT NULL REFERENCES auth.users(id),
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    
    consolidated_by UUID REFERENCES auth.users(id),
    consolidated_at TIMESTAMP WITH TIME ZONE,
    
    resulting_project_id UUID REFERENCES projects(id) ON DELETE SET NULL, -- Ligação com o domínio após aprovação
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Tabela: import_job_extracted_items (A Hipótese do Parser)
-- Cada linha é o que o Parser "acha" que é uma peça (project_piece) + seu ambiente respectivo.
CREATE TABLE import_job_extracted_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID NOT NULL REFERENCES import_jobs(id) ON DELETE CASCADE,
    
    -- Rastreabilidade de Parser
    source_text_snippet TEXT, -- Que pedaço texto originou essa dedução? Ex: "1 Banheiro Tampo branco 200x50"
    confidence_score INTEGER CHECK (confidence_score >= 0 AND confidence_score <= 100), -- Score calculado pela Heuristica/IA
    
    -- Status da Linha: PENDING, APPROVED, CONSOLIDATED, DISCARDED (Lixo do parser)
    status TEXT NOT NULL DEFAULT 'PENDING',
    
    -- JSON Imutável (A dedução original da máquina)
    -- Contém: { environment, piece_name, dimensions_mm, material_name, finish_name, thickness_mm, observations, no_seam_required }
    parsed_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    
    -- JSON Mutável (A correção manual do Humano)
    -- Se vazio, significa que o humano concordou 100% com a máquina.
    manual_override_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    
    -- Auditoria de quem alterou a linha antes da aprovação macro
    last_edited_by UUID REFERENCES auth.users(id),
    last_edited_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Row Level Security (RLS)

ALTER TABLE import_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE import_job_extracted_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view import jobs of their company"
    ON import_jobs FOR ALL
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);

CREATE POLICY "Users view extracted items of their company"
    ON import_job_extracted_items FOR ALL
    USING (
        job_id IN (
            SELECT id FROM import_jobs 
            WHERE company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid
        )
    );
