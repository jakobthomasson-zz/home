var pdfParser = require('pdf-parser');

var PDF_PATH = 'test.pdf';

pdfParser.pdf2json(PDF_PATH, function (error, pdf) {
  if (error != null) {
    console.log(error);
  } else {
    console.log(JSON.stringify(pdf));
  }
});