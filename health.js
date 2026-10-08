const http = require("http");

const port = process.env.PORT || 10000;

http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
      status: "alive",
      uptime: process.uptime()
    }));
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
}).listen(port, "0.0.0.0");
