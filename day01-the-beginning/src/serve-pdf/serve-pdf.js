const { createServer } = require("http");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const HOST = "localhost";
const PORT = 8080;

/**
 * @description 创建 pdf 文件
 */
const createPdf = () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync("example.pdf")) {
      // create a PDFDocument object
      const doc = new PDFDocument();

      // create write stream by piping the pdf content.
      doc.pipe(fs.createWriteStream("example.pdf"));

      // add some contents to pdf document
      doc.fontSize(16).text("Hello PDF", 100, 100);

      // complete the operation of generating PDF file.
      doc.end();
    }

    resolve();
  });
};

const server = createServer(async (req, resp) => {
  // change the MIME type to application/pdf
  resp.writeHead(200, { "Content-Type": "application/pdf" });

  // create pdf file
  await createPdf();

  // read created pdf file
  fs.readFile("example.pdf", (err, data) => {
    if (err) {
      console.error(
        "an error occurred while reading the pdf file content: ",
        err
      );
      throw err;
    }

    console.log("operation success!");

    resp.end(data);
  });
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("Something wrong: ", error);
    return;
  }

  console.log(`server is listening on http://${HOST}:${PORT} ...`);
});
