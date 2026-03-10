const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    const text = pdfParser.getRawTextContent();
    console.log("--- TEXTO EXTRAÍDO ---");
    console.log(text);
    fs.writeFileSync('c:\\Users\\Lucas\\Downloads\\marmotrack\\tmp_pdf_text.txt', text);
});

pdfParser.loadPDF('c:\\Users\\Lucas\\Downloads\\PROJETOS MARMO\\Docs IZY\\orcamento.pdf');
