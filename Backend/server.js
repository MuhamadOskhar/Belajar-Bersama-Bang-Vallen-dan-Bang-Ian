const http = require("http");

const handler = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  const { method } = request;

  if (method == "GET") {
    response.end("hello world");
  } else if (method == "POST") {
    let body = [];

    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        response.end(body);
      });
  }
};

const server = http.createServer(handler);

server.listen(3000, "localhost", () => {
  console.log("Server is runing");
});
