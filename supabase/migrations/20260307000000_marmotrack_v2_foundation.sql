-- Migrations: MarmoTrack v0.2.0 - Fundação e Rastreabilidade Event-Sourcing

-- 1. Tabela: clientes
create table if not exists public.clientes (
    id uuid default gen_random_uuid() primary key,
    nome text not null,
    telefone text,
    documento text, -- CPF/CNPJ
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.clientes enable row level security;
create policy "Autenticados podem ler clientes" on public.clientes for select to authenticated using (true);
create policy "Autenticados podem inserir clientes" on public.clientes for insert to authenticated with check (true);
create policy "Autenticados podem atualizar clientes" on public.clientes for update to authenticated using (true);


-- 2. Tabela: obras
create table if not exists public.obras (
    id uuid default gen_random_uuid() primary key,
    cliente_id uuid not null references public.clientes(id) on delete cascade,
    endereco text,
    responsavel_obra text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.obras enable row level security;
create policy "Autenticados podem ler obras" on public.obras for select to authenticated using (true);
create policy "Autenticados podem inserir obras" on public.obras for insert to authenticated with check (true);
create policy "Autenticados podem atualizar obras" on public.obras for update to authenticated using (true);


-- 3. Tabela: pedidos (Versão v0.2.0 com Status Comercial)
create table if not exists public.pedidos_v2 (
    id uuid default gen_random_uuid() primary key,
    cliente_id uuid not null references public.clientes(id) on delete restrict,
    obra_id uuid references public.obras(id) on delete set null,
    status_comercial text not null default 'Orçamento' check (status_comercial in ('Orçamento', 'Aguardando Aprovação', 'Aprovado', 'Cancelado')),
    data_prometida date,
    urgencia text not null default 'Normal' check (urgencia in ('Baixa', 'Normal', 'Alta')),
    observacoes text,
    created_by uuid references auth.users(id), -- Quem criou
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.pedidos_v2 enable row level security;
create policy "Autenticados podem ler pedidos_v2" on public.pedidos_v2 for select to authenticated using (true);
create policy "Autenticados podem inserir pedidos_v2" on public.pedidos_v2 for insert to authenticated with check (true);
create policy "Autenticados podem atualizar pedidos_v2" on public.pedidos_v2 for update to authenticated using (true);


-- 4. Tabela: eventos_operacionais (O Coração do Event Sourcing)
create table if not exists public.eventos_operacionais (
    id uuid default gen_random_uuid() primary key,
    peca_id uuid, -- Será populada futuramente quando as peças existirem (Fase 7)
    pedido_id uuid not null references public.pedidos_v2(id) on delete cascade,
    usuario_id uuid references auth.users(id) not null,
    etapa_atual text not null,
    tipo_evento text not null, -- Ex: 'Entrada em Custodia', 'Alteracao Comercial', 'Pausa'
    maquina_id uuid, -- Nullable por enquanto
    observacoes text,
    pendencia_motivo text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null -- Imutável
);

alter table public.eventos_operacionais enable row level security;
create policy "Autenticados podem ler eventos" on public.eventos_operacionais for select to authenticated using (true);
create policy "Autenticados podem inserir eventos" on public.eventos_operacionais for insert to authenticated with check (true);
-- Sem política de UPDATE ou DELETE. Eventos são imutáveis em Event Sourcing!
