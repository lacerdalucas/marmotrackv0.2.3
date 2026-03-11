'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { createPedidoComercialSchema } from '@/lib/validations/pedido_v2';

export async function criarPedidoComercial(formData: FormData) {
  try {
    const supabase = await createClient();

    // 1. Obter usuário logado (Obrigatório para o Event Sourcing)
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, message: 'Usuário não autenticado.' };
    }

    // 2. Extrair dados brutos
    const rawData = {
      numero_orcamento: formData.get('numero_orcamento') as string,
      cliente_nome: formData.get('cliente_nome') as string,
      telefone: formData.get('telefone') as string,
      documento: formData.get('documento') as string,
      endereco_obra: formData.get('endereco_obra') as string,
      cidade_obra: formData.get('cidade_obra') as string,
      responsavel_obra: formData.get('responsavel_obra') as string,
      marcenaria_responsavel: formData.get('marcenaria_responsavel') as string,
      contato_arquitetura: formData.get('contato_arquitetura') as string,
      status_comercial: formData.get('status_comercial') as string,
      data_prometida: formData.get('data_prometida') as string,
      urgencia: formData.get('urgencia') as string,
      observacoes: formData.get('observacoes') as string,
    };

    // 3. Validar via Zod
    const result = createPedidoComercialSchema.safeParse(rawData);
    if (!result.success) {
      return { success: false, message: 'Dados de entrada inválidos. Verifique os campos.' };
    }
    const data = result.data;

    // 3.5. Extrair PDF In-Memory
    // NOVO FLUXO (HIL): O PDF já foi extraído via 'previewPdfDataAction' na UI. O arquivo
    // viaja no FormData caso queiramos salvar no bucket futuramente, mas para Custódia apenas, não recarregamos texto aqui.
    // Assumimos a curadoria do Operador.
    const arquivoPdf = formData.get('arquivoPdf') as File | null;
    const isHilImport = arquivoPdf && arquivoPdf.size > 0;

    // 4. Iniciar transação (Supabase RPC ou Multi-insert via FKs)
    // Procurar ou Criar Cliente
    let clienteId = null;
    if (data.cliente_nome) {
      const { data: novoCliente, error: clienteErr } = await supabase
        .from('clientes')
        .insert({ 
          nome: data.cliente_nome, 
          telefone: data.telefone || null, 
          documento: data.documento || null 
        })
        .select('id')
        .single();
        
      if (clienteErr) return { success: false, message: 'Erro ao cadastrar Cliente.' };
      clienteId = novoCliente.id;
    }

    // Procurar ou Criar Obra (Atrelada ao Cliente)
    let obraId = null;
    if (clienteId && (data.endereco_obra || data.responsavel_obra)) {
      const { data: novaObra, error: obraErr } = await supabase
        .from('obras')
        .insert({ 
          cliente_id: clienteId, 
          endereco: data.endereco_obra || null,
          cidade: data.cidade_obra || null,
          responsavel_obra: data.responsavel_obra || null 
        })
        .select('id')
        .single();
        
      if (obraErr) return { success: false, message: 'Erro ao cadastrar Obra.' };
      obraId = novaObra.id;
    }

    // 5. Cadastrar Pedido
    const { data: novoPedido, error: pedidoErr } = await supabase
      .from('pedidos_v2')
      .insert({
        numero_orcamento: data.numero_orcamento,
        cliente_id: clienteId,
        obra_id: obraId,
        status_comercial: data.status_comercial || 'Orçamento',
        data_prometida: data.data_prometida ? new Date(data.data_prometida).toISOString() : null,
        urgencia: data.urgencia,
        observacoes: data.observacoes || null,
        marcenaria_responsavel: data.marcenaria_responsavel || null,
        contato_arquitetura: data.contato_arquitetura || null,
        texto_extraido: isHilImport ? "[EXTRAÇÃO HIL - REVISADO PELO OPERADOR]" : null,
        created_by: user.id
      })
      .select('id')
      .single();

    if (pedidoErr) {
        console.error("Erro Pedido V2:", pedidoErr);
        if (pedidoErr.code === '23505') {
            return { success: false, message: 'Já existe um pedido cadastrado com este número de orçamento.' };
        }
        return { success: false, message: 'Erro ao gerar o Pedido.' };
    }

    if (!novoPedido) {
        return { success: false, message: 'Erro ao gerar o Pedido.' };
    }

    // 5.3 Bulk insert de itens (se vieram do formulário)
    const itensJson = formData.get('itens_extraidos') as string;
    if (itensJson) {
      try {
        const itens = JSON.parse(itensJson);
        if (Array.isArray(itens) && itens.length > 0) {
          const rows = itens.map((item: any) => ({
            pedido_id: novoPedido.id,
            ambiente: item.ambiente || '',
            material: item.material || '',
            partes_medidas: item.partes_medidas || [],
            acabamentos: item.acabamentos || [],
            servicos: item.servicos || [],
          }));
          const { error: itensErr } = await supabase.from('pedidos_itens_v2').insert(rows);
          if (itensErr) console.error('[criarPedido] Erro ao inserir itens:', itensErr);
        }
      } catch (parseErr) {
        console.error('[criarPedido] Erro ao parsear itens_extraidos:', parseErr);
      }
    }

    // ==========================================
    // 5.5 GATILHO DE NEGÓCIO: Fila do PCP (Agenda de Medição)
    // Apenas se o pedido já nasce Aprovado ou Em Produção ele entra na Fila.
    // ==========================================
    if (data.status_comercial === 'Aprovado' || data.status_comercial === 'Em Produção') {
        const { error: medicaoErr } = await supabase
          .from('medicoes_v2')
          .insert({
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
    
    const { error: eventoErr } = await supabase
      .from('eventos_operacionais')
      .insert({
          pedido_id: novoPedido.id,
          usuario_id: user.id,
          etapa_atual: 'Fila de Medição', // Atualizado para refletir a ida ao PCP
          tipo_evento: tipoEventoStr,
          observacoes: `Pedido/Orçamento registrado no sistema via Plataforma. Status: ${data.status_comercial}. ${isHilImport ? 'Os dados foram auto-preenchidos e revisados com sucesso pelo Operador (HIL).' : ''} Enviado automaticamente para Fila de Medição.`
      });

    if (eventoErr) {
        console.error("Erro Gravissimo: Evento Sourcing falhou", eventoErr);
    }

    // Revalida a tabela de pedidos
    revalidatePath('/pedidos');
    // Revalida a agenda de medição
    revalidatePath('/agenda');

    return { 
      success: true, 
      message: 'Pedido gerado e enviado para Fila de Agendamento!',
      pedido_id: novoPedido.id
    };

  } catch (err) {
    console.error('Erro catastrófico em criarPedidoComercial:', err);
    return { success: false, message: 'Erro inesperado interno do Servidor.' };
  }
}

// ==========================================
// BUSCA COMPLETA COM ITENS
// ==========================================

export async function getPedidoCompletoById(pedidoId: string) {
  try {
    const supabase = await createClient();

    // Buscar pedido com JOINs
    const { data: pedido, error } = await supabase
      .from('pedidos_v2')
      .select(`
        *,
        cliente:clientes (nome, telefone, documento),
        obra:obras (endereco, cidade, responsavel_obra)
      `)
      .eq('id', pedidoId)
      .single();

    if (error || !pedido) {
      return { success: false, data: null };
    }

    // Buscar itens separadamente
    const { data: itens } = await supabase
      .from('pedidos_itens_v2')
      .select('*')
      .eq('pedido_id', pedidoId)
      .order('created_at', { ascending: true });

    // Montar initialData no formato do formulário
    const initialData = {
      numero_orcamento: pedido.numero_orcamento || '',
      cliente_nome: pedido.cliente?.nome || '',
      telefone: pedido.cliente?.telefone || '',
      documento: pedido.cliente?.documento || '',
      endereco_obra: pedido.obra?.endereco || '',
      cidade_obra: pedido.obra?.cidade || '',
      responsavel_obra: pedido.obra?.responsavel_obra || '',
      marcenaria_responsavel: pedido.marcenaria_responsavel || '',
      contato_arquitetura: pedido.contato_arquitetura || '',
      status_comercial: pedido.status_comercial || 'Orçamento',
      data_prometida: pedido.data_prometida
        ? new Date(pedido.data_prometida).toISOString().split('T')[0]
        : '',
      urgencia: pedido.urgencia || 'Normal',
      observacoes: pedido.observacoes || '',
    };

    // Formatar itens para o FieldArray do form
    const initialItems = (itens || []).map((item: any) => ({
      ambiente: item.ambiente || '',
      material: item.material || '',
      partes_medidas: Array.isArray(item.partes_medidas) ? item.partes_medidas : [],
      acabamentos: Array.isArray(item.acabamentos) ? item.acabamentos : [],
      servicos: Array.isArray(item.servicos) ? item.servicos : [],
    }));

    return { success: true, data: initialData, items: initialItems };

  } catch (err) {
    console.error('Erro em getPedidoCompletoById:', err);
    return { success: false, data: null };
  }
}

// ==========================================
// FUNÇÕES DE EDIÇÃO E EXCLUSÃO (Soft Delete)
// ==========================================

export async function excluirPedidoComercial(pedidoId: string, motivo: string = 'Não informado') {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, message: 'Usuário não autenticado.' };
    }

    const isAdmin = user?.app_metadata?.role_name === 'admin' || 
                    user?.email === 'lucas@nexusxp.com.br' ||
                    user?.email === 'admin@marmo.com';
    if (!isAdmin) {
      return { success: false, message: 'Operação não permitida. Apenas administradores podem excluir pedidos.' };
    }

    // Buscar o pedido atual para obter o numero_orcamento
    const { data: pedidoAtual, error: getErr } = await supabase
        .from('pedidos_v2')
        .select('numero_orcamento')
        .eq('id', pedidoId)
        .single();
    
    if (getErr || !pedidoAtual) {
        return { success: false, message: 'Pedido não encontrado.' };
    }

    const timestamp = new Date().getTime();
    const sufixo = `-EXC-${timestamp}`;
    const novoNumero = pedidoAtual.numero_orcamento 
        ? `${pedidoAtual.numero_orcamento}${sufixo}` 
        : `ID-${pedidoId.substring(0,8).toUpperCase()}${sufixo}`;

    // Soft delete
    const { error: updateErr } = await supabase
      .from('pedidos_v2')
      .update({ 
        status_comercial: 'Cancelado',
        numero_orcamento: novoNumero 
      })
      .eq('id', pedidoId);

    if (updateErr) {
      console.error("Erro ao excluir pedido:", updateErr);
      return { success: false, message: `Não foi possível excluir o pedido: ${updateErr.message || JSON.stringify(updateErr)}` };
    }

    // Auditoria via Event Sourcing
    const { error: eventoErr } = await supabase
      .from('eventos_operacionais')
      .insert({
          pedido_id: pedidoId,
          usuario_id: user.id,
          etapa_atual: 'Excluído',
          tipo_evento: 'Exclusão de Pedido',
          observacoes: `Pedido excluído (Soft Delete) pelo usuário. Motivo: ${motivo}`
      });

    if (eventoErr) console.error("Erro ao registrar evento de exclusão", eventoErr);

    revalidatePath('/pedidos');
    
    return { success: true, message: 'Pedido excluído com sucesso.' };
  } catch (err) {
    console.error('Erro em excluirPedidoComercial:', err);
    return { success: false, message: 'Erro interno ao excluir pedido.' };
  }
}

export async function atualizarPedidoComercial(pedidoId: string, formData: FormData) {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, message: 'Usuário não autenticado.' };
    }

    // Extrair os dados
    const rawData = {
      numero_orcamento: formData.get('numero_orcamento') as string,
      cliente_nome: formData.get('cliente_nome') as string,
      telefone: formData.get('telefone') as string,
      documento: formData.get('documento') as string,
      endereco_obra: formData.get('endereco_obra') as string,
      cidade_obra: formData.get('cidade_obra') as string,
      responsavel_obra: formData.get('responsavel_obra') as string,
      marcenaria_responsavel: formData.get('marcenaria_responsavel') as string,
      contato_arquitetura: formData.get('contato_arquitetura') as string,
      status_comercial: formData.get('status_comercial') as string,
      data_prometida: formData.get('data_prometida') as string,
      urgencia: formData.get('urgencia') as string,
      observacoes: formData.get('observacoes') as string,
    };

    const result = createPedidoComercialSchema.safeParse(rawData);
    if (!result.success) {
      return { success: false, message: 'Dados de entrada inválidos. Verifique os campos.' };
    }
    const data = result.data;

    // Buscar o pedido atual
    const { data: pedidoAtual, error: getErr } = await supabase
        .from('pedidos_v2')
        .select('cliente_id, obra_id, status_comercial, medicoes_v2(id, status)')
        .eq('id', pedidoId)
        .single();
    
    if (getErr || !pedidoAtual) {
        return { success: false, message: 'Pedido original não encontrado para atualização.' };
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
                cidade: data.cidade_obra || null,
                responsavel_obra: data.responsavel_obra || null
            }).eq('id', obraId);
        } else {
            const { data: novaObra } = await supabase.from('obras').insert({
                cliente_id: clienteId,
                endereco: data.endereco_obra || null,
                cidade: data.cidade_obra || null,
                responsavel_obra: data.responsavel_obra || null
            }).select('id').single();
            if (novaObra) obraId = novaObra.id;
        }
    }

    // Atualizar Pedido
    const { error: updateErr } = await supabase
      .from('pedidos_v2')
      .update({
        numero_orcamento: data.numero_orcamento,
        cliente_id: clienteId,
        obra_id: obraId,
        status_comercial: data.status_comercial || 'Orçamento',
        data_prometida: data.data_prometida ? new Date(data.data_prometida).toISOString() : null,
        urgencia: data.urgencia,
        observacoes: data.observacoes || null,
        marcenaria_responsavel: data.marcenaria_responsavel || null,
        contato_arquitetura: data.contato_arquitetura || null,
      })
      .eq('id', pedidoId);

    if (updateErr) {
      console.error("Erro ao atualizar pedido:", updateErr);
      if (updateErr.code === '23505') {
          return { success: false, message: 'Já existe um pedido cadastrado com este número de orçamento.' };
      }
      return { success: false, message: 'Não foi possível atualizar o pedido.' };
    }

    // ── Itens: Delete + Insert (Replace-All) ──
    const itensJson = formData.get('itens_extraidos') as string;
    if (itensJson) {
      try {
        const itens = JSON.parse(itensJson);
        // Deletar itens antigos
        await supabase.from('pedidos_itens_v2').delete().eq('pedido_id', pedidoId);
        // Inserir novos
        if (Array.isArray(itens) && itens.length > 0) {
          const rows = itens.map((item: any) => ({
            pedido_id: pedidoId,
            ambiente: item.ambiente || '',
            material: item.material || '',
            partes_medidas: item.partes_medidas || [],
            acabamentos: item.acabamentos || [],
            servicos: item.servicos || [],
          }));
          const { error: itensErr } = await supabase.from('pedidos_itens_v2').insert(rows);
          if (itensErr) console.error('[atualizarPedido] Erro ao inserir itens:', itensErr);
        }
      } catch (parseErr) {
        console.error('[atualizarPedido] Erro ao parsear itens_extraidos:', parseErr);
      }
    }

    // Gerar medição se de repente passou a ser Aprovado e ainda não tem medição
    if ((data.status_comercial === 'Aprovado' || data.status_comercial === 'Em Produção')) {
        const hasActiveMedicao = pedidoAtual.medicoes_v2 && pedidoAtual.medicoes_v2.some((m: any) => m.status !== 'Cancelada');
        
        if (!hasActiveMedicao) {
            const { error: medicaoErr } = await supabase
              .from('medicoes_v2')
              .insert({
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

    revalidatePath('/pedidos');
    revalidatePath(`/pedidos/${pedidoId}`);
    revalidatePath('/medicoes');
    revalidatePath('/agenda');

    return { success: true, message: 'Pedido atualizado com sucesso!' };

  } catch (err) {
    console.error('Erro em atualizarPedidoComercial:', err);
    return { success: false, message: 'Erro interno ao atualizar pedido.' };
  }
}
