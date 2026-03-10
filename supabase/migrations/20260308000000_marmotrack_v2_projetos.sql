-- Migrations: MarmoTrack v0.2.0 - Fase 4 e 5 (Setor de Projetos)

-- 1. Tabela: projetos_v2
create table if not exists public.projetos_v2 (
    id uuid default gen_random_uuid() primary key,
    pedido_id uuid not null references public.pedidos_v2(id) on delete cascade,
    projetista_id uuid references auth.users(id), -- Quem elaborou o projeto
    status text not null default 'Aguardando Projeto' check (status in ('Aguardando Projeto', 'Em Andamento', 'Aguardando Aprovação', 'Aprovado', 'Reprovado')),
    revisao integer default 1,
    arquivo_url text, -- URL do PDF de projeto
    observacoes text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ativar RLS
alter table public.projetos_v2 enable row level security;

-- Políticas de Acesso
create policy "Autenticados podem ler projetos" on public.projetos_v2 for select to authenticated using (true);
create policy "Autenticados podem inserir projetos" on public.projetos_v2 for insert to authenticated with check (true);
create policy "Autenticados podem atualizar projetos" on public.projetos_v2 for update to authenticated using (true);
