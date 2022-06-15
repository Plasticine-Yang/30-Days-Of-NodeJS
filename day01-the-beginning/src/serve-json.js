const { createServer } = require("http");

const HOST = "localhost";
const PORT = 8080;

const server = createServer((req, resp) => {
  // change the MIME type to application/json
  resp.writeHead(200, { "Content-Type": "application/json" });

  // create a json data by using an object
  const jsonDataObj = {
    code: 0,
    message: "success",
    data: {
      name: "plasticine",
      age: 20,
      hobby: "coding",
    },
  };

  resp.write(JSON.stringify(jsonDataObj));
  resp.end();
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("Something wrong: ", error);
    return;
  }

  console.log(`server is listening on http://${HOST}:${PORT} ...`);
});
