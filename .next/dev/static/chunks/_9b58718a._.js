(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/validations/pedido_v2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPedidoComercialSchema",
    ()=>createPedidoComercialSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const createPedidoComercialSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    cliente_nome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, 'O nome do cliente é obrigatório e deve ter no mínimo 3 caracteres.'),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    documento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    endereco_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    responsavel_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status_comercial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Orçamento',
        'Aguardando Aprovação',
        'Aprovado',
        'Cancelado'
    ]).optional().default('Orçamento'),
    data_prometida: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    urgencia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Baixa',
        'Normal',
        'Alta'
    ]).optional().default('Normal'),
    observacoes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:1905f7 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "criarPedidoComercial",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d7a1815c5ab2a4cc2fa627d115d61490da51c58f":"criarPedidoComercial"},"app/actions/pedidos_v2.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d7a1815c5ab2a4cc2fa627d115d61490da51c58f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "criarPedidoComercial");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGVkaWRvc192Mi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVQZWRpZG9Db21lcmNpYWxTY2hlbWEgfSBmcm9tICdAL2xpYi92YWxpZGF0aW9ucy9wZWRpZG9fdjInO1xyXG5jb25zdCBwZGZQYXJzZSA9IHJlcXVpcmUoJ3BkZi1wYXJzZScpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyUGVkaWRvQ29tZXJjaWFsKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIDEuIE9idGVyIHVzdcOhcmlvIGxvZ2FkbyAoT2JyaWdhdMOzcmlvIHBhcmEgbyBFdmVudCBTb3VyY2luZylcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIEV4dHJhaXIgZGFkb3MgYnJ1dG9zXHJcbiAgICBjb25zdCByYXdEYXRhID0ge1xyXG4gICAgICBjbGllbnRlX25vbWU6IGZvcm1EYXRhLmdldCgnY2xpZW50ZV9ub21lJykgYXMgc3RyaW5nLFxyXG4gICAgICB0ZWxlZm9uZTogZm9ybURhdGEuZ2V0KCd0ZWxlZm9uZScpIGFzIHN0cmluZyxcclxuICAgICAgZG9jdW1lbnRvOiBmb3JtRGF0YS5nZXQoJ2RvY3VtZW50bycpIGFzIHN0cmluZyxcclxuICAgICAgZW5kZXJlY29fb2JyYTogZm9ybURhdGEuZ2V0KCdlbmRlcmVjb19vYnJhJykgYXMgc3RyaW5nLFxyXG4gICAgICByZXNwb25zYXZlbF9vYnJhOiBmb3JtRGF0YS5nZXQoJ3Jlc3BvbnNhdmVsX29icmEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHN0YXR1c19jb21lcmNpYWw6IGZvcm1EYXRhLmdldCgnc3RhdHVzX2NvbWVyY2lhbCcpIGFzIHN0cmluZyxcclxuICAgICAgZGF0YV9wcm9tZXRpZGE6IGZvcm1EYXRhLmdldCgnZGF0YV9wcm9tZXRpZGEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHVyZ2VuY2lhOiBmb3JtRGF0YS5nZXQoJ3VyZ2VuY2lhJykgYXMgc3RyaW5nLFxyXG4gICAgICBvYnNlcnZhY29lczogZm9ybURhdGEuZ2V0KCdvYnNlcnZhY29lcycpIGFzIHN0cmluZyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gMy4gVmFsaWRhciB2aWEgWm9kXHJcbiAgICBjb25zdCByZXN1bHQgPSBjcmVhdGVQZWRpZG9Db21lcmNpYWxTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xyXG4gICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhZG9zIGRlIGVudHJhZGEgaW52w6FsaWRvcy4gVmVyaWZpcXVlIG9zIGNhbXBvcy4nIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGE7XHJcblxyXG4gICAgLy8gMy41LiBFeHRyYWlyIFBERiBJbi1NZW1vcnlcclxuICAgIGNvbnN0IGFycXVpdm9QZGYgPSBmb3JtRGF0YS5nZXQoJ2FycXVpdm9QZGYnKSBhcyBGaWxlIHwgbnVsbDtcclxuICAgIGxldCB0ZXh0b19leHRyYWlkbzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICBcclxuICAgIGlmIChhcnF1aXZvUGRmICYmIGFycXVpdm9QZGYuc2l6ZSA+IDAgJiYgYXJxdWl2b1BkZi50eXBlID09PSAnYXBwbGljYXRpb24vcGRmJykge1xyXG4gICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYXJxdWl2b1BkZi5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcclxuICAgICAgICBjb25zdCBwZGZEYXRhID0gYXdhaXQgcGRmUGFyc2UoYnVmZmVyKTtcclxuICAgICAgICB0ZXh0b19leHRyYWlkbyA9IHBkZkRhdGEudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA0LiBJbmljaWFyIHRyYW5zYcOnw6NvIChTdXBhYmFzZSBSUEMgb3UgTXVsdGktaW5zZXJ0IHZpYSBGS3MpXHJcbiAgICAvLyBQcm9jdXJhciBvdSBDcmlhciBDbGllbnRlXHJcbiAgICBsZXQgY2xpZW50ZUlkID0gbnVsbDtcclxuICAgIGlmIChkYXRhLmNsaWVudGVfbm9tZSkge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IG5vdm9DbGllbnRlLCBlcnJvcjogY2xpZW50ZUVyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnY2xpZW50ZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoeyBcclxuICAgICAgICAgIG5vbWU6IGRhdGEuY2xpZW50ZV9ub21lLCBcclxuICAgICAgICAgIHRlbGVmb25lOiBkYXRhLnRlbGVmb25lIHx8IG51bGwsIFxyXG4gICAgICAgICAgZG9jdW1lbnRvOiBkYXRhLmRvY3VtZW50byB8fCBudWxsIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuICAgICAgICBcclxuICAgICAgaWYgKGNsaWVudGVFcnIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBhbyBjYWRhc3RyYXIgQ2xpZW50ZS4nIH07XHJcbiAgICAgIGNsaWVudGVJZCA9IG5vdm9DbGllbnRlLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2N1cmFyIG91IENyaWFyIE9icmEgKEF0cmVsYWRhIGFvIENsaWVudGUpXHJcbiAgICBsZXQgb2JyYUlkID0gbnVsbDtcclxuICAgIGlmIChjbGllbnRlSWQgJiYgKGRhdGEuZW5kZXJlY29fb2JyYSB8fCBkYXRhLnJlc3BvbnNhdmVsX29icmEpKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbm92YU9icmEsIGVycm9yOiBvYnJhRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdvYnJhcycpXHJcbiAgICAgICAgLmluc2VydCh7IFxyXG4gICAgICAgICAgY2xpZW50ZV9pZDogY2xpZW50ZUlkLCBcclxuICAgICAgICAgIGVuZGVyZWNvOiBkYXRhLmVuZGVyZWNvX29icmEgfHwgbnVsbCwgXHJcbiAgICAgICAgICByZXNwb25zYXZlbF9vYnJhOiBkYXRhLnJlc3BvbnNhdmVsX29icmEgfHwgbnVsbCBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgIGlmIChvYnJhRXJyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gYW8gY2FkYXN0cmFyIE9icmEuJyB9O1xyXG4gICAgICBvYnJhSWQgPSBub3ZhT2JyYS5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA1LiBDYWRhc3RyYXIgUGVkaWRvXHJcbiAgICBjb25zdCB7IGRhdGE6IG5vdm9QZWRpZG8sIGVycm9yOiBwZWRpZG9FcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwZWRpZG9zX3YyJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgY2xpZW50ZV9pZDogY2xpZW50ZUlkLFxyXG4gICAgICAgIG9icmFfaWQ6IG9icmFJZCxcclxuICAgICAgICBzdGF0dXNfY29tZXJjaWFsOiBkYXRhLnN0YXR1c19jb21lcmNpYWwgfHwgJ09yw6dhbWVudG8nLFxyXG4gICAgICAgIGRhdGFfcHJvbWV0aWRhOiBkYXRhLmRhdGFfcHJvbWV0aWRhID8gbmV3IERhdGUoZGF0YS5kYXRhX3Byb21ldGlkYSkudG9JU09TdHJpbmcoKSA6IG51bGwsXHJcbiAgICAgICAgdXJnZW5jaWE6IGRhdGEudXJnZW5jaWEsXHJcbiAgICAgICAgb2JzZXJ2YWNvZXM6IGRhdGEub2JzZXJ2YWNvZXMgfHwgbnVsbCxcclxuICAgICAgICB0ZXh0b19leHRyYWlkbzogdGV4dG9fZXh0cmFpZG8sXHJcbiAgICAgICAgY3JlYXRlZF9ieTogdXNlci5pZFxyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAocGVkaWRvRXJyIHx8ICFub3ZvUGVkaWRvKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gUGVkaWRvIFYyOlwiLCBwZWRpZG9FcnIpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBhbyBnZXJhciBvIFBlZGlkby4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyA2LiBPIENPUkHDh8ODTyBETyBTSVNURU1BIC0gRVZFTlQgU09VUkNJTkdcclxuICAgIC8vIFJlZ2lzdHJhciBvIGV2ZW50byBvcGVyYWNpb25hbCBpbmF1Z3VyYWxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgdGlwb0V2ZW50b1N0ciA9IHRleHRvX2V4dHJhaWRvID8gJ1BlZGlkbyBDcmlhZG8gdmlhIEVSUCAoQ29tIFBERiknIDogYEVudHJhZGEgQ29tZXJjaWFsIC0gJHtkYXRhLnN0YXR1c19jb21lcmNpYWx9YDtcclxuICAgIFxyXG4gICAgY29uc3QgeyBlcnJvcjogZXZlbnRvRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnZXZlbnRvc19vcGVyYWNpb25haXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZCxcclxuICAgICAgICAgIHVzdWFyaW9faWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBldGFwYV9hdHVhbDogJ1JlY2Vww6fDo28gQ29tZXJjaWFsJyxcclxuICAgICAgICAgIHRpcG9fZXZlbnRvOiB0aXBvRXZlbnRvU3RyLFxyXG4gICAgICAgICAgb2JzZXJ2YWNvZXM6IGBQZWRpZG8vT3LDp2FtZW50byByZWdpc3RyYWRvIG5vIHNpc3RlbWEgdmlhIFBsYXRhZm9ybWEuIFN0YXR1czogJHtkYXRhLnN0YXR1c19jb21lcmNpYWx9LiAke3RleHRvX2V4dHJhaWRvID8gJ0ZvcmFtIGV4dHJhw61kb3MgZGFkb3MgZG8gUERGIGVtIG1lbcOzcmlhLicgOiAnJ31gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmIChldmVudG9FcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBHcmF2aXNzaW1vOiBFdmVudG8gU291cmNpbmcgZmFsaG91XCIsIGV2ZW50b0Vycik7XHJcbiAgICAgICAgLy8gTyBpZGVhbCBzZXJpYSByb2xhciByb2xsYmFjayAoUlBDKSwgbWFzIHByYSBlc3NlIHNjb3BlLCB2YW1vcyBhcGVuYXMgbG9nYXIgZSBub3RpZmljYXIuXHJcbiAgICB9XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wZWRpZG9zLXYyJyk7XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBtZXNzYWdlOiAnUGVkaWRvIGUgRXZlbnRvIENvbWVyY2lhbCBnZXJhZG9zIGNvbSBzdWNlc3NvIScsXHJcbiAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZFxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNhdGFzdHLDs2ZpY28gZW0gY3JpYXJQZWRpZG9Db21lcmNpYWw6JywgZXJyKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBpbmVzcGVyYWRvIGludGVybm8gZG8gU2Vydmlkb3IuJyB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQU9zQixpTUFBQSJ9
}),
"[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NovoPedidoComercialForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations/pedido_v2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$1905f7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:1905f7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function NovoPedidoComercialForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serverState, setServerState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: null,
        msg: ''
    });
    // Drag and Drop States
    const [visualFile, setVisualFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPedidoComercialSchema"]),
        defaultValues: {
            status_comercial: 'Orçamento',
            urgencia: 'Normal',
            cliente_nome: ''
        }
    });
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelection(e.dataTransfer.files[0]);
        }
    };
    const handleFileSelection = (f)=>{
        if (f.type !== 'application/pdf') {
            setServerState({
                type: 'error',
                msg: 'Apenas arquivos PDF são aceitos.'
            });
            return;
        }
        setVisualFile(f);
        setServerState({
            type: null,
            msg: ''
        });
    };
    const clearFile = ()=>{
        setVisualFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };
    const onSubmit = async (data)=>{
        setIsSubmitting(true);
        setServerState({
            type: null,
            msg: ''
        });
        const formData = new FormData();
        Object.entries(data).forEach(([key, value])=>{
            if (value !== undefined && value !== null && value !== '') {
                formData.append(key, value);
            }
        });
        if (visualFile) {
            formData.append('arquivoPdf', visualFile);
        }
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$1905f7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["criarPedidoComercial"])(formData);
            if (res.success) {
                setServerState({
                    type: 'success',
                    msg: res.message
                });
                setTimeout(()=>{
                    // Mock redirect to the new V2 page that would exist
                    router.push('/pedidos');
                }, 1200);
            } else {
                setServerState({
                    type: 'error',
                    msg: res.message
                });
            }
        } catch (err) {
            setServerState({
                type: 'error',
                msg: 'Falha de comunicação.'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 border-b border-zinc-800 pb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-zinc-100 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                className: "text-violet-500 w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this),
                            "Entrada Comercial"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-400 mt-2 leading-relaxed",
                        children: "Cadastre um orçamento ou pedido comercial. Um evento inaugural de custodia será gerado automaticamente no diário de operações para garantir a rastreabilidade total."
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this),
                                    " Dados do Cliente e Obra"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Nome do Cliente *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('cliente_nome'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors", errors.cliente_nome && "border-red-500/50"),
                                                placeholder: "Ex: Construtora Apex"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 119,
                                                columnNumber: 29
                                            }, this),
                                            errors.cliente_nome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-400",
                                                children: errors.cliente_nome.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 124,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Telefone"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('telefone'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors",
                                                placeholder: "(00) 00000-0000"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Documento (Opcional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('documento'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors",
                                                placeholder: "CPF ou CNPJ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 md:col-span-2 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Endereço da Obra"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('endereco_obra'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors",
                                                placeholder: "Ex: Av. Paulista, 1000 - Apto 34"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 147,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Arquiteto / Responsável"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 155,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('responsavel_obra'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors",
                                                placeholder: "Ex: Arq. Juliana"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 156,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, this),
                                    " Detalhes do Acordo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Status Comercial"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                ...register('status_comercial'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Orçamento",
                                                        children: "Apenas Orçamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Aguardando Aprovação",
                                                        children: "Aguardando Aprovação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Aprovado",
                                                        children: "Venda Aprovada (Iniciar)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "w-3 h-3 text-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 106
                                                    }, this),
                                                    " Nível de Urgência"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 185,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                ...register('urgencia'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Baixa",
                                                        children: "Baixa Prioridade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Normal",
                                                        children: "Fluxo Normal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Alta",
                                                        children: "Alta Urgência"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 186,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Data Prometida (Entrega)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 197,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                ...register('data_prometida'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors [color-scheme:dark]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 198,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 196,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 md:col-span-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Observações / Escopo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 206,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ...register('observacoes'),
                                                rows: 3,
                                                placeholder: "Detalhes adicionais, descritivo de materiais, formato de pagamento...",
                                                className: "w-full custom-scrollbar bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 207,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 205,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 220,
                                        columnNumber: 25
                                    }, this),
                                    " Importação de PDF ERP"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this),
                            !visualFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDragOver: handleDragOver,
                                onDragLeave: handleDragLeave,
                                onDrop: handleDrop,
                                onClick: ()=>fileInputRef.current?.click(),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors w-full h-32", isDragging ? "border-violet-500 bg-violet-500/10" : "border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 hover:bg-zinc-900"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 mb-2", isDragging ? "text-violet-500" : "text-zinc-500")
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 234,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-zinc-300",
                                        children: isDragging ? 'Solte o arquivo PDF aqui' : 'Arraste o PDF do ERP ou clique para selecionar'
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 235,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "application/pdf",
                                        className: "hidden",
                                        ref: fileInputRef,
                                        onChange: (e)=>{
                                            if (e.target.files && e.target.files[0]) {
                                                handleFileSelection(e.target.files[0]);
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 238,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 224,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border border-zinc-700 bg-zinc-800/50 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-violet-500/20 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-5 h-5 text-violet-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 253,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-zinc-200",
                                                        children: visualFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-zinc-500",
                                                        children: [
                                                            (visualFile.size / 1024 / 1024).toFixed(2),
                                                            " MB • Processamento Efêmero Ativo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 256,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 252,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearFile,
                                        className: "p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors shrink-0",
                                        "aria-label": "Remover arquivo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                            lineNumber: 267,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 251,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this),
                    serverState.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-md text-sm font-medium border flex items-center gap-2", serverState.type === 'error' ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"),
                        children: [
                            serverState.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 279,
                                columnNumber: 60
                            }, this),
                            serverState.msg
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 275,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-6 border-t border-zinc-800 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-violet-900/20",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 291,
                                        columnNumber: 31
                                    }, this),
                                    " Registrando no Sistema..."
                                ]
                            }, void 0, true) : 'Criar Entrada Comercial'
                        }, void 0, false, {
                            fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                            lineNumber: 285,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 284,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
_s(NovoPedidoComercialForm, "6YkrlxgDkhtkiiGjPs1bZ2lU+nQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = NovoPedidoComercialForm;
var _c;
__turbopack_context__.k.register(_c, "NovoPedidoComercialForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9b58718a._.js.map