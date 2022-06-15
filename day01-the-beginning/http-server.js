const { createServer } = require('http');

const HOST = 'localhost';
const PORT = '8080';

const server = createServer((req, resp) => {
  // the first param is status code it returns
  // and the second param is response header info
  resp.writeHead(200, { 'Content-Type': 'text/plain' });

  console.log('server is working...');

  // call end method to tell server that the request has been fulfilled
  resp.end('hello nodejs http server');
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log('Something wrong: ', error);
    return;
  }

  console.log(`server is listening on http://${HOST}:${PORT} ...`);
});
