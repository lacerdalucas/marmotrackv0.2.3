-- Migration 05: Orquestração Operacional e Imutabilidade (Scanner)

-- 1. Matriz de Retrabalho e Regras (Opcional, mas base para travas futuras)
-- Para simplificar o MVP, a validação de Sequência lógica usará a coluna `sequence_order`
-- já criada na tabela `production_stages` na Migration 01.

-- 2. Tabela Otimizada de Eventos: piece_events (Event Sourcing Raiz)
-- Substitui a antiga "piece_status_history" por um modelo focado em AÇÃO e não apenas DE-PARA.
CREATE TABLE piece_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    piece_id UUID NOT NULL REFERENCES project_pieces(id) ON DELETE CASCADE,
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    
    -- STAGE_IN (Comecei a mexer), STAGE_OUT (Passei pra frente), BLOCK_REWORK (Deu ruim / Quebrou)
    event_type TEXT NOT NULL CHECK (event_type IN ('STAGE_IN', 'STAGE_OUT', 'BLOCK_REWORK', 'QUALITY_CHECK')),
    
    -- Opcional para eventos que não mudam a etapa atual (Ex: QUALITY_CHECK dentro do Acabamento)
    stage_id UUID REFERENCES production_stages(id), 
    
    operator_id UUID NOT NULL REFERENCES auth.users(id),
    
    -- JSON para extensibilidade (Ex: Guardar foto do retrabalho, id do equipamento usado)
    metadata JSONB DEFAULT '{}'::jsonb, 
    notes TEXT, -- Observação do operador em caso de quebra ou excessão
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Função RPC Fundamental: transition_piece_stage
-- Esta Stored Procedure é a ÚNICA forma de alterar o status de uma peça.
-- O Frontend / Deno / API nunca farão "UPDATE project_pieces" diretamente.

CREATE OR REPLACE FUNCTION transition_piece_stage(
    p_qr_code_id TEXT,
    p_event_type TEXT,
    p_target_stage_id UUID, -- O Estágio que estamos manipulando agora
    p_operator_id UUID,
    p_notes TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER -- Roda com privilégios de bypass para garantir a transação atômica selada
AS $$
DECLARE
    v_piece RECORD;
    v_current_stage_order INTEGER;
    v_target_stage_order INTEGER;
    v_company_id UUID;
    v_operator_role TEXT;
BEGIN
    -- 0. Extrair metadados básicos
    SELECT company_id INTO v_company_id FROM users_profile WHERE id = p_operator_id;
    
    -- 1. Localizar Peça via QR Code e cruzar com Company ID do operador (Isolamento Rígido)
    SELECT p.*, s.sequence_order as current_order 
    INTO v_piece 
    FROM project_pieces p
    LEFT JOIN production_stages s ON p.current_stage_id = s.id
    JOIN project_environments pe ON p.environment_id = pe.id
    JOIN projects pr ON pe.project_id = pr.id
    WHERE p.qr_code_id = p_qr_code_id AND pr.company_id = v_company_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'invalid_qr_code_or_unauthorized: Peça não encontrada para sua empresa.';
    END IF;

    -- Validar estágio destino
    SELECT sequence_order INTO v_target_stage_order 
    FROM production_stages 
    WHERE id = p_target_stage_id AND company_id = v_company_id;

    IF NOT FOUND AND p_target_stage_id IS NOT NULL THEN
       RAISE EXCEPTION 'invalid_stage: Estágio de produção inexistente.';
    END IF;

    -- REGRA 1: Peça Bloqueada
    IF v_piece.status = 'BLOCKED_REWORK' AND p_event_type != 'OVERRIDE_REWORK' THEN
        RAISE EXCEPTION 'piece_blocked: Peça em quarentena de retrabalho. Apenas PCP pode destravar.';
    END IF;

    -- REGRA 2: Double Scan de STAGE_IN (Idempotência / Prevenção de erro humano)
    -- Se eu já estou IN na etapa X, não posso dar IN na etapa X de novo.
    IF p_event_type = 'STAGE_IN' THEN
        IF v_piece.current_stage_id = p_target_stage_id AND v_piece.status = 'IN_PROGRESS' THEN
             -- Apenas ignore silenciosamente se for o mesmo cara bipando de novo de ansiedade.
             RETURN '{"status": "success", "message": "Peça já registrada neste setor."}'::jsonb;
        END IF;

        -- REGRA 3: Fora de Sequência (Pulando etapa)
        -- Num sistema restrito, STAGE_IN no nível N exige que tenha havido um STAGE_OUT do nível N-1
        -- (Isso pode ser relaxado dependendo da operação, mas assumimos restrito aqui).
        IF v_piece.current_order IS NOT NULL AND v_target_stage_order < v_piece.current_order THEN
             RAISE EXCEPTION 'invalid_sequence: A peça já ultrapassou este setor de produção.';
        END IF;
    END IF;

    -- REGRA 4: Logar Evento Imutável PRIMEIRO
    INSERT INTO piece_events (piece_id, company_id, event_type, stage_id, operator_id, notes)
    VALUES (v_piece.id, v_company_id, p_event_type, p_target_stage_id, p_operator_id, p_notes);

    -- REGRA 5: Derivar Estado Atual (O Update Controlado)
    IF p_event_type = 'STAGE_IN' THEN
        UPDATE project_pieces 
        SET current_stage_id = p_target_stage_id, status = 'IN_PROGRESS', updated_at = now()
        WHERE id = v_piece.id;
    
    ELSIF p_event_type = 'STAGE_OUT' THEN
        UPDATE project_pieces 
        SET status = 'PENDING', updated_at = now() -- Fica pending aguardando a proxima etapa dar o STAGE_IN
        WHERE id = v_piece.id;
        
    ELSIF p_event_type = 'BLOCK_REWORK' THEN
        UPDATE project_pieces 
        SET status = 'BLOCKED_REWORK', updated_at = now()
        WHERE id = v_piece.id;
    END IF;

    RETURN '{"status": "success", "message": "Transição registrada com sucesso."}'::jsonb;
END;
$$;

-- 4. RLS na tabela de eventos
ALTER TABLE piece_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view piece events of their company"
    ON piece_events FOR SELECT
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);
