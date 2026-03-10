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
"[project]/lib/validations/pedido_v2.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPedidoComercialSchema",
    ()=>createPedidoComercialSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const createPedidoComercialSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    cliente_nome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, 'O nome do cliente é obrigatório e deve ter no mínimo 3 caracteres.'),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    documento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    endereco_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    responsavel_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status_comercial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Orçamento',
        'Aguardando Aprovação',
        'Aprovado',
        'Cancelado'
    ]).optional().default('Orçamento'),
    data_prometida: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    urgencia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Baixa',
        'Normal',
        'Alta'
    ]).optional().default('Normal'),
    observacoes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d7a1815c5ab2a4cc2fa627d115d61490da51c58f":"criarPedidoComercial"},"",""] */ __turbopack_context__.s([
    "criarPedidoComercial",
    ()=>criarPedidoComercial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations/pedido_v2.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const pdfParse = __turbopack_context__.r("[project]/node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs [app-rsc] (ecmascript)");
async function criarPedidoComercial(formData) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // 1. Obter usuário logado (Obrigatório para o Event Sourcing)
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return {
                success: false,
                message: 'Usuário não autenticado.'
            };
        }
        // 2. Extrair dados brutos
        const rawData = {
            cliente_nome: formData.get('cliente_nome'),
            telefone: formData.get('telefone'),
            documento: formData.get('documento'),
            endereco_obra: formData.get('endereco_obra'),
            responsavel_obra: formData.get('responsavel_obra'),
            status_comercial: formData.get('status_comercial'),
            data_prometida: formData.get('data_prometida'),
            urgencia: formData.get('urgencia'),
            observacoes: formData.get('observacoes')
        };
        // 3. Validar via Zod
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPedidoComercialSchema"].safeParse(rawData);
        if (!result.success) {
            return {
                success: false,
                message: 'Dados de entrada inválidos. Verifique os campos.'
            };
        }
        const data = result.data;
        // 3.5. Extrair PDF In-Memory
        const arquivoPdf = formData.get('arquivoPdf');
        let texto_extraido = null;
        if (arquivoPdf && arquivoPdf.size > 0 && arquivoPdf.type === 'application/pdf') {
            const arrayBuffer = await arquivoPdf.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const pdfData = await pdfParse(buffer);
            texto_extraido = pdfData.text;
        }
        // 4. Iniciar transação (Supabase RPC ou Multi-insert via FKs)
        // Procurar ou Criar Cliente
        let clienteId = null;
        if (data.cliente_nome) {
            const { data: novoCliente, error: clienteErr } = await supabase.from('clientes').insert({
                nome: data.cliente_nome,
                telefone: data.telefone || null,
                documento: data.documento || null
            }).select('id').single();
            if (clienteErr) return {
                success: false,
                message: 'Erro ao cadastrar Cliente.'
            };
            clienteId = novoCliente.id;
        }
        // Procurar ou Criar Obra (Atrelada ao Cliente)
        let obraId = null;
        if (clienteId && (data.endereco_obra || data.responsavel_obra)) {
            const { data: novaObra, error: obraErr } = await supabase.from('obras').insert({
                cliente_id: clienteId,
                endereco: data.endereco_obra || null,
                responsavel_obra: data.responsavel_obra || null
            }).select('id').single();
            if (obraErr) return {
                success: false,
                message: 'Erro ao cadastrar Obra.'
            };
            obraId = novaObra.id;
        }
        // 5. Cadastrar Pedido
        const { data: novoPedido, error: pedidoErr } = await supabase.from('pedidos_v2').insert({
            cliente_id: clienteId,
            obra_id: obraId,
            status_comercial: data.status_comercial || 'Orçamento',
            data_prometida: data.data_prometida ? new Date(data.data_prometida).toISOString() : null,
            urgencia: data.urgencia,
            observacoes: data.observacoes || null,
            texto_extraido: texto_extraido,
            created_by: user.id
        }).select('id').single();
        if (pedidoErr || !novoPedido) {
            console.error("Erro Pedido V2:", pedidoErr);
            return {
                success: false,
                message: 'Erro ao gerar o Pedido.'
            };
        }
        // ==========================================
        // 6. O CORAÇÃO DO SISTEMA - EVENT SOURCING
        // Registrar o evento operacional inaugural
        // ==========================================
        const tipoEventoStr = texto_extraido ? 'Pedido Criado via ERP (Com PDF)' : `Entrada Comercial - ${data.status_comercial}`;
        const { error: eventoErr } = await supabase.from('eventos_operacionais').insert({
            pedido_id: novoPedido.id,
            usuario_id: user.id,
            etapa_atual: 'Recepção Comercial',
            tipo_evento: tipoEventoStr,
            observacoes: `Pedido/Orçamento registrado no sistema via Plataforma. Status: ${data.status_comercial}. ${texto_extraido ? 'Foram extraídos dados do PDF em memória.' : ''}`
        });
        if (eventoErr) {
            console.error("Erro Gravissimo: Evento Sourcing falhou", eventoErr);
        // O ideal seria rolar rollback (RPC), mas pra esse scope, vamos apenas logar e notificar.
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/pedidos-v2');
        return {
            success: true,
            message: 'Pedido e Evento Comercial gerados com sucesso!',
            pedido_id: novoPedido.id
        };
    } catch (err) {
        console.error('Erro catastrófico em criarPedidoComercial:', err);
        return {
            success: false,
            message: 'Erro inesperado interno do Servidor.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarPedidoComercial
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarPedidoComercial, "40d7a1815c5ab2a4cc2fa627d115d61490da51c58f", null);
}),
"[project]/.next-internal/server/app/(dashboard)/pedidos/novo/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/(dashboard)/pedidos/novo/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40d7a1815c5ab2a4cc2fa627d115d61490da51c58f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["criarPedidoComercial"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$pedidos$2f$novo$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/pedidos/novo/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ebd6013._.js.map