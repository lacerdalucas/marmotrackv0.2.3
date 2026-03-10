-- Migrations: MarmoTrack v0.2.0 - Correção da Fila de Projetos (RPC)

-- Função para listar os pedidos aptos para a fila de Projetos
-- Condição: Pedido Aprovado E (Não precisa de medição OU (tem medição concluída e apta para projeto))
create or replace function public.get_pedidos_fila_projeto()
returns setof public.pedidos_v2
language sql
security definer
as $$
  select p.*
  from public.pedidos_v2 p
  where p.status_comercial = 'Aprovado'
    and (
      p.precisa_medicao = false
      or exists (
        select 1 
        from public.medicoes_v2 m 
        where m.pedido_id = p.id 
          and m.status = 'Concluida' 
          and m.apto_para_projeto = true
      )
    );
$$;
