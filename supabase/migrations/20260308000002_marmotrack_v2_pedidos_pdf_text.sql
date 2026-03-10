-- Migrations: MarmoTrack v0.2.0 - Resgate do Parser de PDF (In-Memory)

-- 1. Alteração na Tabela Pedidos_v2 para incluir o texto_extraido
alter table public.pedidos_v2 
add column if not exists texto_extraido text;
