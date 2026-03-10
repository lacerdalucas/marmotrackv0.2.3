-- Migrations: MarmoTrack v0.2.0 - Fase 2 e 3 (Medição e Aprovação)

-- 1. Alteração na Tabela Pedidos_v2
alter table public.pedidos_v2 
add column  if not exists precisa_medicao boolean default true,
add column  if not exists data_aprovacao timestamp with time zone;

-- Remover a check constraint antiga para recriar se necessário ou apenas adicionar status (O PostgreSQL permite adicionar a uma constraint enum, mas como usamos text check, vamos recriar a constraint para garantir integridade, se o Supabase permitir direto, ou apenas ignorar se já atende). 
-- Como 'Aprovado' já estava no check da Fase 1, não precisamos alterar o CHECK constraint do status_comercial.

-- 2. Tabela: medicoes_v2
create table if not exists public.medicoes_v2 (
    id uuid default gen_random_uuid() primary key,
    pedido_id uuid not null references public.pedidos_v2(id) on delete cascade,
    responsavel_id uuid references auth.users(id), -- Quem vai medir
    data_agendada timestamp with time zone,
    status text not null default 'Agendada' check (status in ('Agendada', 'Em Andamento', 'Concluida', 'Frustrada', 'Cancelada')),
    pendencias_obra text,
    apto_para_projeto boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ativar RLS
alter table public.medicoes_v2 enable row level security;

-- Políticas de Acesso
create policy "Autenticados podem ler medições" on public.medicoes_v2 for select to authenticated using (true);
create policy "Autenticados podem inserir medições" on public.medicoes_v2 for insert to authenticated with check (true);
create policy "Autenticados podem atualizar medições" on public.medicoes_v2 for update to authenticated using (true);
