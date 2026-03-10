module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/lib/validations/pedido_v2.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPedidoComercialSchema",
    ()=>createPedidoComercialSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const createPedidoComercialSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    cliente_nome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, 'O nome do cliente é obrigatório e deve ter no mínimo 3 caracteres.'),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    documento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    endereco_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    responsavel_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status_comercial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Orçamento',
        'Aguardando Aprovação',
        'Aprovado',
        'Cancelado'
    ]),
    data_prometida: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    urgencia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Baixa',
        'Normal',
        'Alta'
    ]),
    observacoes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
}),
"[project]/app/actions/data:09d57f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "criarPedidoComercial",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d7a1815c5ab2a4cc2fa627d115d61490da51c58f":"criarPedidoComercial"},"app/actions/pedidos_v2.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d7a1815c5ab2a4cc2fa627d115d61490da51c58f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "criarPedidoComercial");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGVkaWRvc192Mi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVQZWRpZG9Db21lcmNpYWxTY2hlbWEgfSBmcm9tICdAL2xpYi92YWxpZGF0aW9ucy9wZWRpZG9fdjInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyUGVkaWRvQ29tZXJjaWFsKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIDEuIE9idGVyIHVzdcOhcmlvIGxvZ2FkbyAoT2JyaWdhdMOzcmlvIHBhcmEgbyBFdmVudCBTb3VyY2luZylcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIEV4dHJhaXIgZGFkb3MgYnJ1dG9zXHJcbiAgICBjb25zdCByYXdEYXRhID0ge1xyXG4gICAgICBjbGllbnRlX25vbWU6IGZvcm1EYXRhLmdldCgnY2xpZW50ZV9ub21lJykgYXMgc3RyaW5nLFxyXG4gICAgICB0ZWxlZm9uZTogZm9ybURhdGEuZ2V0KCd0ZWxlZm9uZScpIGFzIHN0cmluZyxcclxuICAgICAgZG9jdW1lbnRvOiBmb3JtRGF0YS5nZXQoJ2RvY3VtZW50bycpIGFzIHN0cmluZyxcclxuICAgICAgZW5kZXJlY29fb2JyYTogZm9ybURhdGEuZ2V0KCdlbmRlcmVjb19vYnJhJykgYXMgc3RyaW5nLFxyXG4gICAgICByZXNwb25zYXZlbF9vYnJhOiBmb3JtRGF0YS5nZXQoJ3Jlc3BvbnNhdmVsX29icmEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHN0YXR1c19jb21lcmNpYWw6IGZvcm1EYXRhLmdldCgnc3RhdHVzX2NvbWVyY2lhbCcpIGFzIHN0cmluZyxcclxuICAgICAgZGF0YV9wcm9tZXRpZGE6IGZvcm1EYXRhLmdldCgnZGF0YV9wcm9tZXRpZGEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHVyZ2VuY2lhOiBmb3JtRGF0YS5nZXQoJ3VyZ2VuY2lhJykgYXMgc3RyaW5nLFxyXG4gICAgICBvYnNlcnZhY29lczogZm9ybURhdGEuZ2V0KCdvYnNlcnZhY29lcycpIGFzIHN0cmluZyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gMy4gVmFsaWRhciB2aWEgWm9kXHJcbiAgICBjb25zdCByZXN1bHQgPSBjcmVhdGVQZWRpZG9Db21lcmNpYWxTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xyXG4gICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhZG9zIGRlIGVudHJhZGEgaW52w6FsaWRvcy4gVmVyaWZpcXVlIG9zIGNhbXBvcy4nIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGE7XHJcblxyXG4gICAgLy8gMy41LiBFeHRyYWlyIFBERiBJbi1NZW1vcnlcclxuICAgIC8vIE5PVk8gRkxVWE8gKEhJTCk6IE8gUERGIGrDoSBmb2kgZXh0cmHDrWRvIHZpYSAncHJldmlld1BkZkRhdGFBY3Rpb24nIG5hIFVJLiBPIGFycXVpdm9cclxuICAgIC8vIHZpYWphIG5vIEZvcm1EYXRhIGNhc28gcXVlaXJhbW9zIHNhbHZhciBubyBidWNrZXQgZnV0dXJhbWVudGUsIG1hcyBwYXJhIEN1c3TDs2RpYSBhcGVuYXMsIG7Do28gcmVjYXJyZWdhbW9zIHRleHRvIGFxdWkuXHJcbiAgICAvLyBBc3N1bWltb3MgYSBjdXJhZG9yaWEgZG8gT3BlcmFkb3IuXHJcbiAgICBjb25zdCBhcnF1aXZvUGRmID0gZm9ybURhdGEuZ2V0KCdhcnF1aXZvUGRmJykgYXMgRmlsZSB8IG51bGw7XHJcbiAgICBjb25zdCBpc0hpbEltcG9ydCA9IGFycXVpdm9QZGYgJiYgYXJxdWl2b1BkZi5zaXplID4gMDtcclxuXHJcbiAgICAvLyA0LiBJbmljaWFyIHRyYW5zYcOnw6NvIChTdXBhYmFzZSBSUEMgb3UgTXVsdGktaW5zZXJ0IHZpYSBGS3MpXHJcbiAgICAvLyBQcm9jdXJhciBvdSBDcmlhciBDbGllbnRlXHJcbiAgICBsZXQgY2xpZW50ZUlkID0gbnVsbDtcclxuICAgIGlmIChkYXRhLmNsaWVudGVfbm9tZSkge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IG5vdm9DbGllbnRlLCBlcnJvcjogY2xpZW50ZUVyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnY2xpZW50ZXMnKVxyXG4gICAgICAgIC5pbnNlcnQoeyBcclxuICAgICAgICAgIG5vbWU6IGRhdGEuY2xpZW50ZV9ub21lLCBcclxuICAgICAgICAgIHRlbGVmb25lOiBkYXRhLnRlbGVmb25lIHx8IG51bGwsIFxyXG4gICAgICAgICAgZG9jdW1lbnRvOiBkYXRhLmRvY3VtZW50byB8fCBudWxsIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuICAgICAgICBcclxuICAgICAgaWYgKGNsaWVudGVFcnIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBhbyBjYWRhc3RyYXIgQ2xpZW50ZS4nIH07XHJcbiAgICAgIGNsaWVudGVJZCA9IG5vdm9DbGllbnRlLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2N1cmFyIG91IENyaWFyIE9icmEgKEF0cmVsYWRhIGFvIENsaWVudGUpXHJcbiAgICBsZXQgb2JyYUlkID0gbnVsbDtcclxuICAgIGlmIChjbGllbnRlSWQgJiYgKGRhdGEuZW5kZXJlY29fb2JyYSB8fCBkYXRhLnJlc3BvbnNhdmVsX29icmEpKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbm92YU9icmEsIGVycm9yOiBvYnJhRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdvYnJhcycpXHJcbiAgICAgICAgLmluc2VydCh7IFxyXG4gICAgICAgICAgY2xpZW50ZV9pZDogY2xpZW50ZUlkLCBcclxuICAgICAgICAgIGVuZGVyZWNvOiBkYXRhLmVuZGVyZWNvX29icmEgfHwgbnVsbCwgXHJcbiAgICAgICAgICByZXNwb25zYXZlbF9vYnJhOiBkYXRhLnJlc3BvbnNhdmVsX29icmEgfHwgbnVsbCBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zZWxlY3QoJ2lkJylcclxuICAgICAgICAuc2luZ2xlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgIGlmIChvYnJhRXJyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gYW8gY2FkYXN0cmFyIE9icmEuJyB9O1xyXG4gICAgICBvYnJhSWQgPSBub3ZhT2JyYS5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA1LiBDYWRhc3RyYXIgUGVkaWRvXHJcbiAgICBjb25zdCB7IGRhdGE6IG5vdm9QZWRpZG8sIGVycm9yOiBwZWRpZG9FcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwZWRpZG9zX3YyJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgY2xpZW50ZV9pZDogY2xpZW50ZUlkLFxyXG4gICAgICAgIG9icmFfaWQ6IG9icmFJZCxcclxuICAgICAgICBzdGF0dXNfY29tZXJjaWFsOiBkYXRhLnN0YXR1c19jb21lcmNpYWwgfHwgJ09yw6dhbWVudG8nLFxyXG4gICAgICAgIGRhdGFfcHJvbWV0aWRhOiBkYXRhLmRhdGFfcHJvbWV0aWRhID8gbmV3IERhdGUoZGF0YS5kYXRhX3Byb21ldGlkYSkudG9JU09TdHJpbmcoKSA6IG51bGwsXHJcbiAgICAgICAgdXJnZW5jaWE6IGRhdGEudXJnZW5jaWEsXHJcbiAgICAgICAgb2JzZXJ2YWNvZXM6IGRhdGEub2JzZXJ2YWNvZXMgfHwgbnVsbCxcclxuICAgICAgICB0ZXh0b19leHRyYWlkbzogaXNIaWxJbXBvcnQgPyBcIltFWFRSQcOHw4NPIEhJTCAtIFJFVklTQURPIFBFTE8gT1BFUkFET1JdXCIgOiBudWxsLFxyXG4gICAgICAgIGNyZWF0ZWRfYnk6IHVzZXIuaWRcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHBlZGlkb0VyciB8fCAhbm92b1BlZGlkbykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIFBlZGlkbyBWMjpcIiwgcGVkaWRvRXJyKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gYW8gZ2VyYXIgbyBQZWRpZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gNS41IEdBVElMSE8gREUgTkVHw5NDSU86IEZpbGEgZG8gUENQIChBZ2VuZGEgZGUgTWVkacOnw6NvKVxyXG4gICAgLy8gT3BjaW9uYWxtZW50ZSBwb2RlbW9zIGxlciB1bWEgZmxhZyBcInByZWNpc2FfbWVkaWNhb1wiLCBtYXMgcG9yIHBhZHLDo29cclxuICAgIC8vIHNlIGZvcm1vcyBkZXNwYWNoYXIgcGFyYSBvIFBDUCwgbyBzaXN0ZW1hIGluc2VyZSBhIG1lZGnDp8Ojby5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgeyBlcnJvcjogbWVkaWNhb0VyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ21lZGljb2VzX3YyJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgcGVkaWRvX2lkOiBub3ZvUGVkaWRvLmlkLFxyXG4gICAgICAgIHN0YXR1czogJ1BlbmRlbnRlJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAobWVkaWNhb0Vycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdmlzbzogRmFsaGEgYW8gaW5zZXJpciBuYSBGaWxhIGRlIE1lZGnDp8Ojb1wiLCBtZWRpY2FvRXJyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIDYuIE8gQ09SQcOHw4NPIERPIFNJU1RFTUEgLSBFVkVOVCBTT1VSQ0lOR1xyXG4gICAgLy8gUmVnaXN0cmFyIG8gZXZlbnRvIG9wZXJhY2lvbmFsIGluYXVndXJhbFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCB0aXBvRXZlbnRvU3RyID0gaXNIaWxJbXBvcnQgPyAnSW1wb3J0YcOnw6NvIEhJTCAoQXV0by1GaWxsIFJldmlzYWRvKScgOiBgRW50cmFkYSBDb21lcmNpYWwgTWFudWFsYDtcclxuICAgIFxyXG4gICAgY29uc3QgeyBlcnJvcjogZXZlbnRvRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnZXZlbnRvc19vcGVyYWNpb25haXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZCxcclxuICAgICAgICAgIHVzdWFyaW9faWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBldGFwYV9hdHVhbDogJ0ZpbGEgZGUgTWVkacOnw6NvJywgLy8gQXR1YWxpemFkbyBwYXJhIHJlZmxldGlyIGEgaWRhIGFvIFBDUFxyXG4gICAgICAgICAgdGlwb19ldmVudG86IHRpcG9FdmVudG9TdHIsXHJcbiAgICAgICAgICBvYnNlcnZhY29lczogYFBlZGlkby9PcsOnYW1lbnRvIHJlZ2lzdHJhZG8gbm8gc2lzdGVtYSB2aWEgUGxhdGFmb3JtYS4gU3RhdHVzOiAke2RhdGEuc3RhdHVzX2NvbWVyY2lhbH0uICR7aXNIaWxJbXBvcnQgPyAnT3MgZGFkb3MgZm9yYW0gYXV0by1wcmVlbmNoaWRvcyBlIHJldmlzYWRvcyBjb20gc3VjZXNzbyBwZWxvIE9wZXJhZG9yIChISUwpLicgOiAnJ30gRW52aWFkbyBhdXRvbWF0aWNhbWVudGUgcGFyYSBGaWxhIGRlIE1lZGnDp8Ojby5gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmIChldmVudG9FcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBHcmF2aXNzaW1vOiBFdmVudG8gU291cmNpbmcgZmFsaG91XCIsIGV2ZW50b0Vycik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV2YWxpZGEgYSB0YWJlbGEgZGUgcGVkaWRvc1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wZWRpZG9zJyk7XHJcbiAgICAvLyBSZXZhbGlkYSBhIGFnZW5kYSBkZSBtZWRpw6fDo29cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWdlbmRhJyk7XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBtZXNzYWdlOiAnUGVkaWRvIGdlcmFkbyBlIGVudmlhZG8gcGFyYSBGaWxhIGRlIEFnZW5kYW1lbnRvIScsXHJcbiAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZFxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNhdGFzdHLDs2ZpY28gZW0gY3JpYXJQZWRpZG9Db21lcmNpYWw6JywgZXJyKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBpbmVzcGVyYWRvIGludGVybm8gZG8gU2Vydmlkb3IuJyB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQU1zQixpTUFBQSJ9
}),
"[project]/app/actions/data:e521a9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "previewPdfDataAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4034c1fb706deae2b5f51d7a21686abab84dbc6242":"previewPdfDataAction"},"app/actions/parser.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4034c1fb706deae2b5f51d7a21686abab84dbc6242", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "previewPdfDataAction");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGFyc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xyXG5jb25zdCBQREZQYXJzZXIgPSByZXF1aXJlKCdwZGYyanNvbicpO1xyXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXZpZXdQZGZEYXRhQWN0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdhcnF1aXZvUGRmJykgYXMgRmlsZTtcclxuICAgICAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1zZzogJ05lbmh1bSBhcnF1aXZvIGVuY29udHJhZG8gbm8gZm9ybXVsw6FyaW8uJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGRmUGFyc2VyID0gbmV3IFBERlBhcnNlcihudWxsLCAxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBkZlBhcnNlci5vbihcInBkZlBhcnNlcl9kYXRhRXJyb3JcIiwgKGVyckRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gbm8gUERGUGFyc2VyOlwiLCBlcnJEYXRhLnBhcnNlckVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIkZhbGhhIGFvIGV4dHJhaXIgdGV4dG8gZG8gUERGLlwiIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBkZlBhcnNlci5vbihcInBkZlBhcnNlcl9kYXRhUmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHBkZlBhcnNlci5nZXRSYXdUZXh0Q29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZWdleCAxOiBDbGllbnRlIE1hcGVhZG8gKFBlbGEgcXVlYnJhIGRlIGxpbmhhIGRvIFBERiBUZXN0KVxyXG4gICAgICAgICAgICAgICAgLy8gRXhlbXBsbzogNTk1LjQ5MC43NjAtOTFBTkEgUEFVTEEgU0FOVElOIERBIFNJTFZFSVJBXFxuQmFpcnJvLi4uXHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50ZV9ub21lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkb2N1bWVudG8gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50TWF0Y2ggPSB0ZXh0Lm1hdGNoKC8oW1xcZFxcLlxcLVxcL10rKShbQS1aw4AtxbhcXHNdKylcXHI/XFxuQmFpcnJvLyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpZW50TWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudG8gPSBjbGllbnRNYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50ZV9ub21lID0gY2xpZW50TWF0Y2hbMl0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlZ2V4IDI6IEVuZGVyZcOnbyAoUGVsYSBpbmRpY2HDp8OjbyAnRW5kZXJlw6dvXFxzKy4uLicgYXTDqSBCYWlycm8pXHJcbiAgICAgICAgICAgICAgICAvLyBFeGVtcGxvOiBFbmRlcmXDp28gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhaXJybyAvIERpc3RyaXRvICAgICAgIEZvbmVcXHJcXG5BdmVuaWRhIFByZWZlaXRvIEV2YW5kcm8gQmVociwgNDI3OSAtIFJVQSBEIExPVEUgODcgLi4uXHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kZXJlY29fb2JyYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21vIHBvZGUgaGF2ZXIgbGl4byB2aXN1YWwgbmEgZm9ybWF0YcOnw6NvIGRlIHRhYmVsYSwgcGVnYXJlbW9zIGEgcHLDs3hpbWEgbGluaGEgcMOzcy1jYWJlY2FsaG9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZGVyZWNvU3BsaXQgPSB0ZXh0LnNwbGl0KC9FbmRlcmXDp29cXHMrQmFpcnJvIFxcLyBEaXN0cml0b1xccytGb25lLyk7XHJcbiAgICAgICAgICAgICAgICBpZihlbmRlcmVjb1NwbGl0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5oYUVuZCA9IGVuZGVyZWNvU3BsaXRbMV0udHJpbSgpLnNwbGl0KCdcXG4nKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBlbmRlcmVjb19vYnJhID0gbGluaGFFbmQuc3BsaXQoJyAgICAgICAgICAnKVswXS50cmltKCk7IC8vIFNlcGFyYSBkbyBCYWlycm8gcGVsb3MgTiBUYWJzXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGVudGFyIHVtYSBjYXB0dXJhIG1haXMgZ2Vuw6lyaWNhIGNhc28gYSBwcmltZWlyYSBmYWxoZVxyXG4gICAgICAgICAgICAgICAgaWYoIWVuZGVyZWNvX29icmEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRFbmRNYXRjaCA9IHRleHQubWF0Y2goL0F2ZW5pZGEoLipMT1RFXFxzKlxcZCspL2kpIHx8IHRleHQubWF0Y2goL1J1YSguKkxPVEVcXHMqXFxkKykvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKGFsdEVuZE1hdGNoKSBlbmRlcmVjb19vYnJhID0gYWx0RW5kTWF0Y2hbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudGVfbm9tZTogY2xpZW50ZV9ub21lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudG86IGRvY3VtZW50byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kZXJlY29fb2JyYTogZW5kZXJlY29fb2JyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdGVkX3RleHQ6IHRleHQuc3Vic3RyaW5nKDAsIDE1MDApIC8vIFByZXZpZXcgVGV4dCBmb3IgREIgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gU3RhcnQgcGFyc2luZ1xyXG4gICAgICAgICAgICBwZGZQYXJzZXIucGFyc2VCdWZmZXIoYnVmZmVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gaW50ZXJubyBubyBwcmV2aWV3OlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1zZzogJ0ZhbGhhIGNyw610aWNhIGFvIGxlciBQREYgaW4tbWVtb3J5LicgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQU1zQixpTUFBQSJ9
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NovoPedidoComercialForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations/pedido_v2.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$09d57f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:09d57f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e521a9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:e521a9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function NovoPedidoComercialForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serverState, setServerState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: null,
        msg: ''
    });
    // Drag and Drop States
    const [visualFile, setVisualFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Human-in-the-loop AutoFill States
    const [isExtracting, setIsExtracting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoFilledFields, setAutoFilledFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { register, handleSubmit, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPedidoComercialSchema"]),
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
    const handleFileSelection = async (f)=>{
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
        // HUMAN IN THE LOOP: Auto-Fill
        await processPdfForPreview(f);
    };
    const processPdfForPreview = async (f)=>{
        setIsExtracting(true);
        setServerState({
            type: null,
            msg: 'Lendo dados do ERP (In-Memory)...'
        });
        try {
            const formData = new FormData();
            formData.append('arquivoPdf', f);
            const resultRaw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e521a9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["previewPdfDataAction"])(formData);
            const result = resultRaw;
            if (result.success && result.data) {
                const filled = [];
                if (result.data.cliente_nome) {
                    setValue('cliente_nome', result.data.cliente_nome, {
                        shouldValidate: true
                    });
                    filled.push('cliente_nome');
                }
                if (result.data.documento) {
                    setValue('documento', result.data.documento, {
                        shouldValidate: true
                    });
                    filled.push('documento');
                }
                if (result.data.endereco_obra) {
                    setValue('endereco_obra', result.data.endereco_obra, {
                        shouldValidate: true
                    });
                    filled.push('endereco_obra');
                }
                setAutoFilledFields(filled);
                setServerState({
                    type: 'success',
                    msg: 'Dados extraídos! Por favor, revise o formulário abaixo antes de salvar.'
                });
            } else {
                setServerState({
                    type: 'error',
                    msg: result.msg || 'Falha ao ler o PDF.'
                });
            }
        } catch (error) {
            setServerState({
                type: 'error',
                msg: 'Erro de conexão com o Parser.'
            });
        } finally{
            setIsExtracting(false);
        }
    };
    const clearFile = ()=>{
        setVisualFile(null);
        setAutoFilledFields([]);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };
    const onSubmit = async (data)=>{
        setIsSubmitting(true);
        setServerState({
            type: null,
            msg: ''
        });
        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value])=>{
                if (value !== undefined && value !== null && value !== '') {
                    formData.append(key, value);
                }
            });
            if (visualFile) {
                formData.append('arquivoPdf', visualFile);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$09d57f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["criarPedidoComercial"])(formData);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 border-b border-zinc-800 pb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-zinc-100 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                className: "text-violet-500 w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this),
                            "Entrada Comercial"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-400 mt-2 leading-relaxed",
                        children: "Cadastre um orçamento ou pedido comercial. Um evento inaugural de custodia será gerado automaticamente no diário de operações para garantir a rastreabilidade total."
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 bg-zinc-950/40 p-5 rounded-xl border border-zinc-800/80 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-violet-400 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    " 1. Importação Inteligente (Módulo ERP)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-400 mb-2",
                                children: "Arraste o orçamento do ERP primeiro. O sistema lerá o PDF em memória e preencherá os dados para sua revisão."
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            !visualFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDragOver: handleDragOver,
                                onDragLeave: handleDragLeave,
                                onDrop: handleDrop,
                                onClick: ()=>fileInputRef.current?.click(),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors w-full h-32", isDragging ? "border-violet-500 bg-violet-500/10" : "border-zinc-700 bg-zinc-900/50 hover:border-violet-500/50 hover:bg-violet-900/10"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 mb-2", isDragging ? "text-violet-500" : "text-zinc-500")
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-zinc-300",
                                        children: isDragging ? 'Solte o arquivo PDF aqui' : 'Clique ou Solte o PDF do ERP aqui para Extração Automática'
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 178,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 181,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 167,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border border-emerald-500/30 bg-emerald-500/5 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-emerald-500/20 rounded-lg",
                                                children: isExtracting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-5 h-5 text-emerald-400 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 53
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-5 h-5 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 117
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 196,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-emerald-200",
                                                        children: visualFile.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-emerald-500/70",
                                                        children: isExtracting ? 'Extraindo dados espaciais...' : 'Extração concluída. Revise o formulário.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 199,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 195,
                                        columnNumber: 29
                                    }, this),
                                    !isExtracting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearFile,
                                        className: "p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors shrink-0",
                                        "aria-label": "Remover arquivo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                            lineNumber: 213,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 207,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 194,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 opacity-90 hover:opacity-100 transition-opacity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    " 2. Revisão de Cliente e Obra"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Nome do Cliente *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 227,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('cliente_nome'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors", errors.cliente_nome ? "border-red-500/50" : autoFilledFields.includes('cliente_nome') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500"),
                                                placeholder: "Ex: Construtora Apex"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 228,
                                                columnNumber: 29
                                            }, this),
                                            errors.cliente_nome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-400",
                                                children: errors.cliente_nome.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 236,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Telefone"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 240,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('telefone'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors",
                                                placeholder: "(00) 00000-0000"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 241,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 239,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300 flex items-center gap-2",
                                                children: [
                                                    "Documento (Opcional)",
                                                    autoFilledFields.includes('documento') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded",
                                                        children: "Auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 76
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 249,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('documento'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors", autoFilledFields.includes('documento') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500"),
                                                placeholder: "CPF ou CNPJ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 253,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 248,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 md:col-span-2 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300 flex items-center gap-2",
                                                children: [
                                                    "Endereço da Obra",
                                                    autoFilledFields.includes('endereco_obra') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded",
                                                        children: "Auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 80
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 264,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('endereco_obra'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors", autoFilledFields.includes('endereco_obra') ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-800 focus:border-violet-500"),
                                                placeholder: "Ex: Av. Paulista, 1000 - Apto 34"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 268,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 263,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Arquiteto / Responsável"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 279,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('responsavel_obra'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors",
                                                placeholder: "Ex: Arq. Juliana"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 280,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 278,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 opacity-90 hover:opacity-100 transition-opacity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 292,
                                        columnNumber: 25
                                    }, this),
                                    " 3. Detalhes Básicos do Acordo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 291,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Status Comercial"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 297,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                ...register('status_comercial'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Orçamento",
                                                        children: "Apenas Orçamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Aguardando Aprovação",
                                                        children: "Aguardando Aprovação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Aprovado",
                                                        children: "Venda Aprovada (Iniciar)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 298,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 296,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "w-3 h-3 text-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 106
                                                    }, this),
                                                    " Nível de Urgência"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 309,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                ...register('urgencia'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Baixa",
                                                        children: "Baixa Prioridade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Normal",
                                                        children: "Fluxo Normal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Alta",
                                                        children: "Alta Urgência"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 310,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Data Prometida (Entrega)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 321,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                ...register('data_prometida'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors [color-scheme:dark]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 322,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 320,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 md:col-span-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Observações / Escopo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 330,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ...register('observacoes'),
                                                rows: 3,
                                                placeholder: "Detalhes adicionais, descritivo de materiais, formato de pagamento...",
                                                className: "w-full custom-scrollbar bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-zinc-200 outline-none focus:border-violet-500 transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                                lineNumber: 331,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 329,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 290,
                        columnNumber: 17
                    }, this),
                    serverState.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-md text-sm font-medium border flex items-center gap-2", serverState.type === 'error' ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"),
                        children: [
                            serverState.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                lineNumber: 349,
                                columnNumber: 60
                            }, this),
                            serverState.msg
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 345,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-6 border-t border-zinc-800 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-violet-900/20",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                                        lineNumber: 361,
                                        columnNumber: 31
                                    }, this),
                                    " Registrando no Sistema..."
                                ]
                            }, void 0, true) : 'Criar Entrada Comercial'
                        }, void 0, false, {
                            fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                            lineNumber: 355,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pedidos_v2/NovoPedidoComercialForm.tsx",
        lineNumber: 145,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad621b9d._.js.map