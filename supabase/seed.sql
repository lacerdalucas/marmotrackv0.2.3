-- supabase/seed.sql

-- 1. Injetar a primeira empresa
INSERT INTO public.companies (id, name) 
VALUES ('11111111-1111-1111-1111-111111111111', 'Marmoraria Matriz')
ON CONFLICT (id) DO NOTHING;

-- Bloco anônimo
DO $$
DECLARE
    v_role_id UUID;
BEGIN
    -- Buscar o ID da role gerada na migration para não haver erro
    SELECT id INTO v_role_id FROM public.roles WHERE name = 'administrador' LIMIT 1;

    -- 2. Criar o Usuário Master (Com as strings vazias exigidas pelo GoTrue)
    INSERT INTO auth.users (
        instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, 
        confirmation_token, recovery_token, email_change_token_new, email_change_token_current,
        email_change, phone, phone_change, phone_change_token,
        raw_app_meta_data, raw_user_meta_data, created_at, updated_at
    ) VALUES (
        '00000000-0000-0000-0000-000000000000', '44444444-4444-4444-4444-444444444444', 'authenticated', 'authenticated', 
        'admin@marmo.com', crypt('123456', gen_salt('bf')), now(), 
        '', '', '', '', 
        '', '', '', '', 
        jsonb_build_object('company_id', '11111111-1111-1111-1111-111111111111', 'role_name', 'administrador', 'role_id', v_role_id), 
        jsonb_build_object('company_id', '11111111-1111-1111-1111-111111111111', 'full_name', 'Administrador Master', 'role_id', v_role_id),
        now(), now()
    ) ON CONFLICT (id) DO NOTHING;

    -- 3. Criar a Identidade (Permite o Login com senha)
    INSERT INTO auth.identities (
        id, provider_id, user_id, identity_data, provider, created_at, updated_at
    ) VALUES (
        gen_random_uuid(), '44444444-4444-4444-4444-444444444444', '44444444-4444-4444-4444-444444444444',
        jsonb_build_object('sub', '44444444-4444-4444-4444-444444444444', 'email', 'admin@marmo.com'),
        'email', now(), now()
    ) ON CONFLICT DO NOTHING;

    -- 4. FORÇAR A INTEGRIDADE DO PERFIL (Garante que a Role e Empresa estão corretas)
    INSERT INTO public.users_profile (id, company_id, role_id, full_name)
    VALUES (
        '44444444-4444-4444-4444-444444444444', 
        '11111111-1111-1111-1111-111111111111', 
        v_role_id, 
        'Administrador Master'
    ) ON CONFLICT (id) DO UPDATE 
    SET role_id = EXCLUDED.role_id, 
        company_id = EXCLUDED.company_id,
        full_name = EXCLUDED.full_name;

END $$;