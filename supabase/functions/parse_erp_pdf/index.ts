// supabase/functions/parse_erp_pdf/index.ts
// Servidor de Edge (Deno) para Ingestão de PDF.
// Operando como "Staging DataLoader". A inteligência final está no humano.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '' // Service role para bypass no próprio server (Staging Table é administrativa)
    )

    const { jobId, filePath } = await req.json()

    // 1. (Teórico) Fazer download do PDF do Storage usando o filePath
    // const { data: fileData } = await supabaseClient.storage.from('imports').download(filePath)
    
    // 2. (Teórico) Extrair Texto via Lib Deno (Ex: pdf-parse porta)
    const mockRawText = "ORÇAMENTO 8891\nCliente: João\n1x Banheiro Suite - Tampo 200x60 Branco\n1x Cozinha - Ilha 150x90 Preto Absoluto"
    
    // 3. (Atualização) Grava o Log do texto bruto na Staging Import Jobs
    await supabaseClient
      .from('import_jobs')
      .update({ raw_extracted_text: mockRawText, status: 'AWAITING_REVIEW' })
      .eq('id', jobId)

    // 4. Heurística Híbrida MOCK (A extração em si)
    // No futuro, isso pode ser um POST para a OpenAI enviando o mockRawText.
    const extractedHypotheses = [
      {
        job_id: jobId,
        source_text_snippet: "1x Banheiro Suite - Tampo 200x60 Branco",
        confidence_score: 85,
        status: 'PENDING',
        parsed_data: {
          environment: "Banheiro Suite",
          name: "Tampo",
          material_name: "Branco",
          dimensions_mm: { length: 2000, width: 600 }
        }
      },
      {
        job_id: jobId,
        source_text_snippet: "1x Cozinha - Ilha 150x90 Preto Absoluto",
        confidence_score: 92,
        status: 'PENDING',
        parsed_data: {
          environment: "Cozinha",
          name: "Ilha",
          material_name: "Preto Absoluto",
          dimensions_mm: { length: 1500, width: 900 }
        }
      },
      {
         job_id: jobId,
         source_text_snippet: "Texto borrado ilegível",
         confidence_score: 30, // Score Baixo forçará o humano a corrigir!
         status: 'PENDING',
         parsed_data: {
           environment: "Desconhecido",
           name: "Desconhecido"
         }
      }
    ]

    // 5. Insert no Banco Staging de Itens (As Hipóteses)
    const { error: insertError } = await supabaseClient
      .from('import_job_extracted_items')
      .insert(extractedHypotheses)

    if (insertError) throw insertError;

    return new Response(
      JSON.stringify({ message: "Job processado com sucesso para Quarentena." }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
