(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/actions/data:f3a29c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aprovarPedidoAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407e1cce73c3253b5d5b10841c5ace7ee08e0f21bd":"aprovarPedidoAction"},"app/actions/medicao.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("407e1cce73c3253b5d5b10841c5ace7ee08e0f21bd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "aprovarPedidoAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVkaWNhby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBcclxuICBhcHJvdmFyUGVkaWRvU2NoZW1hLCBcclxuICBhZ2VuZGFyTWVkaWNhb1NjaGVtYSwgXHJcbiAgY29uY2x1aXJNZWRpY2FvU2NoZW1hLFxyXG4gIHR5cGUgQXByb3ZhclBlZGlkb0lucHV0LFxyXG4gIHR5cGUgQWdlbmRhck1lZGljYW9JbnB1dCxcclxuICB0eXBlIENvbmNsdWlyTWVkaWNhb0lucHV0XHJcbn0gZnJvbSAnQC9saWIvdmFsaWRhdGlvbnMvbWVkaWNhb192Mic7XHJcblxyXG4vLyBGVU7Dh8ODTyAxOiBBcHJvdmFyIG8gUGVkaWRvIENvbWVyY2lhbFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXByb3ZhclBlZGlkb0FjdGlvbihyYXdEYXRhOiBBcHJvdmFyUGVkaWRvSW5wdXQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZCA9IGFwcm92YXJQZWRpZG9TY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xyXG4gICAgaWYgKCFwYXJzZWQuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYWRvcyBpbnbDoWxpZG9zLicgfTtcclxuICAgIGNvbnN0IGRhdGEgPSBwYXJzZWQuZGF0YTtcclxuXHJcbiAgICAvLyBBdHVhbGl6YSBvIFBlZGlkb1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncGVkaWRvc192MicpXHJcbiAgICAgIC51cGRhdGUoeyBcclxuICAgICAgICBzdGF0dXNfY29tZXJjaWFsOiAnQXByb3ZhZG8nLFxyXG4gICAgICAgIHByZWNpc2FfbWVkaWNhbzogZGF0YS5wcmVjaXNhX21lZGljYW8sXHJcbiAgICAgICAgZGF0YV9hcHJvdmFjYW86IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgZGF0YS5wZWRpZG9faWQpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFsaGEgYW8gYXByb3ZhciBwZWRpZG8uJyB9O1xyXG5cclxuICAgIC8vIEEgZmlsYSBkZSBtZWRpw6fDo28gZG8gUENQIGFnb3JhIMOpIGFsaW1lbnRhZGEgYXV0b21hdGljYW1lbnRlIGRlIGZvcm1hIGRpbsOibWljYSBcclxuICAgIC8vIHBlbGEgY29uc3VsdGEgbmEgVUkgKFBlZGlkb3MgQXByb3ZhZG9zIHNlbSBtZWRpw6fDo28gYXRpdmEpLCBcclxuICAgIC8vIGVudMOjbyBuw6NvIHByZWNpc2Ftb3MgaW5zZXJpciB1bSByZWdpc3RybyBcIlBlbmRlbnRlXCIgKHF1ZSB2aW9sYXZhIGEgY29uc3RyYWludCkuXHJcblxyXG4gICAgLy8gUmVnaXN0cmEgbyBFdmVudG8gSW11dMOhdmVsIChFdmVudCBTb3VyY2luZylcclxuICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oJ2V2ZW50b3Nfb3BlcmFjaW9uYWlzJykuaW5zZXJ0KHtcclxuICAgICAgcGVkaWRvX2lkOiBkYXRhLnBlZGlkb19pZCxcclxuICAgICAgdXN1YXJpb19pZDogdXNlci5pZCxcclxuICAgICAgZXRhcGFfYXR1YWw6IGRhdGEucHJlY2lzYV9tZWRpY2FvID8gJ0ZpbGEgZGUgTWVkacOnw6NvJyA6ICdGaWxhIGRlIFByb2pldG8nLFxyXG4gICAgICB0aXBvX2V2ZW50bzogJ0Fwcm92YcOnw6NvIENvbWVyY2lhbCcsXHJcbiAgICAgIG9ic2VydmFjb2VzOiBgUGVkaWRvIEFwcm92YWRvLiAke2RhdGEucHJlY2lzYV9tZWRpY2FvID8gJ0FndWFyZGFuZG8gTWVkacOnw6NvLicgOiAnTWVkacOnw6NvIERpc3BlbnNhZGEuJ30gT2JzIGFkaWNpb25haXM6ICR7ZGF0YS5vYnNlcnZhY29lcyB8fCAnTmVuaHVtYSd9YFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKGAvcGVkaWRvcy8ke2RhdGEucGVkaWRvX2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZWRpY29lcycpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1BlZGlkbyBBcHJvdmFkbyBjb20gU3VjZXNzbyEnIH07XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gaW50ZXJubyBuYSBBcHJvdmHDp8Ojby4nIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGVU7Dh8ODTyAyOiBBZ2VuZGFyIGEgTWVkacOnw6NvXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZ2VuZGFyTWVkaWNhb0FjdGlvbihyYXdEYXRhOiBBZ2VuZGFyTWVkaWNhb0lucHV0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHsgdXNlciB9IH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcclxuICAgIGlmICghdXNlcikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc3XDoXJpbyBuw6NvIGF1dGVudGljYWRvLicgfTtcclxuXHJcbiAgICBjb25zdCBwYXJzZWQgPSBhZ2VuZGFyTWVkaWNhb1NjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XHJcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhZG9zIGludsOhbGlkb3MuJyB9O1xyXG4gICAgY29uc3QgZGF0YSA9IHBhcnNlZC5kYXRhO1xyXG5cclxuICAgIC8vIEluc2VyZSBhIE5vdmEgTWVkacOnw6NvIChhZ29yYSBxdWUgUGVuZGVudGVzIHPDo28gY2FsY3VsYWRvcyBkaW5hbWljYW1lbnRlKVxyXG4gICAgY29uc3QgeyBkYXRhOiBub3ZhTWVkaWNhbywgZXJyb3I6IGluc2VydEVyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ21lZGljb2VzX3YyJylcclxuICAgICAgLmluc2VydCh7XHJcbiAgICAgICAgcGVkaWRvX2lkOiBkYXRhLnBlZGlkb19pZCxcclxuICAgICAgICByZXNwb25zYXZlbF9pZDogZGF0YS5yZXNwb25zYXZlbF9pZCB8fCB1c2VyLmlkLCAvLyBPIHByw7NwcmlvIG91IG91dHJvIGRlc2lnbmFkb1xyXG4gICAgICAgIGRhdGFfYWdlbmRhZGE6IGRhdGEuZGF0YV9hZ2VuZGFkYSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXR1czogJ0FnZW5kYWRhJ1xyXG4gICAgICB9KVxyXG4gICAgICAuc2VsZWN0KCdpZCcpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoaW5zZXJ0RXJyIHx8ICFub3ZhTWVkaWNhbykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIEluc2VydCBBZ2VuZGFyIE1lZGnDp8OjbzpcIiwgaW5zZXJ0RXJyKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gYW8gYWdlbmRhciBtZWRpw6fDo28uIE8gcGVkaWRvIHBvZGUgbsOjbyBlc3RhciBuYSBmaWxhLicgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWdpc3RyYSBvIEV2ZW50byAoRXZlbnQgU291cmNpbmcpXHJcbiAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdldmVudG9zX29wZXJhY2lvbmFpcycpLmluc2VydCh7XHJcbiAgICAgIHBlZGlkb19pZDogZGF0YS5wZWRpZG9faWQsXHJcbiAgICAgIHVzdWFyaW9faWQ6IHVzZXIuaWQsXHJcbiAgICAgIGV0YXBhX2F0dWFsOiAnTWVkacOnw6NvIEFnZW5kYWRhJyxcclxuICAgICAgdGlwb19ldmVudG86ICdBZ2VuZGFtZW50byBkZSBNZWRpw6fDo28nLFxyXG4gICAgICBvYnNlcnZhY29lczogYE1lZGnDp8OjbyBhZ2VuZGFkYS4gUmVzcG9uc8OhdmVsIEF0cmlidcOtZG86ICR7ZGF0YS5yZXNwb25zYXZlbF9pZCB8fCAnTyBNZXNtbyBVc3XDoXJpbyBsb2dhZG8nfS4gT2JzOiAke2RhdGEub2JzZXJ2YWNvZXMgfHwgJyd9YFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZWRpY29lcycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9wZWRpZG9zLyR7ZGF0YS5wZWRpZG9faWR9YCk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FnZW5kYScpOyAvLyBBZGljaW9uYWRvIGF0dWFsaXphciBhIEFnZW5kYSFcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdNZWRpw6fDo28gQWdlbmRhZGEhJyB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGludGVybm8gbm8gQWdlbmRhbWVudG8uJyB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEZVTsOHw4NPIDM6IENvbmNsdWlyIE1lZGnDp8OjbyAoTW9iaWxlLUZpcnN0IC8gTmEgT2JyYSlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbmNsdWlyTWVkaWNhb0FjdGlvbihyYXdEYXRhOiBDb25jbHVpck1lZGljYW9JbnB1dCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG4gICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVXN1w6FyaW8gbsOjbyBhdXRlbnRpY2Fkby4nIH07XHJcblxyXG4gICAgY29uc3QgcGFyc2VkID0gY29uY2x1aXJNZWRpY2FvU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcclxuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGFkb3MgaW52w6FsaWRvcy4nIH07XHJcbiAgICBjb25zdCBkYXRhID0gcGFyc2VkLmRhdGE7XHJcblxyXG4gICAgLy8gQnVzY2EgbyBwZWRpZG8gYmFzZSBkYSBtZWRpw6fDo28gcGFyYSBvIGV2ZW50byBzb3VyY2luZ1xyXG4gICAgY29uc3QgeyBkYXRhOiBtZWRpY2FvQmFzZSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgnbWVkaWNvZXNfdjInKVxyXG4gICAgICAgIC5zZWxlY3QoJ3BlZGlkb19pZCcpXHJcbiAgICAgICAgLmVxKCdpZCcsIGRhdGEubWVkaWNhb19pZClcclxuICAgICAgICAuc2luZ2xlKCk7XHJcbiAgICAgICAgXHJcbiAgICBpZiAoIW1lZGljYW9CYXNlKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ01lZGnDp8OjbyBuw6NvIGVuY29udHJhZGEuJyB9O1xyXG5cclxuICAgIC8vIEF0dWFsaXphIGEgTWVkacOnw6NvXHJcbiAgICBjb25zdCB7IGVycm9yOiB1cGRhdGVFcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdtZWRpY29lc192MicpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgcGVuZGVuY2lhc19vYnJhOiBkYXRhLnBlbmRlbmNpYXNfb2JyYSB8fCBudWxsLFxyXG4gICAgICAgIGFwdG9fcGFyYV9wcm9qZXRvOiBkYXRhLmFwdG9fcGFyYV9wcm9qZXRvLFxyXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgZGF0YS5tZWRpY2FvX2lkKTtcclxuXHJcbiAgICBpZiAodXBkYXRlRXJyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0Vycm8gYW8gZmVjaGFyIG1lZGnDp8Ojby4nIH07XHJcblxyXG4gICAgLy8gUmVnaXN0cmEgbyBFdmVudG8gSW11dMOhdmVsIC0gKFNhw61kYSBkZSBDdXN0w7NkaWEgLyBIYW5kb3ZlcilcclxuICAgIGF3YWl0IHN1cGFiYXNlLmZyb20oJ2V2ZW50b3Nfb3BlcmFjaW9uYWlzJykuaW5zZXJ0KHtcclxuICAgICAgcGVkaWRvX2lkOiBtZWRpY2FvQmFzZS5wZWRpZG9faWQsXHJcbiAgICAgIHVzdWFyaW9faWQ6IHVzZXIuaWQsXHJcbiAgICAgIGV0YXBhX2F0dWFsOiBkYXRhLmFwdG9fcGFyYV9wcm9qZXRvID8gJ0ZpbGEgZGUgUHJvamV0bycgOiAnQWd1YXJkYW5kbyBBanVzdGUgZGUgT2JyYSAoUHJvamV0byBCbG9xdWVhZG8pJyxcclxuICAgICAgdGlwb19ldmVudG86IGRhdGEuc3RhdHVzID09PSAnQ29uY2x1aWRhJyA/ICdDb25jbHVzw6NvIGRlIE1lZGnDp8OjbycgOiAnTWVkacOnw6NvIEZydXN0cmFkYScsXHJcbiAgICAgIHBlbmRlbmNpYV9tb3Rpdm86IGRhdGEucGVuZGVuY2lhc19vYnJhIHx8IG51bGwsXHJcbiAgICAgIG9ic2VydmFjb2VzOiBgU3RhdHVzIGRhIE9icmE6ICR7ZGF0YS5hcHRvX3BhcmFfcHJvamV0byA/ICdBcHRhIHBhcmEgUHJvamV0bycgOiAnSW5hcHRhL0NvbSBQZW5kw6puY2lhcyd9YFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZWRpY29lcycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9wZWRpZG9zLyR7bWVkaWNhb0Jhc2UucGVkaWRvX2lkfWApO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYE1lZGnDp8OjbyBmZWNoYWRhIGNvbSBzdWNlc3NvICgke2RhdGEuc3RhdHVzfSkuYCB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGludGVybm8gYW8gQ29uY2x1aXIgTWVkacOnw6NvLicgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkFjc0IsZ01BQUEifQ==
}),
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
"[project]/components/pedidos/PainelAprovacao.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PainelAprovacao
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f3a29c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:f3a29c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function PainelAprovacao({ pedidoId, currentStatus }) {
    _s();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [precisaMedicao, setPrecisaMedicao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleAprovar = async ()=>{
        setIsSubmitting(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$f3a29c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["aprovarPedidoAction"])({
                pedido_id: pedidoId,
                precisa_medicao: precisaMedicao,
                observacoes: "Aprovado via Painel Administrativo"
            });
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message);
            // O page action tem revalidatePath, o servidor vai enviar as novas props.
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Erro desconhecido");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Erro interno ao comunicar com servidor");
        } finally{
            setIsSubmitting(false);
        }
    };
    if (currentStatus === 'Aprovado') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-between shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-6 h-6 text-emerald-500"
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-emerald-400 font-bold text-sm",
                                children: "Pedido Aprovado e Auditado"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-emerald-500/70 text-xs",
                                children: "O gatilho de produção/medição deste pedido já foi ativado com sucesso."
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-zinc-900 border border-violet-500/30 rounded-xl p-5 shadow-sm shadow-violet-900/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-bold text-zinc-100 uppercase tracking-wider mb-2 border-b border-zinc-800 pb-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "w-4 h-4 text-violet-500"
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    "Painel de Aprovação Comercial"
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-400 text-sm mb-4",
                children: "Revise os dados e chancele o pedido para que ele entre no fluxo das réguas de produção fabril."
            }, void 0, false, {
                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start md:items-center justify-between flex-col md:flex-row gap-4 bg-zinc-950 p-4 border border-zinc-800 rounded-lg mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between w-full md:w-auto gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-zinc-200 block flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                className: "w-4 h-4 text-zinc-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                                lineNumber: 69,
                                                columnNumber: 29
                                            }, this),
                                            " Este pedido exige Medição?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-500 leading-relaxed max-w-xs",
                                        children: 'Se "Não", ele pulará direto para a Fila de Projeto/Kanban.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setPrecisaMedicao(!precisaMedicao),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 mt-1", precisaMedicao ? "bg-violet-600" : "bg-zinc-700"),
                                role: "switch",
                                "aria-checked": precisaMedicao,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", precisaMedicao ? "translate-x-5" : "translate-x-0")
                                }, void 0, false, {
                                    fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAprovar,
                        disabled: isSubmitting,
                        className: "w-full md:w-auto h-10 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all flex justify-center items-center disabled:opacity-50 shadow-md shadow-emerald-900/20",
                        children: [
                            isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-5 h-5 animate-spin mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                lineNumber: 100,
                                columnNumber: 37
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                                lineNumber: 100,
                                columnNumber: 89
                            }, this),
                            isSubmitting ? 'Aprovando...' : 'Aprovar Pedido'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            precisaMedicao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs font-mono text-zinc-500 flex items-center gap-1.5 opacity-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 rounded-full bg-violet-500 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                        lineNumber: 107,
                        columnNumber: 21
                    }, this),
                    "Isso irá criar e agendar a medição em /medicoes como status Pendente automaticamente"
                ]
            }, void 0, true, {
                fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
                lineNumber: 106,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pedidos/PainelAprovacao.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
_s(PainelAprovacao, "isOrNXYcKkIe1WlnC7zRIUCGNn4=");
_c = PainelAprovacao;
var _c;
__turbopack_context__.k.register(_c, "PainelAprovacao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1d756369._.js.map