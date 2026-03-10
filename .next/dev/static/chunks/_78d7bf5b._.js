(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/actions/data:45f4e6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVkaWNhby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL2xpYi9zdXBhYmFzZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBcclxuICBhcHJvdmFyUGVkaWRvU2NoZW1hLCBcclxuICBhZ2VuZGFyTWVkaWNhb1NjaGVtYSwgXHJcbiAgY29uY2x1aXJNZWRpY2FvU2NoZW1hLFxyXG4gIHR5cGUgQXByb3ZhclBlZGlkb0lucHV0LFxyXG4gIHR5cGUgQWdlbmRhck1lZGljYW9JbnB1dCxcclxuICB0eXBlIENvbmNsdWlyTWVkaWNhb0lucHV0XHJcbn0gZnJvbSAnQC9saWIvdmFsaWRhdGlvbnMvbWVkaWNhb192Mic7XHJcblxyXG4vLyBGVU7Dh8ODTyAxOiBBcHJvdmFyIG8gUGVkaWRvIENvbWVyY2lhbFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXByb3ZhclBlZGlkb0FjdGlvbihyYXdEYXRhOiBBcHJvdmFyUGVkaWRvSW5wdXQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZCA9IGFwcm92YXJQZWRpZG9TY2hlbWEuc2FmZVBhcnNlKHJhd0RhdGEpO1xyXG4gICAgaWYgKCFwYXJzZWQuc3VjY2VzcykgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYWRvcyBpbnbDoWxpZG9zLicgfTtcclxuICAgIGNvbnN0IGRhdGEgPSBwYXJzZWQuZGF0YTtcclxuXHJcbiAgICAvLyBBdHVhbGl6YSBvIFBlZGlkb1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgncGVkaWRvc192MicpXHJcbiAgICAgIC51cGRhdGUoeyBcclxuICAgICAgICBzdGF0dXNfY29tZXJjaWFsOiAnQXByb3ZhZG8nLFxyXG4gICAgICAgIHByZWNpc2FfbWVkaWNhbzogZGF0YS5wcmVjaXNhX21lZGljYW8sXHJcbiAgICAgICAgZGF0YV9hcHJvdmFjYW86IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICB9KVxyXG4gICAgICAuZXEoJ2lkJywgZGF0YS5wZWRpZG9faWQpO1xyXG5cclxuICAgIGlmICh1cGRhdGVFcnIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFsaGEgYW8gYXByb3ZhciBwZWRpZG8uJyB9O1xyXG5cclxuICAgIC8vIFNlIHByZWNpc2FfbWVkaWNhbyBmb3IgdHJ1ZSwgaW5zZXJlIGF1dG9tYXRpY2FtZW50ZSBuYSBmaWxhIGRlIG1lZGnDp8Ojb1xyXG4gICAgaWYgKGRhdGEucHJlY2lzYV9tZWRpY2FvKSB7XHJcbiAgICAgIGNvbnN0IHsgZXJyb3I6IG1lZGljYW9FcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ21lZGljb2VzX3YyJylcclxuICAgICAgICAuaW5zZXJ0KHtcclxuICAgICAgICAgIHBlZGlkb19pZDogZGF0YS5wZWRpZG9faWQsXHJcbiAgICAgICAgICBzdGF0dXM6ICdQZW5kZW50ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChtZWRpY2FvRXJyKSBjb25zb2xlLmVycm9yKFwiRmFsaGEgYW8gY3JpYXIgbWVkacOnw6NvIGF1dG9tw6F0aWNhOlwiLCBtZWRpY2FvRXJyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWdpc3RyYSBvIEV2ZW50byBJbXV0w6F2ZWwgKEV2ZW50IFNvdXJjaW5nKVxyXG4gICAgYXdhaXQgc3VwYWJhc2UuZnJvbSgnZXZlbnRvc19vcGVyYWNpb25haXMnKS5pbnNlcnQoe1xyXG4gICAgICBwZWRpZG9faWQ6IGRhdGEucGVkaWRvX2lkLFxyXG4gICAgICB1c3VhcmlvX2lkOiB1c2VyLmlkLFxyXG4gICAgICBldGFwYV9hdHVhbDogZGF0YS5wcmVjaXNhX21lZGljYW8gPyAnRmlsYSBkZSBNZWRpw6fDo28nIDogJ0ZpbGEgZGUgUHJvamV0bycsXHJcbiAgICAgIHRpcG9fZXZlbnRvOiAnQXByb3Zhw6fDo28gQ29tZXJjaWFsJyxcclxuICAgICAgb2JzZXJ2YWNvZXM6IGBQZWRpZG8gQXByb3ZhZG8uICR7ZGF0YS5wcmVjaXNhX21lZGljYW8gPyAnQWd1YXJkYW5kbyBNZWRpw6fDo28uJyA6ICdNZWRpw6fDo28gRGlzcGVuc2FkYS4nfSBPYnMgYWRpY2lvbmFpczogJHtkYXRhLm9ic2VydmFjb2VzIHx8ICdOZW5odW1hJ31gXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9wZWRpZG9zLyR7ZGF0YS5wZWRpZG9faWR9YCk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL21lZGljb2VzJyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnUGVkaWRvIEFwcm92YWRvIGNvbSBTdWNlc3NvIScgfTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBpbnRlcm5vIG5hIEFwcm92YcOnw6NvLicgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZVTsOHw4NPIDI6IEFnZW5kYXIgYSBNZWRpw6fDo29cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFnZW5kYXJNZWRpY2FvQWN0aW9uKHJhd0RhdGE6IEFnZW5kYXJNZWRpY2FvSW5wdXQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZCA9IGFnZW5kYXJNZWRpY2FvU2NoZW1hLnNhZmVQYXJzZShyYXdEYXRhKTtcclxuICAgIGlmICghcGFyc2VkLnN1Y2Nlc3MpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGFkb3MgaW52w6FsaWRvcy4nIH07XHJcbiAgICBjb25zdCBkYXRhID0gcGFyc2VkLmRhdGE7XHJcblxyXG4gICAgLy8gQXR1YWxpemEgYSBNZWRpw6fDo28gKEFvIGludsOpcyBkZSBjcmlhciwgcG9pcyBhIGFwcm92YcOnw6NvIGrDoSBjcmlhIGNvbW8gUGVuZGVudGUpXHJcbiAgICAvLyBVc2Ftb3MgbyBwZWRpZG9faWQgcGFyYSBsb2NhbGl6YXIgYSBtZWRpw6fDo28gcGVuZGVudGUgXHJcbiAgICAvLyBvdSBzZSBhc3N1bWlybW9zIHF1ZSBhIHRhYmVsYSBzdXBvcnRhIG3Dumx0aXBsb3MsIHBlZ2Ftb3MgYSBtYWlzIHJlY2VudGUuXHJcbiAgICBjb25zdCB7IGRhdGE6IG1lZGljYW9BdHVhbGl6YWRhLCBlcnJvcjogdXBkYXRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbWVkaWNvZXNfdjInKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICByZXNwb25zYXZlbF9pZDogZGF0YS5yZXNwb25zYXZlbF9pZCB8fCB1c2VyLmlkLCAvLyBPIHByw7NwcmlvIG91IG91dHJvIGRlc2lnbmFkb1xyXG4gICAgICAgIGRhdGFfYWdlbmRhZGE6IGRhdGEuZGF0YV9hZ2VuZGFkYSB8fCBudWxsLFxyXG4gICAgICAgIHN0YXR1czogJ0FnZW5kYWRhJyxcclxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdwZWRpZG9faWQnLCBkYXRhLnBlZGlkb19pZClcclxuICAgICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVyciB8fCAhbWVkaWNhb0F0dWFsaXphZGEpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBVcGRhdGUgQWdlbmRhciBNZWRpw6fDo286XCIsIHVwZGF0ZUVycik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGFvIGFnZW5kYXIgbWVkacOnw6NvLiBPIHBlZGlkbyBwb2RlIG7Do28gZXN0YXIgbmEgZmlsYS4nIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVnaXN0cmEgbyBFdmVudG8gKEV2ZW50IFNvdXJjaW5nKVxyXG4gICAgYXdhaXQgc3VwYWJhc2UuZnJvbSgnZXZlbnRvc19vcGVyYWNpb25haXMnKS5pbnNlcnQoe1xyXG4gICAgICBwZWRpZG9faWQ6IGRhdGEucGVkaWRvX2lkLFxyXG4gICAgICB1c3VhcmlvX2lkOiB1c2VyLmlkLFxyXG4gICAgICBldGFwYV9hdHVhbDogJ01lZGnDp8OjbyBBZ2VuZGFkYScsXHJcbiAgICAgIHRpcG9fZXZlbnRvOiAnQWdlbmRhbWVudG8gZGUgTWVkacOnw6NvJyxcclxuICAgICAgb2JzZXJ2YWNvZXM6IGBNZWRpw6fDo28gYWdlbmRhZGEuIFJlc3BvbnPDoXZlbCBBdHJpYnXDrWRvOiAke2RhdGEucmVzcG9uc2F2ZWxfaWQgfHwgJ08gTWVzbW8gVXN1w6FyaW8gbG9nYWRvJ30uIE9iczogJHtkYXRhLm9ic2VydmFjb2VzIHx8ICcnfWBcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVkaWNvZXMnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKGAvcGVkaWRvcy8ke2RhdGEucGVkaWRvX2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZ2VuZGEnKTsgLy8gQWRpY2lvbmFkbyBhdHVhbGl6YXIgYSBBZ2VuZGEhXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnTWVkacOnw6NvIEFnZW5kYWRhIScgfTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBpbnRlcm5vIG5vIEFnZW5kYW1lbnRvLicgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBGVU7Dh8ODTyAzOiBDb25jbHVpciBNZWRpw6fDo28gKE1vYmlsZS1GaXJzdCAvIE5hIE9icmEpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25jbHVpck1lZGljYW9BY3Rpb24ocmF3RGF0YTogQ29uY2x1aXJNZWRpY2FvSW5wdXQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gYXV0ZW50aWNhZG8uJyB9O1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZCA9IGNvbmNsdWlyTWVkaWNhb1NjaGVtYS5zYWZlUGFyc2UocmF3RGF0YSk7XHJcbiAgICBpZiAoIXBhcnNlZC5zdWNjZXNzKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhZG9zIGludsOhbGlkb3MuJyB9O1xyXG4gICAgY29uc3QgZGF0YSA9IHBhcnNlZC5kYXRhO1xyXG5cclxuICAgIC8vIEJ1c2NhIG8gcGVkaWRvIGJhc2UgZGEgbWVkacOnw6NvIHBhcmEgbyBldmVudG8gc291cmNpbmdcclxuICAgIGNvbnN0IHsgZGF0YTogbWVkaWNhb0Jhc2UgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oJ21lZGljb2VzX3YyJylcclxuICAgICAgICAuc2VsZWN0KCdwZWRpZG9faWQnKVxyXG4gICAgICAgIC5lcSgnaWQnLCBkYXRhLm1lZGljYW9faWQpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG4gICAgICAgIFxyXG4gICAgaWYgKCFtZWRpY2FvQmFzZSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdNZWRpw6fDo28gbsOjbyBlbmNvbnRyYWRhLicgfTtcclxuXHJcbiAgICAvLyBBdHVhbGl6YSBhIE1lZGnDp8Ojb1xyXG4gICAgY29uc3QgeyBlcnJvcjogdXBkYXRlRXJyIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbSgnbWVkaWNvZXNfdjInKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgICAgIHBlbmRlbmNpYXNfb2JyYTogZGF0YS5wZW5kZW5jaWFzX29icmEgfHwgbnVsbCxcclxuICAgICAgICBhcHRvX3BhcmFfcHJvamV0bzogZGF0YS5hcHRvX3BhcmFfcHJvamV0byxcclxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgICAgfSlcclxuICAgICAgLmVxKCdpZCcsIGRhdGEubWVkaWNhb19pZCk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZUVycikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvIGFvIGZlY2hhciBtZWRpw6fDo28uJyB9O1xyXG5cclxuICAgIC8vIFJlZ2lzdHJhIG8gRXZlbnRvIEltdXTDoXZlbCAtIChTYcOtZGEgZGUgQ3VzdMOzZGlhIC8gSGFuZG92ZXIpXHJcbiAgICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdldmVudG9zX29wZXJhY2lvbmFpcycpLmluc2VydCh7XHJcbiAgICAgIHBlZGlkb19pZDogbWVkaWNhb0Jhc2UucGVkaWRvX2lkLFxyXG4gICAgICB1c3VhcmlvX2lkOiB1c2VyLmlkLFxyXG4gICAgICBldGFwYV9hdHVhbDogZGF0YS5hcHRvX3BhcmFfcHJvamV0byA/ICdGaWxhIGRlIFByb2pldG8nIDogJ0FndWFyZGFuZG8gQWp1c3RlIGRlIE9icmEgKFByb2pldG8gQmxvcXVlYWRvKScsXHJcbiAgICAgIHRpcG9fZXZlbnRvOiBkYXRhLnN0YXR1cyA9PT0gJ0NvbmNsdWlkYScgPyAnQ29uY2x1c8OjbyBkZSBNZWRpw6fDo28nIDogJ01lZGnDp8OjbyBGcnVzdHJhZGEnLFxyXG4gICAgICBwZW5kZW5jaWFfbW90aXZvOiBkYXRhLnBlbmRlbmNpYXNfb2JyYSB8fCBudWxsLFxyXG4gICAgICBvYnNlcnZhY29lczogYFN0YXR1cyBkYSBPYnJhOiAke2RhdGEuYXB0b19wYXJhX3Byb2pldG8gPyAnQXB0YSBwYXJhIFByb2pldG8nIDogJ0luYXB0YS9Db20gUGVuZMOqbmNpYXMnfWBcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVkaWNvZXMnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKGAvcGVkaWRvcy8ke21lZGljYW9CYXNlLnBlZGlkb19pZH1gKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBNZWRpw6fDo28gZmVjaGFkYSBjb20gc3VjZXNzbyAoJHtkYXRhLnN0YXR1c30pLmAgfTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRXJybyBpbnRlcm5vIGFvIENvbmNsdWlyIE1lZGnDp8Ojby4nIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBY3NCLGdNQUFBIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$45f4e6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:45f4e6 [app-client] (ecmascript) <text/javascript>");
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$45f4e6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["aprovarPedidoAction"])({
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

//# sourceMappingURL=_78d7bf5b._.js.map