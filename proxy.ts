import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { canViewDashboard, canViewScanner } from '@/lib/auth/permissions'

export async function proxy(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    // Criando o client do Supabase que acessa cookies no middleware
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({ request })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // O getUser() atualiza automaticamente a flag de expiracao de cookie se necessário
    const { data: { user } } = await supabase.auth.getUser()

    const currentPath = request.nextUrl.pathname

    // 1. Logica p/ Deslogados
    if (!user && !currentPath.startsWith('/login') && !currentPath.startsWith('/auth')) {
        // Caso tente acessar area restrita sem estar logado
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    // 2. Lógica p/ Logados
    if (user) {
        // Obter dados customizados gerados no JWT via custom_access_token_hook
        const userRole = user.app_metadata?.role as string | undefined

        // Forçar redirecionamento do /login para rotas adequadas se já tem sessão
        if (currentPath.startsWith('/login')) {
            if (!userRole) return supabaseResponse; // Sem Role na session ainda

            const url = request.nextUrl.clone()
            if (canViewDashboard(userRole)) url.pathname = '/dashboard'
            else url.pathname = '/scanner'
            return NextResponse.redirect(url)
        }

        // Proteger acesso indevido "Cross-Role"
        if (userRole) {
            if (currentPath.startsWith('/dashboard') && !canViewDashboard(userRole)) {
                // Operador tentando ver relatórios web => Joga de volta pro scanner
                const url = request.nextUrl.clone()
                url.pathname = '/scanner'
                return NextResponse.redirect(url)
            }

            if (currentPath.startsWith('/scanner') && !canViewScanner(userRole)) {
                // Administrativo/PCP tentando acessar scanner mobile-first
                const url = request.nextUrl.clone()
                url.pathname = '/dashboard'
                return NextResponse.redirect(url)
            }
        }
    }

    return supabaseResponse
}

// Configs do matcher do Next.js (Dizemos onde o middleware deve rodar)
export const config = {
    matcher: [
        /*
         * Intercepta tudo exceto:
         * - _next/static (js/css/etc)
         * - _next/image (image optimization)
         * - favicon.ico
         * - images, etc (usar api tbm se houver necessidade de autenticar fetch estatico)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}