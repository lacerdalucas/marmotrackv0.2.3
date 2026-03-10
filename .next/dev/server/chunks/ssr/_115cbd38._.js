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
    numero_orcamento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "O número do orçamento é obrigatório."),
    telefone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    documento: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    endereco_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    responsavel_obra: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status_comercial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Orçamento',
        'Aguardando Aprovação',
        'Aprovado',
        'Em Produção',
        'Concluído',
        'Cancelado'
    ]),
    data_prometida: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    urgencia: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'Baixa',
        'Normal',
        'Alta'
    ]),
    observacoes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
}),
"[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d7a1815c5ab2a4cc2fa627d115d61490da51c58f":"criarPedidoComercial","601d5cbca583799e326c8674f36a93c295fd9a7eba":"excluirPedidoComercial","60d477880834ffd6889b797d42ea46826169acf68f":"atualizarPedidoComercial"},"",""] */ __turbopack_context__.s([
    "atualizarPedidoComercial",
    ()=>atualizarPedidoComercial,
    "criarPedidoComercial",
    ()=>criarPedidoComercial,
    "excluirPedidoComercial",
    ()=>excluirPedidoComercial
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
            numero_orcamento: formData.get('numero_orcamento'),
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
        // NOVO FLUXO (HIL): O PDF já foi extraído via 'previewPdfDataAction' na UI. O arquivo
        // viaja no FormData caso queiramos salvar no bucket futuramente, mas para Custódia apenas, não recarregamos texto aqui.
        // Assumimos a curadoria do Operador.
        const arquivoPdf = formData.get('arquivoPdf');
        const isHilImport = arquivoPdf && arquivoPdf.size > 0;
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
            numero_orcamento: data.numero_orcamento,
            cliente_id: clienteId,
            obra_id: obraId,
            status_comercial: data.status_comercial || 'Orçamento',
            data_prometida: data.data_prometida ? new Date(data.data_prometida).toISOString() : null,
            urgencia: data.urgencia,
            observacoes: data.observacoes || null,
            texto_extraido: isHilImport ? "[EXTRAÇÃO HIL - REVISADO PELO OPERADOR]" : null,
            created_by: user.id
        }).select('id').single();
        if (pedidoErr) {
            console.error("Erro Pedido V2:", pedidoErr);
            if (pedidoErr.code === '23505') {
                return {
                    success: false,
                    message: 'Já existe um pedido cadastrado com este número de orçamento.'
                };
            }
            return {
                success: false,
                message: 'Erro ao gerar o Pedido.'
            };
        }
        if (!novoPedido) {
            return {
                success: false,
                message: 'Erro ao gerar o Pedido.'
            };
        }
        // ==========================================
        // 5.5 GATILHO DE NEGÓCIO: Fila do PCP (Agenda de Medição)
        // Apenas se o pedido já nasce Aprovado ou Em Produção ele entra na Fila.
        // ==========================================
        if (data.status_comercial === 'Aprovado' || data.status_comercial === 'Em Produção') {
            const { error: medicaoErr } = await supabase.from('medicoes_v2').insert({
                pedido_id: novoPedido.id,
                status: 'PENDENTE'
            });
            if (medicaoErr) {
                console.error("Aviso: Falha ao inserir na Fila de Medição", medicaoErr);
            }
        }
        // ==========================================
        // 6. O CORAÇÃO DO SISTEMA - EVENT SOURCING
        // Registrar o evento operacional inaugural
        // ==========================================
        const tipoEventoStr = isHilImport ? 'Importação HIL (Auto-Fill Revisado)' : `Entrada Comercial Manual`;
        const { error: eventoErr } = await supabase.from('eventos_operacionais').insert({
            pedido_id: novoPedido.id,
            usuario_id: user.id,
            etapa_atual: 'Fila de Medição',
            tipo_evento: tipoEventoStr,
            observacoes: `Pedido/Orçamento registrado no sistema via Plataforma. Status: ${data.status_comercial}. ${isHilImport ? 'Os dados foram auto-preenchidos e revisados com sucesso pelo Operador (HIL).' : ''} Enviado automaticamente para Fila de Medição.`
        });
        if (eventoErr) {
            console.error("Erro Gravissimo: Evento Sourcing falhou", eventoErr);
        }
        // Revalida a tabela de pedidos
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/pedidos');
        // Revalida a agenda de medição
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/agenda');
        return {
            success: true,
            message: 'Pedido gerado e enviado para Fila de Agendamento!',
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
async function excluirPedidoComercial(pedidoId, motivo = 'Não informado') {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return {
                success: false,
                message: 'Usuário não autenticado.'
            };
        }
        const isAdmin = user?.app_metadata?.role_name === 'admin' || user?.email === 'lucas@nexusxp.com.br' || user?.email === 'admin@marmo.com';
        if (!isAdmin) {
            return {
                success: false,
                message: 'Operação não permitida. Apenas administradores podem excluir pedidos.'
            };
        }
        // Buscar o pedido atual para obter o numero_orcamento
        const { data: pedidoAtual, error: getErr } = await supabase.from('pedidos_v2').select('numero_orcamento').eq('id', pedidoId).single();
        if (getErr || !pedidoAtual) {
            return {
                success: false,
                message: 'Pedido não encontrado.'
            };
        }
        const timestamp = new Date().getTime();
        const sufixo = `-EXC-${timestamp}`;
        const novoNumero = pedidoAtual.numero_orcamento ? `${pedidoAtual.numero_orcamento}${sufixo}` : `ID-${pedidoId.substring(0, 8).toUpperCase()}${sufixo}`;
        // Soft delete
        const { error: updateErr } = await supabase.from('pedidos_v2').update({
            status_comercial: 'Cancelado',
            numero_orcamento: novoNumero
        }).eq('id', pedidoId);
        if (updateErr) {
            console.error("Erro ao excluir pedido:", updateErr);
            return {
                success: false,
                message: `Não foi possível excluir o pedido: ${updateErr.message || JSON.stringify(updateErr)}`
            };
        }
        // Auditoria via Event Sourcing
        const { error: eventoErr } = await supabase.from('eventos_operacionais').insert({
            pedido_id: pedidoId,
            usuario_id: user.id,
            etapa_atual: 'Excluído',
            tipo_evento: 'Exclusão de Pedido',
            observacoes: `Pedido excluído (Soft Delete) pelo usuário. Motivo: ${motivo}`
        });
        if (eventoErr) console.error("Erro ao registrar evento de exclusão", eventoErr);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/pedidos');
        return {
            success: true,
            message: 'Pedido excluído com sucesso.'
        };
    } catch (err) {
        console.error('Erro em excluirPedidoComercial:', err);
        return {
            success: false,
            message: 'Erro interno ao excluir pedido.'
        };
    }
}
async function atualizarPedidoComercial(pedidoId, formData) {
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return {
                success: false,
                message: 'Usuário não autenticado.'
            };
        }
        // Extrair os dados
        const rawData = {
            numero_orcamento: formData.get('numero_orcamento'),
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
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2f$pedido_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPedidoComercialSchema"].safeParse(rawData);
        if (!result.success) {
            return {
                success: false,
                message: 'Dados de entrada inválidos. Verifique os campos.'
            };
        }
        const data = result.data;
        // Buscar o pedido atual
        const { data: pedidoAtual, error: getErr } = await supabase.from('pedidos_v2').select('cliente_id, obra_id, status_comercial, medicoes_v2(id, status)').eq('id', pedidoId).single();
        if (getErr || !pedidoAtual) {
            return {
                success: false,
                message: 'Pedido original não encontrado para atualização.'
            };
        }
        // Atualizar Cliente
        let clienteId = pedidoAtual.cliente_id;
        if (data.cliente_nome) {
            if (clienteId) {
                await supabase.from('clientes').update({
                    nome: data.cliente_nome,
                    telefone: data.telefone || null,
                    documento: data.documento || null
                }).eq('id', clienteId);
            } else {
                const { data: novoCliente } = await supabase.from('clientes').insert({
                    nome: data.cliente_nome,
                    telefone: data.telefone || null,
                    documento: data.documento || null
                }).select('id').single();
                if (novoCliente) clienteId = novoCliente.id;
            }
        }
        // Atualizar Obra
        let obraId = pedidoAtual.obra_id;
        if (clienteId && (data.endereco_obra || data.responsavel_obra)) {
            if (obraId) {
                await supabase.from('obras').update({
                    endereco: data.endereco_obra || null,
                    responsavel_obra: data.responsavel_obra || null
                }).eq('id', obraId);
            } else {
                const { data: novaObra } = await supabase.from('obras').insert({
                    cliente_id: clienteId,
                    endereco: data.endereco_obra || null,
                    responsavel_obra: data.responsavel_obra || null
                }).select('id').single();
                if (novaObra) obraId = novaObra.id;
            }
        }
        // Atualizar Pedido
        const { error: updateErr } = await supabase.from('pedidos_v2').update({
            numero_orcamento: data.numero_orcamento,
            cliente_id: clienteId,
            obra_id: obraId,
            status_comercial: data.status_comercial || 'Orçamento',
            data_prometida: data.data_prometida ? new Date(data.data_prometida).toISOString() : null,
            urgencia: data.urgencia,
            observacoes: data.observacoes || null
        }).eq('id', pedidoId);
        if (updateErr) {
            console.error("Erro ao atualizar pedido:", updateErr);
            if (updateErr.code === '23505') {
                return {
                    success: false,
                    message: 'Já existe um pedido cadastrado com este número de orçamento.'
                };
            }
            return {
                success: false,
                message: 'Não foi possível atualizar o pedido.'
            };
        }
        // Gerar medição se de repente passou a ser Aprovado e ainda não tem medição
        if (data.status_comercial === 'Aprovado' || data.status_comercial === 'Em Produção') {
            const hasActiveMedicao = pedidoAtual.medicoes_v2 && pedidoAtual.medicoes_v2.some((m)=>m.status !== 'Cancelada');
            if (!hasActiveMedicao) {
                const { error: medicaoErr } = await supabase.from('medicoes_v2').insert({
                    pedido_id: pedidoId,
                    status: 'PENDENTE'
                });
                if (!medicaoErr) {
                    await supabase.from('eventos_operacionais').insert({
                        pedido_id: pedidoId,
                        usuario_id: user.id,
                        etapa_atual: 'Fila de Medição',
                        tipo_evento: 'Re-agendamento Automático',
                        observacoes: `Pedido passou para ${data.status_comercial} e teve sua medição recriada automaticamente na Fila de Medição.`
                    });
                }
            }
        }
        // Auditoria
        await supabase.from('eventos_operacionais').insert({
            pedido_id: pedidoId,
            usuario_id: user.id,
            etapa_atual: data.status_comercial || 'Orçamento',
            tipo_evento: 'Edição de Pedido',
            observacoes: `Pedido editado pelo operador. Status atualizado para: ${data.status_comercial}.`
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/pedidos');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/pedidos/${pedidoId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/medicoes');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/agenda');
        return {
            success: true,
            message: 'Pedido atualizado com sucesso!'
        };
    } catch (err) {
        console.error('Erro em atualizarPedidoComercial:', err);
        return {
            success: false,
            message: 'Erro interno ao atualizar pedido.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    criarPedidoComercial,
    excluirPedidoComercial,
    atualizarPedidoComercial
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(criarPedidoComercial, "40d7a1815c5ab2a4cc2fa627d115d61490da51c58f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(excluirPedidoComercial, "601d5cbca583799e326c8674f36a93c295fd9a7eba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(atualizarPedidoComercial, "60d477880834ffd6889b797d42ea46826169acf68f", null);
}),
"[project]/.next-internal/server/app/(dashboard)/pedidos/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/(dashboard)/pedidos/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "601d5cbca583799e326c8674f36a93c295fd9a7eba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["excluirPedidoComercial"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$pedidos$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/pedidos/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$pedidos_v2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/pedidos_v2.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_115cbd38._.js.map