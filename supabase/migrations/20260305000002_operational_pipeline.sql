-- 1. Create Projects Table (Entidade Raiz Operacional)
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    erp_reference TEXT, -- Num do orçamento do cliente de origem
    customer_name TEXT NOT NULL,
    shipping_address TEXT,
    
    -- Status Macro: DRAFT, MEASUREMENT, PRODUCTION, INSTALLATION, DONE
    status TEXT NOT NULL DEFAULT 'DRAFT', 
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. Create Environments Table (Cômodos / Áreas)
CREATE TABLE project_environments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- Ex: 'Cozinha', 'Banheiro Suíte'
    description TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Create Pieces Table (Unidade Atômica e Física da Pedra)
CREATE TABLE project_pieces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    environment_id UUID NOT NULL REFERENCES project_environments(id) ON DELETE CASCADE,
    qr_code_id TEXT UNIQUE, -- Código gerado para a etiqueta
    
    name TEXT NOT NULL, -- Ex: 'Ilha', 'Tampo com Cuba Esculpida'
    description TEXT, -- Observações técnicas gerais
    
    -- Especificações Técnicas Fundamentais
    material_name TEXT, -- Ex: 'Preto São Gabriel'
    finish_name TEXT, -- Ex: 'Polido', 'Escovado', 'Bisotê 45'
    thickness_mm INTEGER, -- Ex: 20
    dimensions_mm JSONB, -- Geometria bruta: {"length": 2500, "width": 600}
    no_seam_required BOOLEAN NOT NULL DEFAULT false, -- Gatilho forte p/ limite dimensional
    
    -- Estado Físico e Rastreador
    current_stage_id UUID REFERENCES production_stages(id),
    -- Status Operacional da Peça: PENDING, IN_PROGRESS, BLOCKED_REWORK, COMPLETED
    status TEXT NOT NULL DEFAULT 'PENDING', 
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 4. Create Attachments Table (Evidências de Medição, PDF Originais, Assinaturas)
CREATE TABLE project_attachments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    piece_id UUID REFERENCES project_pieces(id) ON DELETE CASCADE, -- Opcional: Se a foto for um retrabalho de uma peça exata
    
    uploaded_by UUID NOT NULL REFERENCES auth.users(id),
    storage_path TEXT NOT NULL, -- Path no bucket do Supabase Storage
    attachment_type TEXT NOT NULL, -- MEASUREMENT_PHOTO, SIGNED_AGREEMENT, REWORK_EVIDENCE, ERP_PDF_SOURCE
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 5. Create Piece Status History (Tabela Imutável de Auditoria / Event Tracker)
CREATE TABLE piece_status_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    piece_id UUID NOT NULL REFERENCES project_pieces(id) ON DELETE CASCADE,
    
    previous_stage_id UUID REFERENCES production_stages(id),
    new_stage_id UUID REFERENCES production_stages(id),
    
    changed_by UUID NOT NULL REFERENCES auth.users(id),
    status_note TEXT, -- Campo para justificar quebras ou devoluções
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 6. Configurar RLS (Row Level Security)

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_environments ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_pieces ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE piece_status_history ENABLE ROW LEVEL SECURITY;

-- As Policies derivam todas do company_id. 
-- Para os relacionamentos filhos (environments, pieces), faremos join implicit pelo project ou environment.

CREATE POLICY "Users view projects of their company"
    ON projects FOR ALL
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);

CREATE POLICY "Users view environments of their company projects"
    ON project_environments FOR ALL
    USING (
        project_id IN (
            SELECT id FROM projects 
            WHERE company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid
        )
    );

CREATE POLICY "Users view pieces of their company projects"
    ON project_pieces FOR ALL
    USING (
        environment_id IN (
            SELECT e.id FROM project_environments e
            JOIN projects p ON e.project_id = p.id
            WHERE p.company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid
        )
    );

CREATE POLICY "Users view attachments of their company projects"
    ON project_attachments FOR ALL
    USING (
        project_id IN (
            SELECT id FROM projects 
            WHERE company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid
        )
    );

CREATE POLICY "Users view piece history of their company projects"
    ON piece_status_history FOR SELECT
    USING (
        piece_id IN (
            SELECT pp.id FROM project_pieces pp
            JOIN project_environments pe ON pp.environment_id = pe.id
            JOIN projects p ON pe.project_id = p.id
            WHERE p.company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid
        )
    );
