'use server';

import { Buffer } from 'buffer';
import { parseOrcamentoPDF, type ParsedResult, type ExtractedItem } from '@/lib/marmotrack-parser';

/**
 * Resultado achatado para o frontend.
 * Combina dados da obra (planos) + itens (hierárquicos).
 */
export interface PreviewResult {
  success: boolean;
  msg?: string;
  data?: {
    // Campos planos (achatados do parser + regex)
    cliente_nome: string;
    numero_orcamento: string;
    documento: string;
    endereco_obra: string;
    cidade_obra: string;
    // Itens hierárquicos do parser
    itens: ExtractedItem[];
  };
}

/**
 * Extrai campos do cabeçalho do texto bruto (pdf-parse v2).
 * 
 * Formato v2 esperado (colunas esmagadas):
 *   "595.490.760-91  ANA PAULA SANTIN DA SILVEIRA"
 *   "PÉ DE PLATANO ()        Avenida Prefeito Evandro Behr, 4279 - RUA D LOTE 87"
 *   "97110-800       Santa Maria - RS ()"
 */
function extractHeaderFields(rawText: string): {
  cliente_nome: string;
  numero_orcamento: string;
  documento: string;
  endereco_obra: string;
  cidade_obra: string;
} {
  let cliente_nome = '';
  let numero_orcamento = '';
  let documento = '';
  let endereco_obra = '';
  let cidade_obra = '';

  // 1. Número do Orçamento (ex: "Orçamento 3124")
  const orcMatch = rawText.match(/Orçamento\s+(\d+)/i);
  if (orcMatch) numero_orcamento = orcMatch[1].trim();

  // 2. Documento (CPF/CNPJ) + Nome do Cliente na mesma linha
  // Formato v2: "595.490.760-91  ANA PAULA SANTIN DA SILVEIRA"
  // O CPF/CNPJ vem colado ou com poucos espaços antes do nome
  const docNomeMatch = rawText.match(
    /(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})\s*([A-ZÀ-Ÿ][A-ZÀ-Ÿ\s]+)/
  );
  if (docNomeMatch) {
    documento = docNomeMatch[1].trim();
    cliente_nome = docNomeMatch[2].trim();
  }

  // 3. Endereço da Obra — buscar a linha "Bairro/Distrito + espaços + Endereço real"
  // Formato v2: "PÉ DE PLATANO ()        Avenida Prefeito Evandro Behr, 4279 - RUA D LOTE 87"
  // Pegamos a parte após os 3+ espaços que contém "Avenida|Rua|Lote|Rod|Estr|Tv|Al|Condomínio|BR-"
  const endLines = rawText.match(/^.*(?:Avenida|Rua|Rodovia|Estrada|Travessa|Alameda|Condomínio|Loteamento|BR-)\s*.+$/gim);
  if (endLines && endLines.length > 0) {
    // Pegar a segunda ocorrência (Dados da Obra) ou a primeira se só houver uma
    const endLine = endLines.length > 1 ? endLines[1] : endLines[0];
    // Extrair tudo após 3+ espaços (pular o bairro/distrito)
    const afterSpaces = endLine.match(/\s{3,}(.+)/);
    if (afterSpaces) {
      endereco_obra = afterSpaces[1].trim();
    } else {
      endereco_obra = endLine.trim();
    }
  }

  // 4. Cidade / UF — buscar "CEP + espaços + Cidade - UF"
  // Formato v2: "97110-800       Santa Maria - RS ()"
  // Pode ter "()" no final — removemos
  const cidadeMatch = rawText.match(
    /\d{5}-\d{3}\s{2,}([A-ZÀ-Ÿ][A-ZÀ-Ÿa-zà-ÿ\s]+\s*-\s*[A-Z]{2})/
  );
  if (cidadeMatch) {
    cidade_obra = cidadeMatch[1].replace(/\s*\(\s*\)\s*$/, '').trim();
  }

  return { cliente_nome, numero_orcamento, documento, endereco_obra, cidade_obra };
}

/**
 * Server Action principal de preview/extração de PDF.
 * 
 * Fluxo:
 * 1. Recebe o arquivo PDF via FormData
 * 2. Chama parseOrcamentoPDF (State Machine) para itens + dados da obra
 * 3. Extrai cliente_nome e numero_orcamento via regex no texto bruto
 * 4. Retorna tudo "achatado" para o frontend
 */
export async function previewPdfDataAction(formData: FormData): Promise<PreviewResult> {
  try {
    const file = formData.get('arquivoPdf') as File;
    if (!file) {
      return { success: false, msg: 'Nenhum arquivo encontrado no formulário.' };
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // ── Passo 1: Parser State Machine (itens + dados da obra) ──
    let parsedResult: ParsedResult;
    try {
      parsedResult = await parseOrcamentoPDF(buffer);
    } catch (parseError: any) {
      console.error('[Parser Action] Erro no parser:', parseError);
      return { success: false, msg: `Falha na extração estrutural: ${parseError.message}` };
    }

    // ── Passo 2: Regex para campos do cabeçalho ──
    // Precisamos do rawText para extrair cliente_nome e numero_orcamento
    let rawText = '';
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { PDFParse } = require('pdf-parse');
      const parser = new PDFParse({ data: new Uint8Array(buffer) });
      const textResult = await parser.getText();
      rawText = textResult.text;
      await parser.destroy();
    } catch (err) {
      console.error('[Parser Action] Erro ao chamar pdf-parse:', err);
      rawText = buffer.toString('utf-8');
    }

    const headerFields = extractHeaderFields(rawText);

    // ── Passo 3: Montar resultado achatado ──
    return {
      success: true,
      data: {
        cliente_nome: headerFields.cliente_nome,
        numero_orcamento: headerFields.numero_orcamento,
        documento: headerFields.documento,
        endereco_obra: headerFields.endereco_obra || parsedResult.dadosObra.endereco,
        cidade_obra: headerFields.cidade_obra || parsedResult.dadosObra.cidade,
        itens: parsedResult.itens,
      },
    };

  } catch (error: any) {
    console.error('[Parser Action] Erro crítico:', error);
    return { success: false, msg: 'Falha crítica ao processar PDF.' };
  }
}
