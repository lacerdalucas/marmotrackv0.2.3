-- Alterar a tabela "pedidos" para remover "arquivo_pdf_url" e adicionar "texto_extraido"
alter table public.pedidos drop column if exists arquivo_pdf_url;
alter table public.pedidos add column if not exists texto_extraido text;
