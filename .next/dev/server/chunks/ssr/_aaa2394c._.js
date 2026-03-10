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
"[project]/lib/validations/medicao_v2.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agendarMedicaoSchema",
    ()=>agendarMedicaoSchema,
    "aprovarPedidoSchema",
    ()=>aprovarPedidoSchema,
    "concluirMedicaoSchema",
    ()=>concluirMedicaoSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const aprovarPedidoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pedido_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    precisa_medicao: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    observacoes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const agendarMedicaoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pedido_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    responsavel_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().optional(),
    data_agendada: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    observacoes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const concluirMedicaoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    medicao_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    pendencias_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    apto_para_projeto: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Concluida',
        'Frustrada'
    ])
});
}),
"[project]/app/actions/medicao.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"407e1cce73c3253b5d5b10841c5ace7ee08e0f21bd":"aprovarPedidoAction","40c74d38ea4aef1fcabc278541289b93babb2d8d82":"concluirMedicaoAction","40d10bf358c289821df206340affbf3a6b1b309dc1":"agendarMedicaoAction"},"",""] */ __turbopack_context__.s([
    "agendarMedicaoAction",
    ()=>agendarMedicaoAction,
    "aprovarPedidoAction",
    ()=>aprovarPedidoAction,
    "concluirMedicaoAction",
    ()=>concluirMedicaoAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$medicao_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations/medicao_v2.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function aprovarPedidoAction(rawData) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return {
            success: false,
            message: 'Usuário não autenticado.'
        };
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$medicao_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aprovarPedidoSchema"].safeParse(rawData);
        if (!parsed.success) return {
            success: false,
            message: 'Dados inválidos.'
        };
        const data = parsed.data;
        // Atualiza o Pedido
        const { error: updateErr } = await supabase.from('pedidos_v2').update({
            status_comercial: 'Aprovado',
            precisa_medicao: data.precisa_medicao,
            data_aprovacao: new Date().toISOString()
        }).eq('id', data.pedido_id);
        if (updateErr) return {
            success: false,
            message: 'Falha ao aprovar pedido.'
        };
        // A fila de medição do PCP agora é alimentada automaticamente de forma dinâmica 
        // pela consulta na UI (Pedidos Aprovados sem medição ativa), 
        // então não precisamos inserir um registro "Pendente" (que violava a constraint).
        // Registra o Evento Imutável (Event Sourcing)
        await supabase.from('eventos_operacionais').insert({
            pedido_id: data.pedido_id,
            usuario_id: user.id,
            etapa_atual: data.precisa_medicao ? 'Fila de Medição' : 'Fila de Projeto',
            tipo_evento: 'Aprovação Comercial',
            observacoes: `Pedido Aprovado. ${data.precisa_medicao ? 'Aguardando Medição.' : 'Medição Dispensada.'} Obs adicionais: ${data.observacoes || 'Nenhuma'}`
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/pedidos/${data.pedido_id}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/medicoes');
        return {
            success: true,
            message: 'Pedido Aprovado com Sucesso!'
        };
    } catch (err) {
        return {
            success: false,
            message: 'Erro interno na Aprovação.'
        };
    }
}
async function agendarMedicaoAction(rawData) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return {
            success: false,
            message: 'Usuário não autenticado.'
        };
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$medicao_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["agendarMedicaoSchema"].safeParse(rawData);
        if (!parsed.success) return {
            success: false,
            message: 'Dados inválidos.'
        };
        const data = parsed.data;
        // Insere a Nova Medição (agora que Pendentes são calculados dinamicamente)
        const { data: novaMedicao, error: insertErr } = await supabase.from('medicoes_v2').insert({
            pedido_id: data.pedido_id,
            responsavel_id: data.responsavel_id || user.id,
            data_agendada: data.data_agendada || null,
            status: 'Agendada'
        }).select('id').single();
        if (insertErr || !novaMedicao) {
            console.error("Erro Insert Agendar Medição:", insertErr);
            return {
                success: false,
                message: 'Erro ao agendar medição. O pedido pode não estar na fila.'
            };
        }
        // Registra o Evento (Event Sourcing)
        await supabase.from('eventos_operacionais').insert({
            pedido_id: data.pedido_id,
            usuario_id: user.id,
            etapa_atual: 'Medição Agendada',
            tipo_evento: 'Agendamento de Medição',
            observacoes: `Medição agendada. Responsável Atribuído: ${data.responsavel_id || 'O Mesmo Usuário logado'}. Obs: ${data.observacoes || ''}`
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/medicoes');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/pedidos/${data.pedido_id}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/agenda'); // Adicionado atualizar a Agenda!
        return {
            success: true,
            message: 'Medição Agendada!'
        };
    } catch (err) {
        return {
            success: false,
            message: 'Erro interno no Agendamento.'
        };
    }
}
async function concluirMedicaoAction(rawData) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return {
            success: false,
            message: 'Usuário não autenticado.'
        };
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$medicao_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concluirMedicaoSchema"].safeParse(rawData);
        if (!parsed.success) return {
            success: false,
            message: 'Dados inválidos.'
        };
        const data = parsed.data;
        // Busca o pedido base da medição para o evento sourcing
        const { data: medicaoBase } = await supabase.from('medicoes_v2').select('pedido_id').eq('id', data.medicao_id).single();
        if (!medicaoBase) return {
            success: false,
            message: 'Medição não encontrada.'
        };
        // Atualiza a Medição
        const { error: updateErr } = await supabase.from('medicoes_v2').update({
            status: data.status,
            pendencias_obra: data.pendencias_obra || null,
            apto_para_projeto: data.apto_para_projeto,
            updated_at: new Date().toISOString()
        }).eq('id', data.medicao_id);
        if (updateErr) return {
            success: false,
            message: 'Erro ao fechar medição.'
        };
        // Registra o Evento Imutável - (Saída de Custódia / Handover)
        await supabase.from('eventos_operacionais').insert({
            pedido_id: medicaoBase.pedido_id,
            usuario_id: user.id,
            etapa_atual: data.apto_para_projeto ? 'Fila de Projeto' : 'Aguardando Ajuste de Obra (Projeto Bloqueado)',
            tipo_evento: data.status === 'Concluida' ? 'Conclusão de Medição' : 'Medição Frustrada',
            pendencia_motivo: data.pendencias_obra || null,
            observacoes: `Status da Obra: ${data.apto_para_projeto ? 'Apta para Projeto' : 'Inapta/Com Pendências'}`
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/medicoes');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/pedidos/${medicaoBase.pedido_id}`);
        return {
            success: true,
            message: `Medição fechada com sucesso (${data.status}).`
        };
    } catch (err) {
        return {
            success: false,
            message: 'Erro interno ao Concluir Medição.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    aprovarPedidoAction,
    agendarMedicaoAction,
    concluirMedicaoAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(aprovarPedidoAction, "407e1cce73c3253b5d5b10841c5ace7ee08e0f21bd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(agendarMedicaoAction, "40d10bf358c289821df206340affbf3a6b1b309dc1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(concluirMedicaoAction, "40c74d38ea4aef1fcabc278541289b93babb2d8d82", null);
}),
"[project]/.next-internal/server/app/(dashboard)/pedidos/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/medicao.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$medicao$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/medicao.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/(dashboard)/pedidos/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/medicao.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "407e1cce73c3253b5d5b10841c5ace7ee08e0f21bd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$medicao$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aprovarPedidoAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$pedidos$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$medicao$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/pedidos/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/medicao.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$medicao$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/medicao.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_aaa2394c._.js.map