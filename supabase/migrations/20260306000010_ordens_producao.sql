-- Criar tabela "ordens_producao"
create table if not exists public.ordens_producao (
    id uuid default gen_random_uuid() primary key,
    pedido_item_id text not null, -- FK para a peça
    status_etapa text not null default 'Fila de Corte',
    prioridade text not null default 'Normal',
    operador_id uuid, -- Para referenciar quem assumiu
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ativar RLS
alter table public.ordens_producao enable row level security;

-- Política para leitura
create policy "Todos os autenticados podem ver as ordens de producao"
on public.ordens_producao for select
to authenticated
using (true);

-- Política para inserção
create policy "Autenticados podem inserir ordens de producao"
on public.ordens_producao for insert
to authenticated
with check (true);

-- Política para update
create policy "Autenticados podem atualizar ordens de producao"
on public.ordens_producao for update
to authenticated
using (true);
