    let fs = require('fs'),
        PDFParser = require("pdf2json");
 
    let pdfParser = new PDFParser();

    fs.readFile('./list.pdf', (err, pdfBuffer) => {
      if (!err) {
        pdfParser.parseBuffer(pdfBuffer);
      }
    })