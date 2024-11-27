const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('data.json', (err, data) => {
        res.write(data);
        res.end();
        console.log("Api Is Running Successfully..!")
    })
}).listen(3000)