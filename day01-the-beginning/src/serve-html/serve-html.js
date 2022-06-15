const { createServer } = require("http");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8080;

const server = createServer((req, resp) => {
  // change the MIME type from text/plain to text/html
  resp.writeHead(200, { "Content-Type": "text/html" });

  // read the html file content
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.error(
        "an error occurred while reading the html file content: ",
        err
      );
      throw err;
    }

    console.log("operation success!");

    resp.write(data);
    resp.end();
  });
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("Something wrong: ", error);
    return;
  }

  console.log(`server is listening on http://${HOST}:${PORT} ...`);
});
