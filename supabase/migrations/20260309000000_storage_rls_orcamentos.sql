-- Configuração do Storage para orcamentos_pdfs

-- Garante que o bucket orcamentos_pdfs existe e é público (para que possamos obter a publicUrl facilmente, se desejado)
-- Nota: se não quiser arquivos públicos, altere "public" de true para false.
insert into storage.buckets (id, name, public)
values ('orcamentos_pdfs', 'orcamentos_pdfs', true)
on conflict (id) do nothing;

-- 1. Política para permitir UPLOAD (INSERT) apenas por usuários autenticados
create policy "Autenticados podem fazer upload de PDFs"
on storage.objects for insert
to authenticated
with check (
    bucket_id = 'orcamentos_pdfs' 
    and (storage.extension(name) = 'pdf' or mimetype = 'application/pdf')
);

-- 2. Política para permitir LEITURA/DOWNLOAD (SELECT) de arquivos do bucket
create policy "Todos podem visualizar/ler PDFs"
on storage.objects for select
to public
using ( bucket_id = 'orcamentos_pdfs' );

-- 3. Política para permitir DELETE (se o arquivo for abortado e precisar ser apagado)
create policy "Autenticados podem deletar PDFs"
on storage.objects for delete
to authenticated
using ( bucket_id = 'orcamentos_pdfs' );

-- 4. Política para permitir UPDATE (se houver upsert ou atualização de meta)
create policy "Autenticados podem atualizar PDFs"
on storage.objects for update
to authenticated
using ( bucket_id = 'orcamentos_pdfs' );
