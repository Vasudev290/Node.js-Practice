const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('data.json', (err, data) => {
        if(err) throw err;
        res.write(data)
        res.end()
        console.log("Api Running Successfull!")
    })
}).listen(8000)