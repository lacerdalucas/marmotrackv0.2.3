module.exports = [
"[project]/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "http://127.0.0.1:54321"), ("TURBOPACK compile-time value", "sb_publishable_ACJwLzQHlzJBreguHvfOXg_3BJgxAaH"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Pode haver throw errors rodando actions via Next Pages router, no App Router não deveria.
                }
            }
        }
    });
}
}),
"[project]/lib/auth/permissions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/(auth)/login/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40142f58552fae12e2fc6701ec52bbec75edc1f090":"loginAction"},"",""] */ __turbopack_context__.s([
    "loginAction",
    ()=>loginAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/permissions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function loginAction(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        return {
            error: 'E-mail e Senha são obrigatórios'
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Tenta autenticar via Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        console.error('Login error:', error.message);
        return {
            error: 'Credenciais inválidas. Verifique seu e-mail e senha.'
        };
    }
    // Verifica o claim customizado no app_metadata devido aos triggers.
    // O backend pode injetar isso direto no token como role_name
    let role = data.user?.app_metadata?.role_name;
    if (!role) {
        console.warn('⚠️ [Login] Perfil não encontrado no app_metadata. Tentando forçar sync com o banco...', {
            user_id: data.user?.id,
            app_metadata: data.user?.app_metadata
        });
        // Fallback: Acessar a tabela "users_profile" logando como o usuário atual
        // Isso força a busca real-time logo após a sessão ser gerada
        const { data: profileObj, error: profileErr } = await supabase.from('users_profile').select(`
                roles (
                    name
                )
            `).eq('id', data.user?.id).single();
        if (profileErr) {
            console.error('❌ [Login] Erro forçando leitura do Perfil:', profileErr.message);
        } else if (profileObj?.roles) {
            // Em Supabase JSON responses, associações hasOne vem como objeto flat único (ou array dependendo do model)
            // Tipando genericamente:
            const roleData = profileObj.roles;
            role = roleData?.name;
            console.log('✅ [Login] Perfil resgatado via banco com sucesso. Role:', role);
        }
    }
    if (!role) {
        console.error('❌ [Login] Usuário autenticado, mas totalmente sem Perfil (Role) associado.');
        return {
            error: 'Usuário sem Perfil (Role) associado. Contate o administrador.'
        };
    }
    console.log(`✅ [Login] Autenticação Concluída. Redirecionando '${email}' para Role: [${role}]...`);
    // O redirecionamento baseando na regra de negócio:
    const targetRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRedirectRouteByRole"])(role);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(targetRoute);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "40142f58552fae12e2fc6701ec52bbec75edc1f090", null);
}),
"[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(auth)/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(auth)/login/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(auth)/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40142f58552fae12e2fc6701ec52bbec75edc1f090",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$auth$292f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(auth)/login/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(auth)/login/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_519fe3a3._.js.map