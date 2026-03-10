-- Criar bucket de storage "projetos_pdf"
insert into storage.buckets (id, name, public)
values ('projetos_pdf', 'projetos_pdf', true)
on conflict (id) do nothing;

-- RLS para inserção (Apenas autenticados)
create policy "Autenticados podem fazer upload de projetos"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'projetos_pdf' );

-- RLS para leitura (Pública)
create policy "Todos podem ler PDFs de projetos"
on storage.objects for select
to public
using ( bucket_id = 'projetos_pdf' );

-- Criar tabela "pedidos"
create table if not exists public.pedidos (
    id uuid default gen_random_uuid() primary key,
    cliente_nome text not null,
    prazo_entrega date,
    status text default 'Pendente',
    arquivo_pdf_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ativar RLS na tabela "pedidos"
alter table public.pedidos enable row level security;

-- RLS para inserção de pedidos (Autenticados)
create policy "Autenticados podem criar pedidos"
on public.pedidos for insert
to authenticated
with check (true);

-- RLS para leitura de pedidos (Autenticados)
create policy "Autenticados podem ler pedidos"
on public.pedidos for select
to authenticated
using (true);
