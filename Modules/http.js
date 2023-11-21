const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      // Respond will be not sent if res.end() is not written
      res.end("Hello, World!");
    } else if (req.url == "/about") {
      res.write("Welcome to the about page!");
      res.end();
    } else {
      // 404 is the error status and to define type of file use "Content-type"
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>404! Not found</h1>");
    }
  })
  .listen(3000, () => {
    console.log("server listening on port 3000");
  });
