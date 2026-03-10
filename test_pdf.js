const fs = require('fs');
const pdfParse = require('pdf-parse');

async function parsePDF() {
    try {
        const dataBuffer = fs.readFileSync('c:\\Users\\Lucas\\Downloads\\PROJETOS MARMO\\Docs IZY\\orcamento.pdf');
        const data = await pdfParse(dataBuffer);
        console.log("--- TEXTO EXTRAÍDO ---");
        console.log(data.text);

        fs.writeFileSync('c:\\Users\\Lucas\\Downloads\\marmotrack\\tmp_pdf_text.txt', data.text);
    } catch (err) {
        console.error("Erro ao ler PDF:", err);
    }
}

parsePDF();
