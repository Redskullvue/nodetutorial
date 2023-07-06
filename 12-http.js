const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HEllo World 1st page");
  } else if (req.url === "/about") {
    res.end("Hello World About page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>Go Back Home</P>
    <a href='/'>Home</a>
    `);
  }
});

server.listen(4000);
