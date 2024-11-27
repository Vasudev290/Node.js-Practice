const http = require('http')
const fs = require('fs')
 http.createServer((req, res) => {
    fs.readFile('example.txt',(err, data) => {
        res.write(data);
        res.end();
    });
    fs.writeFile('test.txt','climate',(err, data) => {
        res.write(data);
        res.end();
    })
    fs.appendFile('example.txt', "Love Bangalore Nature", (err, data) => {
        res.write(data);
        res.end()
    });
 }).listen(3000);