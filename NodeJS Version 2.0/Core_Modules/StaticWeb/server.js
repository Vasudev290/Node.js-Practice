import fs from 'fs'
import url from 'url'
import path from 'path'
import http from 'http'

const server = http.createServer((req, res) => {
    //res.end("Hello Good Moring")
    if(req.url === '/' || req.url === '/index'){
        fs.readFile(path.join(process.cwd(), 'Static', 'Html', 'index.html'), "utf-8", (err, data) => {
            if(err) throw err
            res.end(data)
        })
    }
    if(req.url === "/home"){
        fs.readFile(path.join(process.cwd(), "Static", "Html", "home.html"), "utf-8", (err, data) => {
            if(err) throw err
            res.end(data)
        })
    }
    if(req.url === "/about"){
        fs.readFile(path.join(process.cwd(), "Static", "Html", "about.html"), "utf-8", (err, data) => {
            if(err) throw err
            res.end(data)
        })
    }
    if(req.url === "/service"){
        fs.readFile(path.join(process.cwd(), "Static", "Html", "service.html"), "utf-8", (err, data) => {
            if(err) throw err
            res.end(data)
        })
    }
    if(req.url === "/login"){
        fs.readFile(path.join(process.cwd(), "Static", "Html", "login.html"), "utf-8", (err, data) => {
            if(err) throw err
            res.end(data)
        })
    }
});
server.listen(8080,'127.0.0.1',(err) => {
    if(err) throw err
    console.log(`Server started running on Port 8080`)
})