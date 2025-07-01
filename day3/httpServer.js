const server = require("http");

server.createServer((req, res) => {
	res.write("from server");
	res.end();
}).listen(5000);
