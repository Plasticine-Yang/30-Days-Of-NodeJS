const { createServer } = require("http");

const HOST = "localhost";
const PORT = 8080;

const server = createServer((req, resp) => {
  resp.writeHead(200, { "Content-Type": "text/plain" });

  console.log("server is working...");

  // write some lorem sentences
  resp.write("Lorem ipsum dolor sit amet consectetur adipisicing elit.\n");
  resp.write("Omnis eligendi aperiam delectus?\n");
  resp.write("Aut, quam quo!\n");

  resp.end();
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("Something wrong: ", error);
    return;
  }

  console.log(`server is listening on http://${HOST}:${PORT} ...`);
});
