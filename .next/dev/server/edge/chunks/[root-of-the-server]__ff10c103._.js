(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__ff10c103._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/lib/auth/permissions.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/auth/permissions.ts
// Centralization of permission roles for MarmoTrack (Single Source of Truth)
// Todos os papéis que existem no banco (Migration 02)
__turbopack_context__.s([
    "canViewDashboard",
    ()=>canViewDashboard,
    "canViewScanner",
    ()=>canViewScanner,
    "getRedirectRouteByRole",
    ()=>getRedirectRouteByRole
]);
// Mapeamento de quem pode acessar o dashboard web (PCP/Gerência/Venda)
const WebRoles = [
    'administrador',
    'gestor',
    'pcp',
    'vendedor',
    'projetista'
];
// Mapeamento de quem deve ser direcionado à visão de chão de fábrica/mobile (Operador)
const FieldRoles = [
    'operador',
    'medidor',
    'instalador'
];
function canViewDashboard(role) {
    return WebRoles.includes(role);
}
function canViewScanner(role) {
    return FieldRoles.includes(role);
}
function getRedirectRouteByRole(role) {
    if (canViewDashboard(role)) return '/dashboard';
    if (role === 'operador') return '/scanner';
    if (role === 'medidor') return '/field/measurement';
    if (role === 'instalador') return '/field/installation';
    // Default de fallback de segurança
    return '/login?error=role_not_mapped';
}
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$permissions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/permissions.ts [middleware-edge] (ecmascript)");
;
;
;
async function middleware(request) {
    let supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request
    });
    // Criando o client do Supabase que acessa cookies no middleware
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "http://127.0.0.1:54321"), ("TURBOPACK compile-time value", "sb_publishable_ACJwLzQHlzJBreguHvfOXg_3BJgxAaH"), {
        cookies: {
            getAll () {
                return request.cookies.getAll();
            },
            setAll (cookiesToSet) {
                cookiesToSet.forEach(({ name, value, options })=>request.cookies.set(name, value));
                supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request
                });
                cookiesToSet.forEach(({ name, value, options })=>supabaseResponse.cookies.set(name, value, options));
            }
        }
    });
    // O getUser() atualiza automaticamente a flag de expiracao de cookie se necessário
    const { data: { user } } = await supabase.auth.getUser();
    const currentPath = request.nextUrl.pathname;
    // 1. Logica p/ Deslogados
    if (!user && !currentPath.startsWith('/login') && !currentPath.startsWith('/auth')) {
        // Caso tente acessar area restrita sem estar logado
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    // 2. Lógica p/ Logados
    if (user) {
        // Obter dados customizados gerados no JWT via custom_access_token_hook
        const userRole = user.app_metadata?.role;
        // Forçar redirecionamento do /login para rotas adequadas se já tem sessão
        if (currentPath.startsWith('/login')) {
            if (!userRole) return supabaseResponse; // Sem Role na session ainda
            const url = request.nextUrl.clone();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$permissions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["canViewDashboard"])(userRole)) url.pathname = '/dashboard';
            else url.pathname = '/scanner';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
        }
        // Proteger acesso indevido "Cross-Role"
        if (userRole) {
            if (currentPath.startsWith('/dashboard') && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$permissions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["canViewDashboard"])(userRole)) {
                // Operador tentando ver relatórios web => Joga de volta pro scanner
                const url = request.nextUrl.clone();
                url.pathname = '/scanner';
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
            }
            if (currentPath.startsWith('/scanner') && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$permissions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["canViewScanner"])(userRole)) {
                // Administrativo/PCP tentando acessar scanner mobile-first
                const url = request.nextUrl.clone();
                url.pathname = '/dashboard';
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
            }
        }
    }
    return supabaseResponse;
}
const config = {
    matcher: [
        /*
         * Intercepta tudo exceto:
         * - _next/static (js/css/etc)
         * - _next/image (image optimization)
         * - favicon.ico
         * - images, etc (usar api tbm se houver necessidade de autenticar fetch estatico)
         */ '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ff10c103._.js.map