'use server';

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function uploadOrcamentoAction(formData: FormData) {
    const supabase = await createClient();

    const file = formData.get('file') as File;
    
    if (!file) {
        return { success: false, error: "Nenhum arquivo enviado." };
    }

    if (file.type !== "application/pdf") {
         return { success: false, error: "Apenas arquivos PDF são aceitos." };
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
         return { success: false, error: "O arquivo excede o limite de 10MB." };
    }

    // Gerar um nome único e seguro para o bucket
    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    // Importante: No Supabase RLS, uploads para pastas raiz precisam de policy. Subpastas podem requerer paths explícitos.
    const filePath = `orcamentos/${fileName}`;

    // Executar o upload via Supabase Admin Client ou Authenticated Client
    const { data: uploadData, error: uploadError } = await supabase.storage
        .from('orcamentos_pdfs')
        .upload(filePath, file, {
            contentType: 'application/pdf',
            upsert: false
        });

    if (uploadError) {
        // Log detalhado no Servidor
        console.error("====== SUPABASE STORAGE UPLOAD ERROR ======");
        console.error("Nome do Erro:", uploadError.name);
        console.error("Mensagem do Erro:", uploadError.message);
        console.error("Detalhes da Request (Path):", filePath);
        console.error("Objeto Error Inteiro:", JSON.stringify(uploadError, null, 2));
        console.error("===========================================");

        // Retornamos a mensagem nativa do erro (ex: new row violates row level security, Access denied) 
        // para que a UI lance um Toast assertivo.
        return { 
            success: false, 
            error: `Erro no Supabase: ${uploadError.message || 'Falha de Permissão ou Rede (Verifique RLS)'}` 
        };
    }

    // Caso de sucesso
    const path = encodeURIComponent(uploadData.path);
    
    redirect(`/import/revisao?file=${path}`);
}
