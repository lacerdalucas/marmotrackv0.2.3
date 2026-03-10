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
"[project]/app/actions/data:fd8d8e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGVkaWRvc192Mi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVQZWRpZG9Db21lcmNpYWxTY2hlbWEgfSBmcm9tICdAL2xpYi92YWxpZGF0aW9ucy9wZWRpZG9fdjInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyaWFyUGVkaWRvQ29tZXJjaWFsKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIC8vIDEuIE9idGVyIHVzdcOhcmlvIGxvZ2FkbyAoT2JyaWdhdMOzcmlvIHBhcmEgbyBFdmVudCBTb3VyY2luZylcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIEV4dHJhaXIgZGFkb3MgYnJ1dG9zXHJcbiAgICBjb25zdCByYXdEYXRhID0ge1xyXG4gICAgICBudW1lcm9fb3JjYW1lbnRvOiBmb3JtRGF0YS5nZXQoJ251bWVyb19vcmNhbWVudG8nKSBhcyBzdHJpbmcsXHJcbiAgICAgIGNsaWVudGVfbm9tZTogZm9ybURhdGEuZ2V0KCdjbGllbnRlX25vbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHRlbGVmb25lOiBmb3JtRGF0YS5nZXQoJ3RlbGVmb25lJykgYXMgc3RyaW5nLFxyXG4gICAgICBkb2N1bWVudG86IGZvcm1EYXRhLmdldCgnZG9jdW1lbnRvJykgYXMgc3RyaW5nLFxyXG4gICAgICBlbmRlcmVjb19vYnJhOiBmb3JtRGF0YS5nZXQoJ2VuZGVyZWNvX29icmEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHJlc3BvbnNhdmVsX29icmE6IGZvcm1EYXRhLmdldCgncmVzcG9uc2F2ZWxfb2JyYScpIGFzIHN0cmluZyxcclxuICAgICAgc3RhdHVzX2NvbWVyY2lhbDogZm9ybURhdGEuZ2V0KCdzdGF0dXNfY29tZXJjaWFsJykgYXMgc3RyaW5nLFxyXG4gICAgICBkYXRhX3Byb21ldGlkYTogZm9ybURhdGEuZ2V0KCdkYXRhX3Byb21ldGlkYScpIGFzIHN0cmluZyxcclxuICAgICAgdXJnZW5jaWE6IGZvcm1EYXRhLmdldCgndXJnZW5jaWEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIG9ic2VydmFjb2VzOiBmb3JtRGF0YS5nZXQoJ29ic2VydmFjb2VzJykgYXMgc3RyaW5nLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyAzLiBWYWxpZGFyIHZpYSBab2RcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNyZWF0ZVBlZGlkb0NvbWVyY2lhbFNjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XHJcbiAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGFkb3MgZGUgZW50cmFkYSBpbnbDoWxpZG9zLiBWZXJpZmlxdWUgb3MgY2FtcG9zLicgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuXHJcbiAgICAvLyAzLjUuIEV4dHJhaXIgUERGIEluLU1lbW9yeVxyXG4gICAgLy8gTk9WTyBGTFVYTyAoSElMKTogTyBQREYgasOhIGZvaSBleHRyYcOtZG8gdmlhICdwcmV2aWV3UGRmRGF0YUFjdGlvbicgbmEgVUkuIE8gYXJxdWl2b1xyXG4gICAgLy8gdmlhamEgbm8gRm9ybURhdGEgY2FzbyBxdWVpcmFtb3Mgc2FsdmFyIG5vIGJ1Y2tldCBmdXR1cmFtZW50ZSwgbWFzIHBhcmEgQ3VzdMOzZGlhIGFwZW5hcywgbsOjbyByZWNhcnJlZ2Ftb3MgdGV4dG8gYXF1aS5cclxuICAgIC8vIEFzc3VtaW1vcyBhIGN1cmFkb3JpYSBkbyBPcGVyYWRvci5cclxuICAgIGNvbnN0IGFycXVpdm9QZGYgPSBmb3JtRGF0YS5nZXQoJ2FycXVpdm9QZGYnKSBhcyBGaWxlIHwgbnVsbDtcclxuICAgIGNvbnN0IGlzSGlsSW1wb3J0ID0gYXJxdWl2b1BkZiAmJiBhcnF1aXZvUGRmLnNpemUgPiAwO1xyXG5cclxuICAgIC8vIDQuIEluaWNpYXIgdHJhbnNhw6fDo28gKFN1cGFiYXNlIFJQQyBvdSBNdWx0aS1pbnNlcnQgdmlhIEZLcylcclxuICAgIC8vIFByb2N1cmFyIG91IENyaWFyIENsaWVudGVcclxuICAgIGxldCBjbGllbnRlSWQgPSBudWxsO1xyXG4gICAgaWYgKGRhdGEuY2xpZW50ZV9ub21lKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbm92b0NsaWVudGUsIGVycm9yOiBjbGllbnRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdjbGllbnRlcycpXHJcbiAgICAgICAgLmluc2VydCh7IFxyXG4gICAgICAgICAgbm9tZTogZGF0YS5jbGllbnRlX25vbWUsIFxyXG4gICAgICAgICAgdGVsZWZvbmU6IGRhdGEudGVsZWZvbmUgfHwgbnVsbCwgXHJcbiAgICAgICAgICBkb2N1bWVudG86IGRhdGEuZG9jdW1lbnRvIHx8IG51bGwgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICBpZiAoY2xpZW50ZUVycikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGFvIGNhZGFzdHJhciBDbGllbnRlLicgfTtcclxuICAgICAgY2xpZW50ZUlkID0gbm92b0NsaWVudGUuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvY3VyYXIgb3UgQ3JpYXIgT2JyYSAoQXRyZWxhZGEgYW8gQ2xpZW50ZSlcclxuICAgIGxldCBvYnJhSWQgPSBudWxsO1xyXG4gICAgaWYgKGNsaWVudGVJZCAmJiAoZGF0YS5lbmRlcmVjb19vYnJhIHx8IGRhdGEucmVzcG9uc2F2ZWxfb2JyYSkpIHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBub3ZhT2JyYSwgZXJyb3I6IG9icmFFcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ29icmFzJylcclxuICAgICAgICAuaW5zZXJ0KHsgXHJcbiAgICAgICAgICBjbGllbnRlX2lkOiBjbGllbnRlSWQsIFxyXG4gICAgICAgICAgZW5kZXJlY286IGRhdGEuZW5kZXJlY29fb2JyYSB8fCBudWxsLCBcclxuICAgICAgICAgIHJlc3BvbnNhdmVsX29icmE6IGRhdGEucmVzcG9uc2F2ZWxfb2JyYSB8fCBudWxsIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuICAgICAgICBcclxuICAgICAgaWYgKG9icmFFcnIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBhbyBjYWRhc3RyYXIgT2JyYS4nIH07XHJcbiAgICAgIG9icmFJZCA9IG5vdmFPYnJhLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDUuIENhZGFzdHJhciBQZWRpZG9cclxuICAgIGNvbnN0IHsgZGF0YTogbm92b1BlZGlkbywgZXJyb3I6IHBlZGlkb0VyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3BlZGlkb3NfdjInKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBudW1lcm9fb3JjYW1lbnRvOiBkYXRhLm51bWVyb19vcmNhbWVudG8sXHJcbiAgICAgICAgY2xpZW50ZV9pZDogY2xpZW50ZUlkLFxyXG4gICAgICAgIG9icmFfaWQ6IG9icmFJZCxcclxuICAgICAgICBzdGF0dXNfY29tZXJjaWFsOiBkYXRhLnN0YXR1c19jb21lcmNpYWwgfHwgJ09yw6dhbWVudG8nLFxyXG4gICAgICAgIGRhdGFfcHJvbWV0aWRhOiBkYXRhLmRhdGFfcHJvbWV0aWRhID8gbmV3IERhdGUoZGF0YS5kYXRhX3Byb21ldGlkYSkudG9JU09TdHJpbmcoKSA6IG51bGwsXHJcbiAgICAgICAgdXJnZW5jaWE6IGRhdGEudXJnZW5jaWEsXHJcbiAgICAgICAgb2JzZXJ2YWNvZXM6IGRhdGEub2JzZXJ2YWNvZXMgfHwgbnVsbCxcclxuICAgICAgICB0ZXh0b19leHRyYWlkbzogaXNIaWxJbXBvcnQgPyBcIltFWFRSQcOHw4NPIEhJTCAtIFJFVklTQURPIFBFTE8gT1BFUkFET1JdXCIgOiBudWxsLFxyXG4gICAgICAgIGNyZWF0ZWRfYnk6IHVzZXIuaWRcclxuICAgICAgfSlcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHBlZGlkb0Vycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIFBlZGlkbyBWMjpcIiwgcGVkaWRvRXJyKTtcclxuICAgICAgICBpZiAocGVkaWRvRXJyLmNvZGUgPT09ICcyMzUwNScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdKw6EgZXhpc3RlIHVtIHBlZGlkbyBjYWRhc3RyYWRvIGNvbSBlc3RlIG7Dum1lcm8gZGUgb3LDp2FtZW50by4nIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBhbyBnZXJhciBvIFBlZGlkby4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFub3ZvUGVkaWRvKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGFvIGdlcmFyIG8gUGVkaWRvLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIDUuNSBHQVRJTEhPIERFIE5FR8OTQ0lPOiBGaWxhIGRvIFBDUCAoQWdlbmRhIGRlIE1lZGnDp8OjbylcclxuICAgIC8vIE9wY2lvbmFsbWVudGUgcG9kZW1vcyBsZXIgdW1hIGZsYWcgXCJwcmVjaXNhX21lZGljYW9cIiwgbWFzIHBvciBwYWRyw6NvXHJcbiAgICAvLyBzZSBmb3Jtb3MgZGVzcGFjaGFyIHBhcmEgbyBQQ1AsIG8gc2lzdGVtYSBpbnNlcmUgYSBtZWRpw6fDo28uXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHsgZXJyb3I6IG1lZGljYW9FcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdtZWRpY29lc192MicpXHJcbiAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgIHBlZGlkb19pZDogbm92b1BlZGlkby5pZCxcclxuICAgICAgICBzdGF0dXM6ICdQRU5ERU5URSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKG1lZGljYW9FcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXZpc286IEZhbGhhIGFvIGluc2VyaXIgbmEgRmlsYSBkZSBNZWRpw6fDo29cIiwgbWVkaWNhb0Vycik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyA2LiBPIENPUkHDh8ODTyBETyBTSVNURU1BIC0gRVZFTlQgU09VUkNJTkdcclxuICAgIC8vIFJlZ2lzdHJhciBvIGV2ZW50byBvcGVyYWNpb25hbCBpbmF1Z3VyYWxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgdGlwb0V2ZW50b1N0ciA9IGlzSGlsSW1wb3J0ID8gJ0ltcG9ydGHDp8OjbyBISUwgKEF1dG8tRmlsbCBSZXZpc2FkbyknIDogYEVudHJhZGEgQ29tZXJjaWFsIE1hbnVhbGA7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZXJyb3I6IGV2ZW50b0VyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2V2ZW50b3Nfb3BlcmFjaW9uYWlzJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgICBwZWRpZG9faWQ6IG5vdm9QZWRpZG8uaWQsXHJcbiAgICAgICAgICB1c3VhcmlvX2lkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgZXRhcGFfYXR1YWw6ICdGaWxhIGRlIE1lZGnDp8OjbycsIC8vIEF0dWFsaXphZG8gcGFyYSByZWZsZXRpciBhIGlkYSBhbyBQQ1BcclxuICAgICAgICAgIHRpcG9fZXZlbnRvOiB0aXBvRXZlbnRvU3RyLFxyXG4gICAgICAgICAgb2JzZXJ2YWNvZXM6IGBQZWRpZG8vT3LDp2FtZW50byByZWdpc3RyYWRvIG5vIHNpc3RlbWEgdmlhIFBsYXRhZm9ybWEuIFN0YXR1czogJHtkYXRhLnN0YXR1c19jb21lcmNpYWx9LiAke2lzSGlsSW1wb3J0ID8gJ09zIGRhZG9zIGZvcmFtIGF1dG8tcHJlZW5jaGlkb3MgZSByZXZpc2Fkb3MgY29tIHN1Y2Vzc28gcGVsbyBPcGVyYWRvciAoSElMKS4nIDogJyd9IEVudmlhZG8gYXV0b21hdGljYW1lbnRlIHBhcmEgRmlsYSBkZSBNZWRpw6fDo28uYFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoZXZlbnRvRXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gR3Jhdmlzc2ltbzogRXZlbnRvIFNvdXJjaW5nIGZhbGhvdVwiLCBldmVudG9FcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldmFsaWRhIGEgdGFiZWxhIGRlIHBlZGlkb3NcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvcGVkaWRvcycpO1xyXG4gICAgLy8gUmV2YWxpZGEgYSBhZ2VuZGEgZGUgbWVkacOnw6NvXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FnZW5kYScpO1xyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgbWVzc2FnZTogJ1BlZGlkbyBnZXJhZG8gZSBlbnZpYWRvIHBhcmEgRmlsYSBkZSBBZ2VuZGFtZW50byEnLFxyXG4gICAgICBwZWRpZG9faWQ6IG5vdm9QZWRpZG8uaWRcclxuICAgIH07XHJcblxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJybyBjYXRhc3Ryw7NmaWNvIGVtIGNyaWFyUGVkaWRvQ29tZXJjaWFsOicsIGVycik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gaW5lc3BlcmFkbyBpbnRlcm5vIGRvIFNlcnZpZG9yLicgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGVU7Dh8OVRVMgREUgRURJw4fDg08gRSBFWENMVVPDg08gKFNvZnQgRGVsZXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGNsdWlyUGVkaWRvQ29tZXJjaWFsKHBlZGlkb0lkOiBzdHJpbmcsIG1vdGl2bzogc3RyaW5nID0gJ07Do28gaW5mb3JtYWRvJykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yOiBhdXRoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKGF1dGhFcnJvciB8fCAhdXNlcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VyPy5hcHBfbWV0YWRhdGE/LnJvbGVfbmFtZSA9PT0gJ2FkbWluJyB8fCBcclxuICAgICAgICAgICAgICAgICAgICB1c2VyPy5lbWFpbCA9PT0gJ2x1Y2FzQG5leHVzeHAuY29tLmJyJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI/LmVtYWlsID09PSAnYWRtaW5AbWFybW8uY29tJztcclxuICAgIGlmICghaXNBZG1pbikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ09wZXJhw6fDo28gbsOjbyBwZXJtaXRpZGEuIEFwZW5hcyBhZG1pbmlzdHJhZG9yZXMgcG9kZW0gZXhjbHVpciBwZWRpZG9zLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdXNjYXIgbyBwZWRpZG8gYXR1YWwgcGFyYSBvYnRlciBvIG51bWVyb19vcmNhbWVudG9cclxuICAgIGNvbnN0IHsgZGF0YTogcGVkaWRvQXR1YWwsIGVycm9yOiBnZXRFcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ3BlZGlkb3NfdjInKVxyXG4gICAgICAgIC5zZWxlY3QoJ251bWVyb19vcmNhbWVudG8nKVxyXG4gICAgICAgIC5lcSgnaWQnLCBwZWRpZG9JZClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcbiAgICBcclxuICAgIGlmIChnZXRFcnIgfHwgIXBlZGlkb0F0dWFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdQZWRpZG8gbsOjbyBlbmNvbnRyYWRvLicgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHN1Zml4byA9IGAtRVhDLSR7dGltZXN0YW1wfWA7XHJcbiAgICBjb25zdCBub3ZvTnVtZXJvID0gcGVkaWRvQXR1YWwubnVtZXJvX29yY2FtZW50byBcclxuICAgICAgICA/IGAke3BlZGlkb0F0dWFsLm51bWVyb19vcmNhbWVudG99JHtzdWZpeG99YCBcclxuICAgICAgICA6IGBJRC0ke3BlZGlkb0lkLnN1YnN0cmluZygwLDgpLnRvVXBwZXJDYXNlKCl9JHtzdWZpeG99YDtcclxuXHJcbiAgICAvLyBTb2Z0IGRlbGV0ZVxyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncGVkaWRvc192MicpXHJcbiAgICAgIC51cGRhdGUoeyBcclxuICAgICAgICBzdGF0dXNfY29tZXJjaWFsOiAnQ2FuY2VsYWRvJyxcclxuICAgICAgICBudW1lcm9fb3JjYW1lbnRvOiBub3ZvTnVtZXJvIFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgcGVkaWRvSWQpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gZXhjbHVpciBwZWRpZG86XCIsIHVwZGF0ZUVycik7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgTsOjbyBmb2kgcG9zc8OtdmVsIGV4Y2x1aXIgbyBwZWRpZG86ICR7dXBkYXRlRXJyLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkodXBkYXRlRXJyKX1gIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXVkaXRvcmlhIHZpYSBFdmVudCBTb3VyY2luZ1xyXG4gICAgY29uc3QgeyBlcnJvcjogZXZlbnRvRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnZXZlbnRvc19vcGVyYWNpb25haXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIHBlZGlkb19pZDogcGVkaWRvSWQsXHJcbiAgICAgICAgICB1c3VhcmlvX2lkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgZXRhcGFfYXR1YWw6ICdFeGNsdcOtZG8nLFxyXG4gICAgICAgICAgdGlwb19ldmVudG86ICdFeGNsdXPDo28gZGUgUGVkaWRvJyxcclxuICAgICAgICAgIG9ic2VydmFjb2VzOiBgUGVkaWRvIGV4Y2x1w61kbyAoU29mdCBEZWxldGUpIHBlbG8gdXN1w6FyaW8uIE1vdGl2bzogJHttb3Rpdm99YFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAoZXZlbnRvRXJyKSBjb25zb2xlLmVycm9yKFwiRXJybyBhbyByZWdpc3RyYXIgZXZlbnRvIGRlIGV4Y2x1c8Ojb1wiLCBldmVudG9FcnIpO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvcGVkaWRvcycpO1xyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnUGVkaWRvIGV4Y2x1w61kbyBjb20gc3VjZXNzby4nIH07XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIGVtIGV4Y2x1aXJQZWRpZG9Db21lcmNpYWw6JywgZXJyKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBpbnRlcm5vIGFvIGV4Y2x1aXIgcGVkaWRvLicgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdHVhbGl6YXJQZWRpZG9Db21lcmNpYWwocGVkaWRvSWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBpZiAoYXV0aEVycm9yIHx8ICF1c2VyKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVXN1w6FyaW8gbsOjbyBhdXRlbnRpY2Fkby4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXh0cmFpciBvcyBkYWRvc1xyXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcclxuICAgICAgbnVtZXJvX29yY2FtZW50bzogZm9ybURhdGEuZ2V0KCdudW1lcm9fb3JjYW1lbnRvJykgYXMgc3RyaW5nLFxyXG4gICAgICBjbGllbnRlX25vbWU6IGZvcm1EYXRhLmdldCgnY2xpZW50ZV9ub21lJykgYXMgc3RyaW5nLFxyXG4gICAgICB0ZWxlZm9uZTogZm9ybURhdGEuZ2V0KCd0ZWxlZm9uZScpIGFzIHN0cmluZyxcclxuICAgICAgZG9jdW1lbnRvOiBmb3JtRGF0YS5nZXQoJ2RvY3VtZW50bycpIGFzIHN0cmluZyxcclxuICAgICAgZW5kZXJlY29fb2JyYTogZm9ybURhdGEuZ2V0KCdlbmRlcmVjb19vYnJhJykgYXMgc3RyaW5nLFxyXG4gICAgICByZXNwb25zYXZlbF9vYnJhOiBmb3JtRGF0YS5nZXQoJ3Jlc3BvbnNhdmVsX29icmEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHN0YXR1c19jb21lcmNpYWw6IGZvcm1EYXRhLmdldCgnc3RhdHVzX2NvbWVyY2lhbCcpIGFzIHN0cmluZyxcclxuICAgICAgZGF0YV9wcm9tZXRpZGE6IGZvcm1EYXRhLmdldCgnZGF0YV9wcm9tZXRpZGEnKSBhcyBzdHJpbmcsXHJcbiAgICAgIHVyZ2VuY2lhOiBmb3JtRGF0YS5nZXQoJ3VyZ2VuY2lhJykgYXMgc3RyaW5nLFxyXG4gICAgICBvYnNlcnZhY29lczogZm9ybURhdGEuZ2V0KCdvYnNlcnZhY29lcycpIGFzIHN0cmluZyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY3JlYXRlUGVkaWRvQ29tZXJjaWFsU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcclxuICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYWRvcyBkZSBlbnRyYWRhIGludsOhbGlkb3MuIFZlcmlmaXF1ZSBvcyBjYW1wb3MuJyB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG5cclxuICAgIC8vIEJ1c2NhciBvIHBlZGlkbyBhdHVhbFxyXG4gICAgY29uc3QgeyBkYXRhOiBwZWRpZG9BdHVhbCwgZXJyb3I6IGdldEVyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncGVkaWRvc192MicpXHJcbiAgICAgICAgLnNlbGVjdCgnY2xpZW50ZV9pZCwgb2JyYV9pZCcpXHJcbiAgICAgICAgLmVxKCdpZCcsIHBlZGlkb0lkKVxyXG4gICAgICAgIC5zaW5nbGUoKTtcclxuICAgIFxyXG4gICAgaWYgKGdldEVyciB8fCAhcGVkaWRvQXR1YWwpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1BlZGlkbyBvcmlnaW5hbCBuw6NvIGVuY29udHJhZG8gcGFyYSBhdHVhbGl6YcOnw6NvLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHVhbGl6YXIgQ2xpZW50ZVxyXG4gICAgbGV0IGNsaWVudGVJZCA9IHBlZGlkb0F0dWFsLmNsaWVudGVfaWQ7XHJcbiAgICBpZiAoZGF0YS5jbGllbnRlX25vbWUpIHtcclxuICAgICAgICBpZiAoY2xpZW50ZUlkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NsaWVudGVzJykudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIG5vbWU6IGRhdGEuY2xpZW50ZV9ub21lLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IGRhdGEudGVsZWZvbmUgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50bzogZGF0YS5kb2N1bWVudG8gfHwgbnVsbFxyXG4gICAgICAgICAgICB9KS5lcSgnaWQnLCBjbGllbnRlSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogbm92b0NsaWVudGUgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2NsaWVudGVzJykuaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgIG5vbWU6IGRhdGEuY2xpZW50ZV9ub21lLFxyXG4gICAgICAgICAgICAgICAgdGVsZWZvbmU6IGRhdGEudGVsZWZvbmUgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50bzogZGF0YS5kb2N1bWVudG8gfHwgbnVsbFxyXG4gICAgICAgICAgICB9KS5zZWxlY3QoJ2lkJykuc2luZ2xlKCk7XHJcbiAgICAgICAgICAgIGlmIChub3ZvQ2xpZW50ZSkgY2xpZW50ZUlkID0gbm92b0NsaWVudGUuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dWFsaXphciBPYnJhXHJcbiAgICBsZXQgb2JyYUlkID0gcGVkaWRvQXR1YWwub2JyYV9pZDtcclxuICAgIGlmIChjbGllbnRlSWQgJiYgKGRhdGEuZW5kZXJlY29fb2JyYSB8fCBkYXRhLnJlc3BvbnNhdmVsX29icmEpKSB7XHJcbiAgICAgICAgaWYgKG9icmFJZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdvYnJhcycpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlbmRlcmVjbzogZGF0YS5lbmRlcmVjb19vYnJhIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zYXZlbF9vYnJhOiBkYXRhLnJlc3BvbnNhdmVsX29icmEgfHwgbnVsbFxyXG4gICAgICAgICAgICB9KS5lcSgnaWQnLCBvYnJhSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogbm92YU9icmEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ29icmFzJykuaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgIGNsaWVudGVfaWQ6IGNsaWVudGVJZCxcclxuICAgICAgICAgICAgICAgIGVuZGVyZWNvOiBkYXRhLmVuZGVyZWNvX29icmEgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNhdmVsX29icmE6IGRhdGEucmVzcG9uc2F2ZWxfb2JyYSB8fCBudWxsXHJcbiAgICAgICAgICAgIH0pLnNlbGVjdCgnaWQnKS5zaW5nbGUoKTtcclxuICAgICAgICAgICAgaWYgKG5vdmFPYnJhKSBvYnJhSWQgPSBub3ZhT2JyYS5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR1YWxpemFyIFBlZGlkb1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncGVkaWRvc192MicpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIG51bWVyb19vcmNhbWVudG86IGRhdGEubnVtZXJvX29yY2FtZW50byxcclxuICAgICAgICBjbGllbnRlX2lkOiBjbGllbnRlSWQsXHJcbiAgICAgICAgb2JyYV9pZDogb2JyYUlkLFxyXG4gICAgICAgIHN0YXR1c19jb21lcmNpYWw6IGRhdGEuc3RhdHVzX2NvbWVyY2lhbCB8fCAnT3LDp2FtZW50bycsXHJcbiAgICAgICAgZGF0YV9wcm9tZXRpZGE6IGRhdGEuZGF0YV9wcm9tZXRpZGEgPyBuZXcgRGF0ZShkYXRhLmRhdGFfcHJvbWV0aWRhKS50b0lTT1N0cmluZygpIDogbnVsbCxcclxuICAgICAgICB1cmdlbmNpYTogZGF0YS51cmdlbmNpYSxcclxuICAgICAgICBvYnNlcnZhY29lczogZGF0YS5vYnNlcnZhY29lcyB8fCBudWxsLFxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgcGVkaWRvSWQpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHBlZGlkbzpcIiwgdXBkYXRlRXJyKTtcclxuICAgICAgaWYgKHVwZGF0ZUVyci5jb2RlID09PSAnMjM1MDUnKSB7XHJcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0rDoSBleGlzdGUgdW0gcGVkaWRvIGNhZGFzdHJhZG8gY29tIGVzdGUgbsO6bWVybyBkZSBvcsOnYW1lbnRvLicgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ07Do28gZm9pIHBvc3PDrXZlbCBhdHVhbGl6YXIgbyBwZWRpZG8uJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1ZGl0b3JpYVxyXG4gICAgYXdhaXQgc3VwYWJhc2UuZnJvbSgnZXZlbnRvc19vcGVyYWNpb25haXMnKS5pbnNlcnQoe1xyXG4gICAgICAgIHBlZGlkb19pZDogcGVkaWRvSWQsXHJcbiAgICAgICAgdXN1YXJpb19pZDogdXNlci5pZCxcclxuICAgICAgICBldGFwYV9hdHVhbDogZGF0YS5zdGF0dXNfY29tZXJjaWFsIHx8ICdPcsOnYW1lbnRvJyxcclxuICAgICAgICB0aXBvX2V2ZW50bzogJ0VkacOnw6NvIGRlIFBlZGlkbycsXHJcbiAgICAgICAgb2JzZXJ2YWNvZXM6IGBQZWRpZG8gZWRpdGFkbyBwZWxvIG9wZXJhZG9yLiBTdGF0dXMgYXR1YWxpemFkbyBwYXJhOiAke2RhdGEuc3RhdHVzX2NvbWVyY2lhbH0uYFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wZWRpZG9zJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL3BlZGlkb3MvJHtwZWRpZG9JZH1gKTtcclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnUGVkaWRvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28hJyB9O1xyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gZW0gYXR1YWxpemFyUGVkaWRvQ29tZXJjaWFsOicsIGVycik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gaW50ZXJubyBhbyBhdHVhbGl6YXIgcGVkaWRvLicgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0EwT3NCLHFNQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$fd8d8e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:fd8d8e [app-ssr] (ecmascript) <text/javascript>");
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$fd8d8e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["atualizarPedidoComercial"])(pedidoId, formData);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__99c6aa24._.js.map