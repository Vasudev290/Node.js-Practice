const http = require('http');
const upperCase = require('upper-case');
http.createServer((req, res) => {
    res.write(upperCase.upperCase("Hii Machaa Ele unnavu mey..!"));
    res.end();
}).listen(8080);