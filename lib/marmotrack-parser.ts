/**
 * ═══════════════════════════════════════════════════════════════
 * MarmoTrack - Parser de Orçamentos PDF (Promob/Focco)
 * ═══════════════════════════════════════════════════════════════
 *
 * Arquitetura: State Machine com fluxo contínuo de texto.
 *
 * REGRA FUNDAMENTAL:
 *   Uma peça é delimitada pela linha do MATERIAL.
 *   A peça começa na linha do material e só termina quando
 *   outro material aparecer — mesmo na troca de páginas.
 *
 * Tratamentos de anomalias:
 *   - Quebras de página (\f) no meio de tabelas
 *   - Prefixo numérico "1" colado no ambiente
 *   - Material na mesma linha ou flutuando nas proximidades
 *   - Cabeçalho "Acabamento" vs dado "ACABAMENTO 45° SIMPLES"
 *   - Nomes de ambiente contendo keywords de material
 *     (ex: "ESCADARIA EM QUARTZITO")
 *   - Indentação inconsistente entre páginas
 *   - Material quebrando em 2 linhas (ex: MATARAZZO\nPOLIDO)
 *
 * @module parseOrcamentoPDF
 * @version 3.0.0
 */

// ─────────────────────────────────────────────────────────────
// 1. INTERFACES DE CONTRATO
// ─────────────────────────────────────────────────────────────

export interface ExtractedItem {
  ambiente: string;
  material: string;
  partes_medidas: Array<{
    peca: string;
    comprimento: string;
    largura: string;
    quantidade: string;
  }>;
  acabamentos: Array<{
    descricao: string;
    unidade: string;
    quantidade: string;
  }>;
  servicos: Array<{
    descricao: string;
    unidade: string;
    quantidade: string;
  }>;
}

export interface ParsedResult {
  dadosObra: {
    endereco: string;
    cidade: string;
  };
  itens: ExtractedItem[];
}

// ─────────────────────────────────────────────────────────────
// 2. ENUMS E CONSTANTES
// ─────────────────────────────────────────────────────────────

/** Estados da State Machine */
enum ParserState {
  HEADER = "HEADER",
  DADOS_OBRA = "DADOS_OBRA",
  ITENS = "ITENS",
  MEDIDAS = "MEDIDAS",
  ACABAMENTO = "ACABAMENTO",
  SERVICOS = "SERVICOS",
  TOTAIS = "TOTAIS",
}

/** Palavras-chave que identificam um material de pedra */
const MATERIAL_KEYWORDS: string[] = [
  "GRANITO",
  "MÁRMORE",
  "MARMORE",
  "QUARTZO",
  "QUARTZITO",
  "SUPERFÍCIE",
  "SUPERFICIE",
  "SILESTONE",
  "DEKTON",
  "LÂMINA",
  "LAMINA",
  "NEOLITH",
  "PORCELANATO",
];

/**
 * Regex para detectar o gatilho de ambiente.
 * Aceita prefixo "1", espaços soltos, e caracteres como "+".
 * Suporta 2 ou 3 dígitos (ex: "01 - LAVANDERIA", "101 - LAVANDERIA").
 * Sem âncora de início — pdf-parse v2 pode preceder com aspas ou espaços.
 */
const AMBIENTE_REGEX =
  /(?:1\s+)?(\d{2,3}\s*-\s*[A-ZÀ-Ÿ0-9\+\s\/\.\(\)]+)/i;

/**
 * Regex para extrair dados de medidas.
 * Captura: nome_peça, comprimento, largura, quantidade.
 * Ex: "TAMPO ÁREA MOLHADA    1,600    0,620    1x"
 */
const MEDIDA_DATA_REGEX =
  /^[\s]*([A-ZÀ-Ÿ][A-ZÀ-Ÿ\s\-\+\(\)0-9\/\.]+?)\s{2,}([\d][,.\d]*)\s+([\d][,.\d]*)\s+(\d+)\s*x/i;

/**
 * Regex para extrair dados de acabamento e serviço.
 * Captura: descrição, unidade, quantidade.
 * Ex: "POLIMENTO ESPELHOS (POLIBORDA)    ML    4,00"
 */
const ACAB_SERV_DATA_REGEX =
  /^[\s]*([A-ZÀ-Ÿ][A-ZÀ-Ÿ\s\-\+\(\)0-9ºª\/\.²]+?)\s{2,}(ML|UN|M2|M²|PC|CJ|VB)\s+([\d][,.\d]*)/i;

/**
 * Regex para cabeçalhos de área/cômodo.
 * Detecta linhas centralizadas como "Banheiro", "Cozinha", etc.
 */
const AREA_HEADER_REGEX =
  /^\s*(Área de serviço|Banheiro|Cozinha|Sala|Outro|Lavanderia|Churrasqueira|Varanda|Escritório|Quarto|Suíte|Sacada|Lavabo|Closet|Garagem|Terraço|Hall|Corredor|Despensa|Copa|Área\s*de\s*lazer|Área\s*gourmet|Área\s*externa)\s*$/i;

/** Padrões de linhas que devem ser completamente ignoradas */
const IGNORE_PATTERNS: RegExp[] = [
  /^\s*Qtde\.\s*Item/i,
  /^\s*Material\s*principal/i,
  /^\s*Valor\s*un\./i,
  /^\s*Total\s*bruto/i,
  /^\s*R\$/,
  /^\s*PARCELAS/i,
  /^\s*Método/i,
  /^\s*Dinheiro/i,
  /^\s*Boleto/i,
  /^\s*Cheque/i,
  /^\s*Cartão/i,
  /^\s*OBSERVAÇÕES/i,
  /^\s*TOTAIS\s*DO\s*ORÇAMENTO/i,
  /^\s*Valor\s*do\s*IPI/i,
  /^\s*Outras\s*despesas/i,
  /^\s*Valor\s*do\s*ICMS/i,
  /^\s*Desconto/i,
  /^\s*Valor\s*do\s*seguro/i,
  /^\s*Valor\s*do\s*frete/i,
  /^\s*Total\s*dos\s*itens/i,
  /^\s*Total\s*do\s*orçamento/i,
  /^\s*Emissão/i,
  /^\s*Validade/i,
  /^\s*Impressão/i,
  /^\s*Vendedor/i,
  /^\s*Orçamento\s*\d/i,
  /^\s*MARMORARIA/i,
  /^\s*\d{2}\.\d{3}\.\d{3}\/\d{4}/, // CNPJ
  /^\s*RODOVIA/i,
  /^\s*Santiago/i,
  /^\s*\(\d{2}\)\s*\d/, // Telefone
  /^\s*LUZ\s*$/i,
  /^-+Page\s*\(\d+\)\s*Break-+$/i, // Page breaks do pdf-parse v2
];

// ─────────────────────────────────────────────────────────────
// 3. FUNÇÕES AUXILIARES
// ─────────────────────────────────────────────────────────────

/**
 * Verifica se uma string contém uma palavra-chave de material.
 */
function containsMaterialKeyword(text: string): boolean {
  const upper = text.toUpperCase();
  return MATERIAL_KEYWORDS.some((kw) => upper.includes(kw));
}

/**
 * Separa ambiente e material de uma linha usando split por 3+ espaços.
 *
 * Trata o caso especial onde o nome do ambiente contém keyword de material
 * (ex: "ESCADARIA EM QUARTZITO" + "QUARTZITO TAJ MAHAL (EXTRA)").
 *
 * Estratégia: o primeiro segmento (antes dos 3+ espaços) é SEMPRE o ambiente.
 * O primeiro segmento seguinte que contém keyword de material é o material.
 */
function splitAmbienteMaterial(
  line: string
): { ambiente: string; material: string } | null {
  const stripped = line.replace(/\f/g, "").trim();

  // Split por 3+ espaços
  const parts = stripped.split(/\s{3,}/).filter((p) => p.trim());

  if (parts.length < 2) return null;

  // Primeiro part = ambiente (com possível prefixo "1")
  const ambientePart = parts[0];
  const materialParts: string[] = [];
  let foundMaterial = false;

  for (let idx = 1; idx < parts.length; idx++) {
    const part = parts[idx].trim();
    const partUpper = part.toUpperCase();

    // Se é número puro (valor monetário), ignorar
    if (/^[\d.,\s]+$/.test(part)) continue;

    if (
      !foundMaterial &&
      MATERIAL_KEYWORDS.some((kw) => partUpper.includes(kw))
    ) {
      materialParts.push(part);
      foundMaterial = true;
    } else if (
      foundMaterial &&
      /^[A-ZÀ-Ÿ\s]+$/i.test(part) &&
      !/^[\d.,\s]+$/.test(part)
    ) {
      // Continuação do material (ex: "POLIDO" em linha separada)
      materialParts.push(part);
    }
  }

  if (!foundMaterial) return null;

  let ambiente = ambientePart.trim();
  let material = materialParts.join(" ").trim();

  // Limpar ambiente: remover prefixo "1 "
  ambiente = ambiente.replace(/^1\s+/, "").trim();
  // Normalizar espaços (ex: "04 -MURETA" -> "04 - MURETA", "104 -MURETA" -> "104 - MURETA")
  ambiente = ambiente
    .replace(/(\d{2,3})\s*-\s*/, "$1 - ")
    .replace(/\s+/g, " ");

  // Limpar material: remover números finais
  material = material.replace(/[\d.,]+\s*$/, "").trim();

  return { ambiente, material };
}

/**
 * Verifica se a linha contém o padrão de ambiente.
 */
function isAmbienteLine(line: string): boolean {
  const clean = line.replace(/\f/g, "");
  return AMBIENTE_REGEX.test(clean);
}

/**
 * Verifica se a linha contém tanto ambiente quanto material.
 */
function isAmbienteWithMaterial(line: string): boolean {
  return isAmbienteLine(line) && containsMaterialKeyword(line);
}

/**
 * Verifica se a linha é um cabeçalho "Medidas".
 * Usa padrão: "Medidas" seguido de fim de linha ou 3+ espaços.
 */
function isMedidasHeader(line: string): boolean {
  return /^\s*Medidas\s*(?:$|\s{3,})/i.test(line);
}

/**
 * Verifica se a linha é um cabeçalho "Acabamento".
 * CORRIGIDO: NÃO confunde com dados "ACABAMENTO 45° SIMPLES".
 * O cabeçalho é "Acabamento" sozinho ou seguido de colunas (3+ espaços).
 */
function isAcabamentoHeader(line: string): boolean {
  return /^\s*Acabamento\s*(?:$|\s{3,})/i.test(line);
}

/**
 * Verifica se a linha é um cabeçalho "Serviços".
 */
function isServicosHeader(line: string): boolean {
  return /^\s*Serviços\s*(?:$|\s{3,})/i.test(line);
}

/**
 * Verifica se a linha deve ser ignorada.
 */
function shouldIgnoreLine(line: string): boolean {
  const clean = line.replace(/\f/g, "").trim();
  if (clean === "") return true;
  return IGNORE_PATTERNS.some((pattern) => pattern.test(clean));
}

/**
 * Normaliza número (remove espaços).
 */
function normalizeNumber(val: string): string {
  return val.replace(/\s/g, "").trim();
}

/**
 * Cria um item vazio.
 */
function createEmptyItem(
  ambiente: string,
  material: string
): ExtractedItem {
  return {
    ambiente,
    material,
    partes_medidas: [],
    acabamentos: [],
    servicos: [],
  };
}

// ─────────────────────────────────────────────────────────────
// 4. EXTRAÇÃO DE DADOS DA OBRA
// ─────────────────────────────────────────────────────────────

function extractDadosObra(lines: string[]): {
  endereco: string;
  cidade: string;
} {
  let endereco = "";
  let cidade = "";
  let inDadosObra = false;

  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    const line = lines[i];

    if (/DADOS\s*DA\s*OBRA/i.test(line)) {
      inDadosObra = true;
      continue;
    }

    if (inDadosObra) {
      if (/^\s*Endereço/i.test(line)) {
        for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
          const nextLine = lines[j].trim();
          if (
            nextLine &&
            !/^\s*(Bairro|Cidade|CEP|Fone|E-mail)/i.test(nextLine)
          ) {
            endereco = nextLine.split(/\s{3,}/)[0].trim();
            break;
          }
        }
      }

      if (/^\s*Cidade\s*-\s*UF/i.test(line)) {
        for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
          const nextLine = lines[j].trim();
          if (nextLine && !/^\s*(ITENS|Qtde)/i.test(nextLine)) {
            cidade = nextLine.split(/\s{3,}/)[0].trim();
            break;
          }
        }
      }

      if (/^\s*ITENS/i.test(line)) break;
    }
  }

  // Fallback: procurar no cabeçalho do cliente
  if (!endereco) {
    for (let i = 0; i < Math.min(lines.length, 20); i++) {
      if (/^\s*Endereço/i.test(lines[i])) {
        for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
          const nextLine = lines[j].trim();
          if (
            nextLine &&
            !/^\s*(Bairro|Cidade|CEP|Fone)/i.test(nextLine)
          ) {
            endereco = nextLine.split(/\s{3,}/)[0].trim();
            break;
          }
        }
        break;
      }
    }
  }

  if (!cidade) {
    for (let i = 0; i < Math.min(lines.length, 20); i++) {
      if (/^\s*Cidade\s*-\s*UF/i.test(lines[i])) {
        for (let j = i + 1; j < Math.min(i + 3, lines.length); j++) {
          const nextLine = lines[j].trim();
          if (nextLine && !/^\s*(DADOS|Descrição)/i.test(nextLine)) {
            cidade = nextLine.split(/\s{3,}/)[0].trim();
            break;
          }
        }
        break;
      }
    }
  }

  return { endereco, cidade };
}

// ─────────────────────────────────────────────────────────────
// 5. STATE MACHINE - PARSER PRINCIPAL
// ─────────────────────────────────────────────────────────────

/**
 * Função principal de parsing.
 *
 * Recebe um Buffer do PDF e retorna os dados estruturados.
 * Usa pdf-parse para extração de texto.
 *
 * REGRA FUNDAMENTAL:
 *   Uma peça começa na linha do material e só termina
 *   quando outro material aparecer — mesmo entre páginas.
 */
export async function parseOrcamentoPDF(
  buffer: Buffer
): Promise<ParsedResult> {
  try {
    // ── Passo 1: Extrair texto do PDF ──
    let rawText: string;
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { PDFParse } = require("pdf-parse");
      const parser = new PDFParse({ data: new Uint8Array(buffer) });
      const textResult = await parser.getText();
      rawText = textResult.text;

      // ── RAIO-X DEBUG (remover após diagnóstico) ──
      console.log('=== RAIO-X DO PDF (marmotrack-parser.ts) ===');
      console.log('Tamanho do rawText (caracteres):', rawText.length);
      console.log('Primeiros 500 chars:', rawText.substring(0, 500));
      console.log('Contém "ITENS"?', rawText.includes('ITENS'));
      console.log('Contém "DADOS DA OBRA"?', /DADOS\s*DA\s*OBRA/i.test(rawText));
      console.log('=============================================');

      await parser.destroy();
    } catch (err) {
      console.error('[MarmoTrack Parser] Erro ao chamar pdf-parse:', err);
      // Fallback: tentar como texto puro (para testes unitários)
      rawText = buffer.toString("utf-8");
    }

    // ── Passo 2: Pré-processar linhas ──
    const rawLines = rawText.split(/\r?\n/);
    const lines: string[] = [];

    for (let i = 0; i < rawLines.length; i++) {
      // Tratar form feed (\f) como separador de conteúdo
      const segments = rawLines[i].split(/\f/);
      for (const segment of segments) {
        const line = segment;

        // Juntar linhas de material que quebraram em 2
        // (ex: "MÁRMORE BRANCO PARANÁ CALACATA MATARAZZO\nPOLIDO")
        if (
          containsMaterialKeyword(line) &&
          isAmbienteLine(line) &&
          i + 1 < rawLines.length
        ) {
          const nextRaw = rawLines[i + 1];
          const nextTrimmed = nextRaw.trim();
          if (
            nextTrimmed &&
            /^[A-ZÀ-Ÿ]+$/i.test(nextTrimmed) &&
            !isMedidasHeader(nextRaw) &&
            !isAcabamentoHeader(nextRaw) &&
            !isServicosHeader(nextRaw)
          ) {
            lines.push(line + " " + nextTrimmed);
            i++; // Pular a próxima linha
            continue;
          }
        }

        lines.push(line);
      }
    }

    // ── Passo 3: Extrair dados da obra ──
    const dadosObra = extractDadosObra(lines);

    // ── Passo 4: State Machine ──
    const itens: ExtractedItem[] = [];
    let currentItem: ExtractedItem | null = null;
    let state: ParserState = ParserState.HEADER;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.replace(/\f/g, "").trim();

      if (trimmed === "") continue;

      // ── Detectar TOTAIS (fim dos itens) ──
      if (/^\s*TOTAIS\s*DO\s*ORÇAMENTO/i.test(trimmed)) {
        state = ParserState.TOTAIS;
        continue;
      }
      if (state === ParserState.TOTAIS) continue;

      // ── Cabeçalho de área (ignorar) ──
      if (AREA_HEADER_REGEX.test(trimmed)) continue;

      // ── Detectar seção ITENS (gatilho atrasado) ──
      // NÃO usar a palavra "ITENS" sozinha — pdf-parse v2 coloca ela
      // no topo do texto, antes do cabeçalho do cliente.
      // Usamos o cabeçalho REAL da tabela como gatilho.
      if (/Qtde\.\s*Item/i.test(trimmed) || /Material\s*principal/i.test(trimmed)) {
        state = ParserState.ITENS;
        continue;
      }

      // ── Antes de ITENS, pular ──
      if (
        state === ParserState.HEADER ||
        state === ParserState.DADOS_OBRA
      ) {
        if (/DADOS\s*DA\s*OBRA/i.test(line)) {
          state = ParserState.DADOS_OBRA;
        }
        continue;
      }

      // ═══════════════════════════════════════════════════════
      // GATILHO PRINCIPAL: Linha com ambiente + material
      // ═══════════════════════════════════════════════════════
      if (isAmbienteWithMaterial(line)) {
        const parsed = splitAmbienteMaterial(line);

        if (parsed && parsed.material) {
          // Salvar item anterior
          if (currentItem) {
            itens.push(currentItem);
          }

          currentItem = createEmptyItem(
            parsed.ambiente,
            parsed.material
          );
          state = ParserState.ITENS;
          continue;
        }
      }

      // ── Ambiente sem material na mesma linha ──
      // Buscar material nas proximidades (5 antes, 20 depois)
      if (
        isAmbienteLine(line) &&
        !containsMaterialKeyword(line) &&
        (state as ParserState) !== ParserState.HEADER
      ) {
        // Evitar falsos positivos com linhas de dados
        if (MEDIDA_DATA_REGEX.test(trimmed)) continue;
        if (ACAB_SERV_DATA_REGEX.test(trimmed)) continue;

        const ambMatch = trimmed.match(AMBIENTE_REGEX);
        if (!ambMatch) continue;

        let ambiente = ambMatch[1].replace(/\s+/g, " ").trim();
        ambiente = ambiente.replace(/^1\s+/, "").trim();

        // Look-around: buscar material
        let material = "MATERIAL A DEFINIR";

        // Procurar nas 5 linhas anteriores
        for (let j = Math.max(0, i - 5); j < i; j++) {
          if (containsMaterialKeyword(lines[j])) {
            const p = splitAmbienteMaterial(lines[j]);
            if (p) material = p.material;
            else {
              material = lines[j]
                .replace(/[\d.,]+\s*$/g, "")
                .trim();
            }
            break;
          }
        }

        // Se não achou, procurar nas 20 linhas posteriores
        if (material === "MATERIAL A DEFINIR") {
          for (
            let j = i + 1;
            j < Math.min(lines.length, i + 20);
            j++
          ) {
            if (containsMaterialKeyword(lines[j])) {
              const p = splitAmbienteMaterial(lines[j]);
              if (p) material = p.material;
              else {
                material = lines[j]
                  .replace(/[\d.,]+\s*$/g, "")
                  .trim();
              }
              break;
            }
          }
        }

        // Salvar item anterior
        if (currentItem) {
          itens.push(currentItem);
        }

        currentItem = createEmptyItem(ambiente, material);
        state = ParserState.ITENS;
        continue;
      }

      // ── Se não há item corrente, pular ──
      if (!currentItem) continue;

      // ── Detectar cabeçalhos de sub-seção ──
      // IMPORTANTE: A ordem importa. Verificar headers ANTES de
      // tentar extrair dados, para não confundir.
      if (isMedidasHeader(line)) {
        state = ParserState.MEDIDAS;
        continue;
      }
      if (isAcabamentoHeader(line)) {
        state = ParserState.ACABAMENTO;
        continue;
      }
      if (isServicosHeader(line)) {
        state = ParserState.SERVICOS;
        continue;
      }

      // ── Ignorar linhas de cabeçalho/financeiro ──
      if (shouldIgnoreLine(line)) continue;

      // ── Extrair dados conforme estado atual ──
      switch (state) {
        case ParserState.MEDIDAS: {
          const match = trimmed.match(MEDIDA_DATA_REGEX);
          if (match) {
            currentItem.partes_medidas.push({
              peca: match[1].replace(/\s+/g, " ").trim(),
              comprimento: normalizeNumber(match[2]),
              largura: normalizeNumber(match[3]),
              quantidade: match[4].trim(),
            });
          }
          break;
        }

        case ParserState.ACABAMENTO: {
          const match = trimmed.match(ACAB_SERV_DATA_REGEX);
          if (match) {
            currentItem.acabamentos.push({
              descricao: match[1].replace(/\s+/g, " ").trim(),
              unidade: match[2].trim(),
              quantidade: normalizeNumber(match[3]),
            });
          }
          break;
        }

        case ParserState.SERVICOS: {
          const match = trimmed.match(ACAB_SERV_DATA_REGEX);
          if (match) {
            currentItem.servicos.push({
              descricao: match[1].replace(/\s+/g, " ").trim(),
              unidade: match[2].trim(),
              quantidade: normalizeNumber(match[3]),
            });
          }
          break;
        }

        default:
          // Estado ITENS genérico — aguardando sub-seção
          break;
      }
    }

    // ── Salvar último item ──
    if (currentItem) {
      itens.push(currentItem);
    }

    // ── Validação final ──
    if (itens.length === 0) {
      console.warn(
        "[MarmoTrack Parser] Aviso: nenhum item extraído do PDF."
      );
    }

    return {
      dadosObra,
      itens,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Erro desconhecido no parsing";
    console.error(`[MarmoTrack Parser] Erro fatal: ${errorMessage}`);
    throw new Error(
      `Falha ao processar PDF de orçamento: ${errorMessage}`
    );
  }
}

// ─────────────────────────────────────────────────────────────
// 6. EXPORT DEFAULT (para uso como Server Action)
// ─────────────────────────────────────────────────────────────

export default parseOrcamentoPDF;
