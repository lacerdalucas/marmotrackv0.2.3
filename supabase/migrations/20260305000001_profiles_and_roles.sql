-- 1. Create Roles Table (Tipos de Perfis)
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Inserir os perfis obrigatórios do escopo
INSERT INTO roles (name, description) VALUES
    ('administrador', 'Acesso total ao sistema e configurações'),
    ('gestor', 'Visão gerencial, dashboards e relatórios'),
    ('pcp', 'Planejamento e Controle de Produção (Acesso Web)'),
    ('operador', 'Operador de Chão de Fábrica (Acesso Mobile Scanner)'),
    ('vendedor', 'Comercial, lançamento de pedidos e briefings'),
    ('medidor', 'Técnico de campo, responsável por check-ins de medição'),
    ('projetista', 'Responsável pelo detalhamento técnico e paginação (Slab Limits)'),
    ('instalador', 'Técnico de campo final, coleta de assinaturas');

-- 2. Create Users Profile Table (Vínculo de Usuário + Empresa + Perfil)
CREATE TABLE users_profile (
    -- PK referenciando o Auth nativo do Supabase com Delete em Cascata
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id),
    
    full_name TEXT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    last_login_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 3. Security: Row Level Security (RLS)
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users_profile ENABLE ROW LEVEL SECURITY;

-- Qualquer usuário autenticado pode ler a tabela de Roles
CREATE POLICY "Anyone authenticated can read roles"
    ON roles
    FOR SELECT
    TO authenticated
    USING (true);

-- Um usuário só interage com perfis da própria empresa (Tenant Isolation)
CREATE POLICY "Users can only view profiles in their company"
    ON users_profile
    FOR SELECT
    USING (company_id = (auth.jwt() -> 'app_metadata' ->> 'company_id')::uuid);

-- 4. Funções e Triggers (Automação de Claims JWT)
-- Esta função enriquece o JWT do Supabase com o company_id e role_name
-- toda vez que o Session for gerado. É o motor do nosso isolamento de Backend.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Cria o profile na tabela publica (O company_id e role deverao ser passados via raw_user_meta_data)
  INSERT INTO public.users_profile (id, company_id, role_id, full_name)
  VALUES (
    new.id,
    (new.raw_user_meta_data->>'company_id')::uuid,
    (new.raw_user_meta_data->>'role_id')::uuid,
    new.raw_user_meta_data->>'full_name'
  );
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger disparada quando um usuário é criado no auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Helper function to generate custom JWT claims without needing frequent outer joins
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
  DECLARE
    claims jsonb;
    user_role text;
    user_company uuid;
  BEGIN
    -- Busca os dados do perfil public
    SELECT r.name, u.company_id INTO user_role, user_company
    FROM public.users_profile u
    JOIN public.roles r ON u.role_id = r.id
    WHERE u.id = (event->>'user_id')::uuid;

    claims := event->'claims';

    IF user_role IS NOT NULL THEN
      -- Injeta app_metadata forçando isolamento imediato de sessao
      claims := jsonb_set(claims, '{app_metadata, role}', to_jsonb(user_role));
      claims := jsonb_set(claims, '{app_metadata, company_id}', to_jsonb(user_company));
    END IF;

    -- Atualiza log de ultimo acesso de forma atomica
    UPDATE public.users_profile SET last_login_at = now() WHERE id = (event->>'user_id')::uuid;

    event := jsonb_set(event, '{claims}', claims);
    RETURN event;
  END;
$$;

-- OBS: Para o Supabase CLI/Cloud, hooks customizados do auth precisam ser ativados
-- no painel ou via definicao no config.toml
