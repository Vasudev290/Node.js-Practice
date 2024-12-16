const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err) throw err
        res.end(data)
        })
})
server.listen(3000, (err) => {
    if (err) throw err
    console.log("Server Started and running on Port 3000")
})