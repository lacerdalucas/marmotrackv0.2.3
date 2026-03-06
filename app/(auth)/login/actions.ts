'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getRedirectRouteByRole } from '@/lib/auth/permissions'

export async function loginAction(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { error: 'E-mail e Senha são obrigatórios' }
    }

    const supabase = await createClient()

    // Tenta autenticar via Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error('Login error:', error.message)
        return { error: 'Credenciais inválidas. Verifique seu e-mail e senha.' }
    }

    // Verifica o claim customizado no app_metadata devido aos triggers.
    // O backend pode injetar isso direto no token como role_name
    let role = data.user?.app_metadata?.role_name as string | undefined

    if (!role) {
        console.warn('⚠️ [Login] Perfil não encontrado no app_metadata. Tentando forçar sync com o banco...', {
            user_id: data.user?.id,
            app_metadata: data.user?.app_metadata
        });

        // Fallback: Acessar a tabela "users_profile" logando como o usuário atual
        // Isso força a busca real-time logo após a sessão ser gerada
        const { data: profileObj, error: profileErr } = await supabase
            .from('users_profile')
            .select(`
                roles (
                    name
                )
            `)
            .eq('id', data.user?.id)
            .single();

        if (profileErr) {
            console.error('❌ [Login] Erro forçando leitura do Perfil:', profileErr.message);
        } else if (profileObj?.roles) {
            // Em Supabase JSON responses, associações hasOne vem como objeto flat único (ou array dependendo do model)
            // Tipando genericamente:
            const roleData: any = profileObj.roles;
            role = roleData?.name;
            console.log('✅ [Login] Perfil resgatado via banco com sucesso. Role:', role);
        }
    }

    if (!role) {
        console.error('❌ [Login] Usuário autenticado, mas totalmente sem Perfil (Role) associado.');
        return { error: 'Usuário sem Perfil (Role) associado. Contate o administrador.' }
    }

    console.log(`✅ [Login] Autenticação Concluída. Redirecionando '${email}' para Role: [${role}]...`)
    // O redirecionamento baseando na regra de negócio:
    const targetRoute = getRedirectRouteByRole(role)
    redirect(targetRoute)
}
