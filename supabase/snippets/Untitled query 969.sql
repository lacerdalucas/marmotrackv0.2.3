-- Garante que o bucket orcamentos_pdfs existe e é público
insert into storage.buckets (id, name, public)
values ('orcamentos_pdfs', 'orcamentos_pdfs', true)
on conflict (id) do nothing;

-- Limpa tentativas anteriores para não dar erro de duplicação
drop policy if exists "Autenticados podem fazer upload de PDFs" on storage.objects;
drop policy if exists "Todos podem visualizar/ler PDFs" on storage.objects;
drop policy if exists "Autenticados podem deletar PDFs" on storage.objects;
drop policy if exists "Autenticados podem atualizar PDFs" on storage.objects;

-- 1. Permitir UPLOAD (Corrigido o metadata->>'mimetype')
create policy "Autenticados podem fazer upload de PDFs"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'orcamentos_pdfs'
  and (storage.extension(name) = 'pdf' or (metadata->>'mimetype') = 'application/pdf')
);

-- 2. Permitir LEITURA (Download/View)
create policy "Todos podem visualizar/ler PDFs"
on storage.objects for select
to public
using ( bucket_id = 'orcamentos_pdfs' );

-- 3. Permitir DELETAR
create policy "Autenticados podem deletar PDFs"
on storage.objects for delete
to authenticated
using ( bucket_id = 'orcamentos_pdfs' );

-- 4. Permitir ATUALIZAR
create policy "Autenticados podem atualizar PDFs"
on storage.objects for update
to authenticated
using ( bucket_id = 'orcamentos_pdfs' );