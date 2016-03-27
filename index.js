var test = require('./test');
test.setName('bbb');
test.printName();
test.setName('ccc');
test.printName();

var http = require("http");
http.createServer(function (request, response) {
    console.log('request received');
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write(index.html);
    response.end();
}).listen(8888);
console.log('server started');