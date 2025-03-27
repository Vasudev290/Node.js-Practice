const http = require('http');
// const uc = require('upper-case');

http.createServer((req, res) => {
    res.write("Hello, World! VD")
    res.end();
}).listen(8000)