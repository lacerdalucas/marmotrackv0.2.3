'use server';

import { z } from 'zod';
const PDFParser = require('pdf2json');
import { Buffer } from 'buffer';

export async function previewPdfDataAction(formData: FormData) {
    try {
        const file = formData.get('arquivoPdf') as File;
        if (!file) {
            return { success: false, msg: 'Nenhum arquivo encontrado no formulário.' };
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise((resolve) => {
            const pdfParser = new PDFParser(null, 1);
            
            pdfParser.on("pdfParser_dataError", (errData: any) => {
                console.error("Erro no PDFParser:", errData.parserError);
                resolve({ success: false, msg: "Falha ao extrair texto do PDF." });
            });

            pdfParser.on("pdfParser_dataReady", () => {
                const text = pdfParser.getRawTextContent();
                
                // Regex 1: Cliente Mapeado (Pela quebra de linha do PDF Test)
                // Exemplo: 595.490.760-91ANA PAULA SANTIN DA SILVEIRA\nBairro...
                let cliente_nome = "";
                let documento = "";
                const clientMatch = text.match(/([\d\.\-\/]+)([A-ZÀ-Ÿ\s]+)\r?\nBairro/);
                if (clientMatch) {
                    documento = clientMatch[1].trim();
                    cliente_nome = clientMatch[2].trim();
                }

                // Regex 2: Endereço (Pela indicação 'Endereço\s+...' até Bairro)
                // Exemplo: Endereço                                         Bairro / Distrito       Fone\r\nAvenida Prefeito Evandro Behr, 4279 - RUA D LOTE 87 ...
                let endereco_obra = "";
                // Como pode haver lixo visual na formatação de tabela, pegaremos a próxima linha pós-cabecalho
                const enderecoSplit = text.split(/Endereço\s+Bairro \/ Distrito\s+Fone/);
                if(enderecoSplit.length > 1) {
                    const linhaEnd = enderecoSplit[1].trim().split('\n')[0];
                    endereco_obra = linhaEnd.split('          ')[0].trim(); // Separa do Bairro pelos N Tabs
                }

                // Tentar uma captura mais genérica caso a primeira falhe
                if(!endereco_obra) {
                    const altEndMatch = text.match(/Avenida(.*LOTE\s*\d+)/i) || text.match(/Rua(.*LOTE\s*\d+)/i);
                     if(altEndMatch) endereco_obra = altEndMatch[0].trim();
                }
                // Regex 3: Número do Orçamento
                let numero_orcamento = "";
                const orcamentoMatch = text.match(/Orçamento\s+(\d+)/i);
                if (orcamentoMatch) {
                    numero_orcamento = orcamentoMatch[1].trim();
                }
                
                resolve({
                    success: true, 
                    data: {
                        cliente_nome: cliente_nome,
                        documento: documento,
                        endereco_obra: endereco_obra,
                        numero_orcamento: numero_orcamento,
                        extracted_text: text.substring(0, 1500) // Preview Text for DB if needed
                    }
                });
            });

            // Start parsing
            pdfParser.parseBuffer(buffer);
        });

    } catch (error: any) {
        console.error("Erro interno no preview:", error);
        return { success: false, msg: 'Falha crítica ao ler PDF in-memory.' };
    }
}
