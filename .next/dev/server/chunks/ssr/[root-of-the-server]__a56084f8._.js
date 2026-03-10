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
    numero_orcamento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "O número do orçamento é obrigatório."),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    documento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    endereco_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    responsavel_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status_comercial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Orçamento',
        'Aguardando Aprovação',
        'Aprovado',
        'Em Produção',
        'Concluído',
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
"[project]/app/actions/data:677d6f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "atualizarPedidoComercial",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60d477880834ffd6889b797d42ea46826169acf68f":"atualizarPedidoComercial"},"app/actions/pedidos_v2.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60d477880834ffd6889b797d42ea46826169acf68f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "atualizarPedidoComercial");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGVkaWRvc192Mi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVQZWRpZG9Db21lcmNpYWxTY2hlbWEgfSBmcm9tICdAL2xpYi92YWxpZGF0aW9ucy9wZWRpZG9fdjInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyUGVkaWRvQ29tZXJjaWFsKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIDEuIE9idGVyIHVzdcOhcmlvIGxvZ2FkbyAoT2JyaWdhdMOzcmlvIHBhcmEgbyBFdmVudCBTb3VyY2luZylcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIEV4dHJhaXIgZGFkb3MgYnJ1dG9zXHJcbiAgICBjb25zdCByYXdEYXRhID0ge1xyXG4gICAgICBudW1lcm9fb3JjYW1lbnRvOiBmb3JtRGF0YS5nZXQoJ251bWVyb19vcmNhbWVudG8nKSBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudGVfbm9tZTogZm9ybURhdGEuZ2V0KCdjbGllbnRlX25vbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHRlbGVmb25lOiBmb3JtRGF0YS5nZXQoJ3RlbGVmb25lJykgYXMgc3RyaW5nLFxyXG4gICAgICBkb2N1bWVudG86IGZvcm1EYXRhLmdldCgnZG9jdW1lbnRvJykgYXMgc3RyaW5nLFxyXG4gICAgICBlbmRlcmVjb19vYnJhOiBmb3JtRGF0YS5nZXQoJ2VuZGVyZWNvX29icmEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHJlc3BvbnNhdmVsX29icmE6IGZvcm1EYXRhLmdldCgncmVzcG9uc2F2ZWxfb2JyYScpIGFzIHN0cmluZyxcclxuICAgICAgc3RhdHVzX2NvbWVyY2lhbDogZm9ybURhdGEuZ2V0KCdzdGF0dXNfY29tZXJjaWFsJykgYXMgc3RyaW5nLFxyXG4gICAgICBkYXRhX3Byb21ldGlkYTogZm9ybURhdGEuZ2V0KCdkYXRhX3Byb21ldGlkYScpIGFzIHN0cmluZyxcclxuICAgICAgdXJnZW5jaWE6IGZvcm1EYXRhLmdldCgndXJnZW5jaWEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIG9ic2VydmFjb2VzOiBmb3JtRGF0YS5nZXQoJ29ic2VydmFjb2VzJykgYXMgc3RyaW5nLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyAzLiBWYWxpZGFyIHZpYSBab2RcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNyZWF0ZVBlZGlkb0NvbWVyY2lhbFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XHJcbiAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGFkb3MgZGUgZW50cmFkYSBpbnbDoWxpZG9zLiBWZXJpZmlxdWUgb3MgY2FtcG9zLicgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuXHJcbiAgICAvLyAzLjUuIEV4dHJhaXIgUERGIEluLU1lbW9yeVxyXG4gICAgLy8gTk9WTyBGTFVYTyAoSElMKTogTyBQREYgasOhIGZvaSBleHRyYcOtZG8gdmlhICdwcmV2aWV3UGRmRGF0YUFjdGlvbicgbmEgVUkuIE8gYXJxdWl2b1xyXG4gICAgLy8gdmlhamEgbm8gRm9ybURhdGEgY2FzbyBxdWVpcmFtb3Mgc2FsdmFyIG5vIGJ1Y2tldCBmdXR1cmFtZW50ZSwgbWFzIHBhcmEgQ3VzdMOzZGlhIGFwZW5hcywgbsOjbyByZWNhcnJlZ2Ftb3MgdGV4dG8gYXF1aS5cclxuICAgIC8vIEFzc3VtaW1vcyBhIGN1cmFkb3JpYSBkbyBPcGVyYWRvci5cclxuICAgIGNvbnN0IGFycXVpdm9QZGYgPSBmb3JtRGF0YS5nZXQoJ2FycXVpdm9QZGYnKSBhcyBGaWxlIHwgbnVsbDtcclxuICAgIGNvbnN0IGlzSGlsSW1wb3J0ID0gYXJxdWl2b1BkZiAmJiBhcnF1aXZvUGRmLnNpemUgPiAwO1xyXG5cclxuICAgIC8vIDQuIEluaWNpYXIgdHJhbnNhw6fDo28gKFN1cGFiYXNlIFJQQyBvdSBNdWx0aS1pbnNlcnQgdmlhIEZLcylcclxuICAgIC8vIFByb2N1cmFyIG91IENyaWFyIENsaWVudGVcclxuICAgIGxldCBjbGllbnRlSWQgPSBudWxsO1xyXG4gICAgaWYgKGRhdGEuY2xpZW50ZV9ub21lKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbm92b0NsaWVudGUsIGVycm9yOiBjbGllbnRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdjbGllbnRlcycpXHJcbiAgICAgICAgLmluc2VydCh7IFxyXG4gICAgICAgICAgbm9tZTogZGF0YS5jbGllbnRlX25vbWUsIFxyXG4gICAgICAgICAgdGVsZWZvbmU6IGRhdGEudGVsZWZvbmUgfHwgbnVsbCwgXHJcbiAgICAgICAgICBkb2N1bWVudG86IGRhdGEuZG9jdW1lbnRvIHx8IG51bGwgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICBpZiAoY2xpZW50ZUVycikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGFvIGNhZGFzdHJhciBDbGllbnRlLicgfTtcclxuICAgICAgY2xpZW50ZUlkID0gbm92b0NsaWVudGUuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvY3VyYXIgb3UgQ3JpYXIgT2JyYSAoQXRyZWxhZGEgYW8gQ2xpZW50ZSlcclxuICAgIGxldCBvYnJhSWQgPSBudWxsO1xyXG4gICAgaWYgKGNsaWVudGVJZCAmJiAoZGF0YS5lbmRlcmVjb19vYnJhIHx8IGRhdGEucmVzcG9uc2F2ZWxfb2JyYSkpIHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBub3ZhT2JyYSwgZXJyb3I6IG9icmFFcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ29icmFzJylcclxuICAgICAgICAuaW5zZXJ0KHsgXHJcbiAgICAgICAgICBjbGllbnRlX2lkOiBjbGllbnRlSWQsIFxyXG4gICAgICAgICAgZW5kZXJlY286IGRhdGEuZW5kZXJlY29fb2JyYSB8fCBudWxsLCBcclxuICAgICAgICAgIHJlc3BvbnNhdmVsX29icmE6IGRhdGEucmVzcG9uc2F2ZWxfb2JyYSB8fCBudWxsIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuICAgICAgICBcclxuICAgICAgaWYgKG9icmFFcnIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBhbyBjYWRhc3RyYXIgT2JyYS4nIH07XHJcbiAgICAgIG9icmFJZCA9IG5vdmFPYnJhLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDUuIENhZGFzdHJhciBQZWRpZG9cclxuICAgIGNvbnN0IHsgZGF0YTogbm92b1BlZGlkbywgZXJyb3I6IHBlZGlkb0VyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3BlZGlkb3NfdjInKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBudW1lcm9fb3JjYW1lbnRvOiBkYXRhLm51bWVyb19vcmNhbWVudG8sXHJcbiAgICAgICAgY2xpZW50ZV9pZDogY2xpZW50ZUlkLFxyXG4gICAgICAgIG9icmFfaWQ6IG9icmFJZCxcclxuICAgICAgICBzdGF0dXNfY29tZXJjaWFsOiBkYXRhLnN0YXR1c19jb21lcmNpYWwgfHwgJ09yw6dhbWVudG8nLFxyXG4gICAgICAgIGRhdGFfcHJvbWV0aWRhOiBkYXRhLmRhdGFfcHJvbWV0aWRhID8gbmV3IERhdGUoZGF0YS5kYXRhX3Byb21ldGlkYSkudG9JU09TdHJpbmcoKSA6IG51bGwsXHJcbiAgICAgICAgdXJnZW5jaWE6IGRhdGEudXJnZW5jaWEsXHJcbiAgICAgICAgb2JzZXJ2YWNvZXM6IGRhdGEub2JzZXJ2YWNvZXMgfHwgbnVsbCxcclxuICAgICAgICB0ZXh0b19leHRyYWlkbzogaXNIaWxJbXBvcnQgPyBcIltFWFRSQcOHw4NPIEhJTCAtIFJFVklTQURPIFBFTE8gT1BFUkFET1JdXCIgOiBudWxsLFxyXG4gICAgICAgIGNyZWF0ZWRfYnk6IHVzZXIuaWRcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHBlZGlkb0Vycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIFBlZGlkbyBWMjpcIiwgcGVkaWRvRXJyKTtcclxuICAgICAgICBpZiAocGVkaWRvRXJyLmNvZGUgPT09ICcyMzUwNScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdKw6EgZXhpc3RlIHVtIHBlZGlkbyBjYWRhc3RyYWRvIGNvbSBlc3RlIG7Dum1lcm8gZGUgb3LDp2FtZW50by4nIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBhbyBnZXJhciBvIFBlZGlkby4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFub3ZvUGVkaWRvKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGFvIGdlcmFyIG8gUGVkaWRvLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIDUuNSBHQVRJTEhPIERFIE5FR8OTQ0lPOiBGaWxhIGRvIFBDUCAoQWdlbmRhIGRlIE1lZGnDp8OjbylcclxuICAgIC8vIEFwZW5hcyBzZSBvIHBlZGlkbyBqw6EgbmFzY2UgQXByb3ZhZG8gb3UgRW0gUHJvZHXDp8OjbyBlbGUgZW50cmEgbmEgRmlsYS5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgaWYgKGRhdGEuc3RhdHVzX2NvbWVyY2lhbCA9PT0gJ0Fwcm92YWRvJyB8fCBkYXRhLnN0YXR1c19jb21lcmNpYWwgPT09ICdFbSBQcm9kdcOnw6NvJykge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3I6IG1lZGljYW9FcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAuZnJvbSgnbWVkaWNvZXNfdjInKVxyXG4gICAgICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAnUEVOREVOVEUnXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1lZGljYW9FcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkF2aXNvOiBGYWxoYSBhbyBpbnNlcmlyIG5hIEZpbGEgZGUgTWVkacOnw6NvXCIsIG1lZGljYW9FcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIDYuIE8gQ09SQcOHw4NPIERPIFNJU1RFTUEgLSBFVkVOVCBTT1VSQ0lOR1xyXG4gICAgLy8gUmVnaXN0cmFyIG8gZXZlbnRvIG9wZXJhY2lvbmFsIGluYXVndXJhbFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCB0aXBvRXZlbnRvU3RyID0gaXNIaWxJbXBvcnQgPyAnSW1wb3J0YcOnw6NvIEhJTCAoQXV0by1GaWxsIFJldmlzYWRvKScgOiBgRW50cmFkYSBDb21lcmNpYWwgTWFudWFsYDtcclxuICAgIFxyXG4gICAgY29uc3QgeyBlcnJvcjogZXZlbnRvRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnZXZlbnRvc19vcGVyYWNpb25haXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZCxcclxuICAgICAgICAgIHVzdWFyaW9faWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBldGFwYV9hdHVhbDogJ0ZpbGEgZGUgTWVkacOnw6NvJywgLy8gQXR1YWxpemFkbyBwYXJhIHJlZmxldGlyIGEgaWRhIGFvIFBDUFxyXG4gICAgICAgICAgdGlwb19ldmVudG86IHRpcG9FdmVudG9TdHIsXHJcbiAgICAgICAgICBvYnNlcnZhY29lczogYFBlZGlkby9PcsOnYW1lbnRvIHJlZ2lzdHJhZG8gbm8gc2lzdGVtYSB2aWEgUGxhdGFmb3JtYS4gU3RhdHVzOiAke2RhdGEuc3RhdHVzX2NvbWVyY2lhbH0uICR7aXNIaWxJbXBvcnQgPyAnT3MgZGFkb3MgZm9yYW0gYXV0by1wcmVlbmNoaWRvcyBlIHJldmlzYWRvcyBjb20gc3VjZXNzbyBwZWxvIE9wZXJhZG9yIChISUwpLicgOiAnJ30gRW52aWFkbyBhdXRvbWF0aWNhbWVudGUgcGFyYSBGaWxhIGRlIE1lZGnDp8Ojby5gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmIChldmVudG9FcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBHcmF2aXNzaW1vOiBFdmVudG8gU291cmNpbmcgZmFsaG91XCIsIGV2ZW50b0Vycik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV2YWxpZGEgYSB0YWJlbGEgZGUgcGVkaWRvc1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wZWRpZG9zJyk7XHJcbiAgICAvLyBSZXZhbGlkYSBhIGFnZW5kYSBkZSBtZWRpw6fDo29cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWdlbmRhJyk7XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICBtZXNzYWdlOiAnUGVkaWRvIGdlcmFkbyBlIGVudmlhZG8gcGFyYSBGaWxhIGRlIEFnZW5kYW1lbnRvIScsXHJcbiAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZFxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNhdGFzdHLDs2ZpY28gZW0gY3JpYXJQZWRpZG9Db21lcmNpYWw6JywgZXJyKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBpbmVzcGVyYWRvIGludGVybm8gZG8gU2Vydmlkb3IuJyB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZVTsOHw5VFUyBERSBFREnDh8ODTyBFIEVYQ0xVU8ODTyAoU29mdCBEZWxldGUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4Y2x1aXJQZWRpZG9Db21lcmNpYWwocGVkaWRvSWQ6IHN0cmluZywgbW90aXZvOiBzdHJpbmcgPSAnTsOjbyBpbmZvcm1hZG8nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBpZiAoYXV0aEVycm9yIHx8ICF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVXN1w6FyaW8gbsOjbyBhdXRlbnRpY2Fkby4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNBZG1pbiA9IHVzZXI/LmFwcF9tZXRhZGF0YT8ucm9sZV9uYW1lID09PSAnYWRtaW4nIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI/LmVtYWlsID09PSAnbHVjYXNAbmV4dXN4cC5jb20uYnInIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj8uZW1haWwgPT09ICdhZG1pbkBtYXJtby5jb20nO1xyXG4gICAgaWYgKCFpc0FkbWluKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnT3BlcmHDp8OjbyBuw6NvIHBlcm1pdGlkYS4gQXBlbmFzIGFkbWluaXN0cmFkb3JlcyBwb2RlbSBleGNsdWlyIHBlZGlkb3MuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1c2NhciBvIHBlZGlkbyBhdHVhbCBwYXJhIG9idGVyIG8gbnVtZXJvX29yY2FtZW50b1xyXG4gICAgY29uc3QgeyBkYXRhOiBwZWRpZG9BdHVhbCwgZXJyb3I6IGdldEVyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncGVkaWRvc192MicpXHJcbiAgICAgICAgLnNlbGVjdCgnbnVtZXJvX29yY2FtZW50bycpXHJcbiAgICAgICAgLmVxKCdpZCcsIHBlZGlkb0lkKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuICAgIFxyXG4gICAgaWYgKGdldEVyciB8fCAhcGVkaWRvQXR1YWwpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1BlZGlkbyBuw6NvIGVuY29udHJhZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3Qgc3VmaXhvID0gYC1FWEMtJHt0aW1lc3RhbXB9YDtcclxuICAgIGNvbnN0IG5vdm9OdW1lcm8gPSBwZWRpZG9BdHVhbC5udW1lcm9fb3JjYW1lbnRvIFxyXG4gICAgICAgID8gYCR7cGVkaWRvQXR1YWwubnVtZXJvX29yY2FtZW50b30ke3N1Zml4b31gIFxyXG4gICAgICAgIDogYElELSR7cGVkaWRvSWQuc3Vic3RyaW5nKDAsOCkudG9VcHBlckNhc2UoKX0ke3N1Zml4b31gO1xyXG5cclxuICAgIC8vIFNvZnQgZGVsZXRlXHJcbiAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdwZWRpZG9zX3YyJylcclxuICAgICAgLnVwZGF0ZSh7IFxyXG4gICAgICAgIHN0YXR1c19jb21lcmNpYWw6ICdDYW5jZWxhZG8nLFxyXG4gICAgICAgIG51bWVyb19vcmNhbWVudG86IG5vdm9OdW1lcm8gXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgnaWQnLCBwZWRpZG9JZCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBleGNsdWlyIHBlZGlkbzpcIiwgdXBkYXRlRXJyKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBOw6NvIGZvaSBwb3Nzw612ZWwgZXhjbHVpciBvIHBlZGlkbzogJHt1cGRhdGVFcnIubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeSh1cGRhdGVFcnIpfWAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdWRpdG9yaWEgdmlhIEV2ZW50IFNvdXJjaW5nXHJcbiAgICBjb25zdCB7IGVycm9yOiBldmVudG9FcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdldmVudG9zX29wZXJhY2lvbmFpcycpXHJcbiAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgcGVkaWRvX2lkOiBwZWRpZG9JZCxcclxuICAgICAgICAgIHVzdWFyaW9faWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBldGFwYV9hdHVhbDogJ0V4Y2x1w61kbycsXHJcbiAgICAgICAgICB0aXBvX2V2ZW50bzogJ0V4Y2x1c8OjbyBkZSBQZWRpZG8nLFxyXG4gICAgICAgICAgb2JzZXJ2YWNvZXM6IGBQZWRpZG8gZXhjbHXDrWRvIChTb2Z0IERlbGV0ZSkgcGVsbyB1c3XDoXJpby4gTW90aXZvOiAke21vdGl2b31gXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmIChldmVudG9FcnIpIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIHJlZ2lzdHJhciBldmVudG8gZGUgZXhjbHVzw6NvXCIsIGV2ZW50b0Vycik7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wZWRpZG9zJyk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdQZWRpZG8gZXhjbHXDrWRvIGNvbSBzdWNlc3NvLicgfTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gZW0gZXhjbHVpclBlZGlkb0NvbWVyY2lhbDonLCBlcnIpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGludGVybm8gYW8gZXhjbHVpciBwZWRpZG8uJyB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphclBlZGlkb0NvbWVyY2lhbChwZWRpZG9JZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9LCBlcnJvcjogYXV0aEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGlmIChhdXRoRXJyb3IgfHwgIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc3XDoXJpbyBuw6NvIGF1dGVudGljYWRvLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHRyYWlyIG9zIGRhZG9zXHJcbiAgICBjb25zdCByYXdEYXRhID0ge1xyXG4gICAgICBudW1lcm9fb3JjYW1lbnRvOiBmb3JtRGF0YS5nZXQoJ251bWVyb19vcmNhbWVudG8nKSBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudGVfbm9tZTogZm9ybURhdGEuZ2V0KCdjbGllbnRlX25vbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHRlbGVmb25lOiBmb3JtRGF0YS5nZXQoJ3RlbGVmb25lJykgYXMgc3RyaW5nLFxyXG4gICAgICBkb2N1bWVudG86IGZvcm1EYXRhLmdldCgnZG9jdW1lbnRvJykgYXMgc3RyaW5nLFxyXG4gICAgICBlbmRlcmVjb19vYnJhOiBmb3JtRGF0YS5nZXQoJ2VuZGVyZWNvX29icmEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHJlc3BvbnNhdmVsX29icmE6IGZvcm1EYXRhLmdldCgncmVzcG9uc2F2ZWxfb2JyYScpIGFzIHN0cmluZyxcclxuICAgICAgc3RhdHVzX2NvbWVyY2lhbDogZm9ybURhdGEuZ2V0KCdzdGF0dXNfY29tZXJjaWFsJykgYXMgc3RyaW5nLFxyXG4gICAgICBkYXRhX3Byb21ldGlkYTogZm9ybURhdGEuZ2V0KCdkYXRhX3Byb21ldGlkYScpIGFzIHN0cmluZyxcclxuICAgICAgdXJnZW5jaWE6IGZvcm1EYXRhLmdldCgndXJnZW5jaWEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIG9ic2VydmFjb2VzOiBmb3JtRGF0YS5nZXQoJ29ic2VydmFjb2VzJykgYXMgc3RyaW5nLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBjcmVhdGVQZWRpZG9Db21lcmNpYWxTY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xyXG4gICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhZG9zIGRlIGVudHJhZGEgaW52w6FsaWRvcy4gVmVyaWZpcXVlIG9zIGNhbXBvcy4nIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGE7XHJcblxyXG4gICAgLy8gQnVzY2FyIG8gcGVkaWRvIGF0dWFsXHJcbiAgICBjb25zdCB7IGRhdGE6IHBlZGlkb0F0dWFsLCBlcnJvcjogZ2V0RXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwZWRpZG9zX3YyJylcclxuICAgICAgICAuc2VsZWN0KCdjbGllbnRlX2lkLCBvYnJhX2lkLCBzdGF0dXNfY29tZXJjaWFsLCBtZWRpY29lc192MihpZCwgc3RhdHVzKScpXHJcbiAgICAgICAgLmVxKCdpZCcsIHBlZGlkb0lkKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuICAgIFxyXG4gICAgaWYgKGdldEVyciB8fCAhcGVkaWRvQXR1YWwpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1BlZGlkbyBvcmlnaW5hbCBuw6NvIGVuY29udHJhZG8gcGFyYSBhdHVhbGl6YcOnw6NvLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHVhbGl6YXIgQ2xpZW50ZVxyXG4gICAgbGV0IGNsaWVudGVJZCA9IHBlZGlkb0F0dWFsLmNsaWVudGVfaWQ7XHJcbiAgICBpZiAoZGF0YS5jbGllbnRlX25vbWUpIHtcclxuICAgICAgICBpZiAoY2xpZW50ZUlkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NsaWVudGVzJykudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIG5vbWU6IGRhdGEuY2xpZW50ZV9ub21lLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IGRhdGEudGVsZWZvbmUgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50bzogZGF0YS5kb2N1bWVudG8gfHwgbnVsbFxyXG4gICAgICAgICAgICB9KS5lcSgnaWQnLCBjbGllbnRlSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogbm92b0NsaWVudGUgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NsaWVudGVzJykuaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgIG5vbWU6IGRhdGEuY2xpZW50ZV9ub21lLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IGRhdGEudGVsZWZvbmUgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50bzogZGF0YS5kb2N1bWVudG8gfHwgbnVsbFxyXG4gICAgICAgICAgICB9KS5zZWxlY3QoJ2lkJykuc2luZ2xlKCk7XHJcbiAgICAgICAgICAgIGlmIChub3ZvQ2xpZW50ZSkgY2xpZW50ZUlkID0gbm92b0NsaWVudGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dWFsaXphciBPYnJhXHJcbiAgICBsZXQgb2JyYUlkID0gcGVkaWRvQXR1YWwub2JyYV9pZDtcclxuICAgIGlmIChjbGllbnRlSWQgJiYgKGRhdGEuZW5kZXJlY29fb2JyYSB8fCBkYXRhLnJlc3BvbnNhdmVsX29icmEpKSB7XHJcbiAgICAgICAgaWYgKG9icmFJZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdvYnJhcycpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbmRlcmVjbzogZGF0YS5lbmRlcmVjb19vYnJhIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYXZlbF9vYnJhOiBkYXRhLnJlc3BvbnNhdmVsX29icmEgfHwgbnVsbFxyXG4gICAgICAgICAgICB9KS5lcSgnaWQnLCBvYnJhSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogbm92YU9icmEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ29icmFzJykuaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgIGNsaWVudGVfaWQ6IGNsaWVudGVJZCxcclxuICAgICAgICAgICAgICAgIGVuZGVyZWNvOiBkYXRhLmVuZGVyZWNvX29icmEgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNhdmVsX29icmE6IGRhdGEucmVzcG9uc2F2ZWxfb2JyYSB8fCBudWxsXHJcbiAgICAgICAgICAgIH0pLnNlbGVjdCgnaWQnKS5zaW5nbGUoKTtcclxuICAgICAgICAgICAgaWYgKG5vdmFPYnJhKSBvYnJhSWQgPSBub3ZhT2JyYS5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR1YWxpemFyIFBlZGlkb1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncGVkaWRvc192MicpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIG51bWVyb19vcmNhbWVudG86IGRhdGEubnVtZXJvX29yY2FtZW50byxcclxuICAgICAgICBjbGllbnRlX2lkOiBjbGllbnRlSWQsXHJcbiAgICAgICAgb2JyYV9pZDogb2JyYUlkLFxyXG4gICAgICAgIHN0YXR1c19jb21lcmNpYWw6IGRhdGEuc3RhdHVzX2NvbWVyY2lhbCB8fCAnT3LDp2FtZW50bycsXHJcbiAgICAgICAgZGF0YV9wcm9tZXRpZGE6IGRhdGEuZGF0YV9wcm9tZXRpZGEgPyBuZXcgRGF0ZShkYXRhLmRhdGFfcHJvbWV0aWRhKS50b0lTT1N0cmluZygpIDogbnVsbCxcclxuICAgICAgICB1cmdlbmNpYTogZGF0YS51cmdlbmNpYSxcclxuICAgICAgICBvYnNlcnZhY29lczogZGF0YS5vYnNlcnZhY29lcyB8fCBudWxsLFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgcGVkaWRvSWQpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHBlZGlkbzpcIiwgdXBkYXRlRXJyKTtcclxuICAgICAgaWYgKHVwZGF0ZUVyci5jb2RlID09PSAnMjM1MDUnKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0rDoSBleGlzdGUgdW0gcGVkaWRvIGNhZGFzdHJhZG8gY29tIGVzdGUgbsO6bWVybyBkZSBvcsOnYW1lbnRvLicgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ07Do28gZm9pIHBvc3PDrXZlbCBhdHVhbGl6YXIgbyBwZWRpZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlcmFyIG1lZGnDp8OjbyBzZSBkZSByZXBlbnRlIHBhc3NvdSBhIHNlciBBcHJvdmFkbyBlIGFpbmRhIG7Do28gdGVtIG1lZGnDp8Ojb1xyXG4gICAgaWYgKChkYXRhLnN0YXR1c19jb21lcmNpYWwgPT09ICdBcHJvdmFkbycgfHwgZGF0YS5zdGF0dXNfY29tZXJjaWFsID09PSAnRW0gUHJvZHXDp8OjbycpKSB7XHJcbiAgICAgICAgY29uc3QgaGFzQWN0aXZlTWVkaWNhbyA9IHBlZGlkb0F0dWFsLm1lZGljb2VzX3YyICYmIHBlZGlkb0F0dWFsLm1lZGljb2VzX3YyLnNvbWUoKG06IGFueSkgPT4gbS5zdGF0dXMgIT09ICdDYW5jZWxhZGEnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWhhc0FjdGl2ZU1lZGljYW8pIHtcclxuICAgICAgICAgICAgY29uc3QgeyBlcnJvcjogbWVkaWNhb0VyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgICAuZnJvbSgnbWVkaWNvZXNfdjInKVxyXG4gICAgICAgICAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgICAgICAgICAgcGVkaWRvX2lkOiBwZWRpZG9JZCxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ1BFTkRFTlRFJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIW1lZGljYW9FcnIpIHtcclxuICAgICAgICAgICAgICAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdldmVudG9zX29wZXJhY2lvbmFpcycpLmluc2VydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVkaWRvX2lkOiBwZWRpZG9JZCxcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvX2lkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGV0YXBhX2F0dWFsOiAnRmlsYSBkZSBNZWRpw6fDo28nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fZXZlbnRvOiAnUmUtYWdlbmRhbWVudG8gQXV0b23DoXRpY28nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFjb2VzOiBgUGVkaWRvIHBhc3NvdSBwYXJhICR7ZGF0YS5zdGF0dXNfY29tZXJjaWFsfSBlIHRldmUgc3VhIG1lZGnDp8OjbyByZWNyaWFkYSBhdXRvbWF0aWNhbWVudGUgbmEgRmlsYSBkZSBNZWRpw6fDo28uYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXVkaXRvcmlhXHJcbiAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdldmVudG9zX29wZXJhY2lvbmFpcycpLmluc2VydCh7XHJcbiAgICAgICAgcGVkaWRvX2lkOiBwZWRpZG9JZCxcclxuICAgICAgICB1c3VhcmlvX2lkOiB1c2VyLmlkLFxyXG4gICAgICAgIGV0YXBhX2F0dWFsOiBkYXRhLnN0YXR1c19jb21lcmNpYWwgfHwgJ09yw6dhbWVudG8nLFxyXG4gICAgICAgIHRpcG9fZXZlbnRvOiAnRWRpw6fDo28gZGUgUGVkaWRvJyxcclxuICAgICAgICBvYnNlcnZhY29lczogYFBlZGlkbyBlZGl0YWRvIHBlbG8gb3BlcmFkb3IuIFN0YXR1cyBhdHVhbGl6YWRvIHBhcmE6ICR7ZGF0YS5zdGF0dXNfY29tZXJjaWFsfS5gXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3BlZGlkb3MnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKGAvcGVkaWRvcy8ke3BlZGlkb0lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZWRpY29lcycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZ2VuZGEnKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnUGVkaWRvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28hJyB9O1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gZW0gYXR1YWxpemFyUGVkaWRvQ29tZXJjaWFsOicsIGVycik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gaW50ZXJubyBhbyBhdHVhbGl6YXIgcGVkaWRvLicgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0EyT3NCLHFNQUFBIn0=
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
"[project]/components/pedidos_v2/EditarPedidoForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditarPedidoForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations/pedido_v2.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$677d6f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:677d6f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
function EditarPedidoForm({ initialData, pedidoId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serverState, setServerState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: null,
        msg: ''
    });
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPedidoComercialSchema"]),
        defaultValues: initialData
    });
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$677d6f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["atualizarPedidoComercial"])(pedidoId, formData);
            if (res.success) {
                setServerState({
                    type: 'success',
                    msg: res.message
                });
                setTimeout(()=>{
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
                className: "mb-8 border-b border-zinc-800 pb-5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-zinc-100 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                        className: "text-blue-500 w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this),
                                    "Editar Pedido"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-400 mt-2 leading-relaxed",
                                children: "Atualize as informações do pedido. Essa ação será anotada no diário de operações."
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/pedidos",
                        className: "text-sm font-medium text-zinc-400 hover:text-white bg-zinc-800 px-4 py-2 flex items-center justify-center rounded-lg border border-zinc-700 hover:border-zinc-500 transition-colors",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 opacity-90 hover:opacity-100 transition-opacity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    " 1. Revisão de Cliente e Obra"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                lineNumber: 81,
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
                                                children: "Nº do Orçamento *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('numero_orcamento'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors", errors.numero_orcamento ? "border-red-500/50" : "border-zinc-800 focus:border-blue-500"),
                                                placeholder: "Ex: 3124"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 89,
                                                columnNumber: 29
                                            }, this),
                                            errors.numero_orcamento && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-400",
                                                children: errors.numero_orcamento.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 97,
                                                columnNumber: 57
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Nome do Cliente *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 101,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('cliente_nome'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-9 bg-zinc-950 border rounded px-3 text-sm text-zinc-200 outline-none transition-colors", errors.cliente_nome ? "border-red-500/50" : "border-zinc-800 focus:border-blue-500"),
                                                placeholder: "Ex: Construtora Apex"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 102,
                                                columnNumber: 29
                                            }, this),
                                            errors.cliente_nome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-red-400",
                                                children: errors.cliente_nome.message
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 110,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Telefone"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('telefone'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors",
                                                placeholder: "(00) 00000-0000"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 115,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Documento (Opcional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 123,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('documento'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors",
                                                placeholder: "CPF ou CNPJ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 126,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 md:col-span-2 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Endereço da Obra"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 134,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('endereco_obra'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors",
                                                placeholder: "Ex: Av. Paulista, 1000 - Apto 34"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Arquiteto / Responsável"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register('responsavel_obra'),
                                                className: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors",
                                                placeholder: "Ex: Arq. Juliana"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                        lineNumber: 80,
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
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, this),
                                    " 2. Detalhes Básicos do Acordo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Status Comercial"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 163,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                ...register('status_comercial'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Orçamento",
                                                        children: "Apenas Orçamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Aguardando Aprovação",
                                                        children: "Aguardando Aprovação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Aprovado",
                                                        children: "Venda Aprovada (Iniciar)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 relative border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "w-3 h-3 text-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 106
                                                    }, this),
                                                    " Nível de Urgência"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 175,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                ...register('urgencia'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Baixa",
                                                        children: "Baixa Prioridade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Normal",
                                                        children: "Fluxo Normal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Alta",
                                                        children: "Alta Urgência"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Data Prometida (Entrega)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 187,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                ...register('data_prometida'),
                                                className: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded px-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors [color-scheme:dark]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 188,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 md:col-span-3 border border-zinc-800/50 p-3 rounded-lg bg-zinc-950/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-medium text-zinc-300",
                                                children: "Observações / Escopo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 196,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ...register('observacoes'),
                                                rows: 3,
                                                placeholder: "Detalhes adicionais, descritivo de materiais, formato de pagamento...",
                                                className: "w-full custom-scrollbar bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-zinc-200 outline-none focus:border-blue-500 transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                                lineNumber: 197,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this),
                    serverState.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-md text-sm font-medium border flex items-center gap-2", serverState.type === 'error' ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"),
                        children: [
                            serverState.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                lineNumber: 213,
                                columnNumber: 60
                            }, this),
                            serverState.msg
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                        lineNumber: 209,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-6 border-t border-zinc-800 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-blue-900/20",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                                        lineNumber: 225,
                                        columnNumber: 31
                                    }, this),
                                    " Salvando Alterações..."
                                ]
                            }, void 0, true) : 'Salvar Alterações'
                        }, void 0, false, {
                            fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                            lineNumber: 219,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pedidos_v2/EditarPedidoForm.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a56084f8._.js.map