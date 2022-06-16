const { createServer } = require("http");
const { stat, createReadStream } = require("fs");

const HOST = "localhost";
const PORT = 8080;

const server = createServer((req, resp) => {
  // change the MIME type to audio/mpe
  resp.writeHead(200, { "Content-Type": "audio/mp3" });

  const mp3FileName = "audio.mp3";

  stat(mp3FileName, (err, stats) => {
    if (stats.isFile()) {
      const rs = createReadStream(mp3FileName);

      // pipe the read stream to resp
      rs.pipe(resp);
    } else {
      resp.end("mp3 file not exists");
    }
  });
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("Something wrong: ", error);
    return;
  }

  console.log(`server is listening on http://${HOST}:${PORT} ...`);
});
