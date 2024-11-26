const { log } = require('console');
const http = require('http');


http.createServer((req, res) => {
    //Res
    res.write('Hello World!!')
    res.end()
    console.log("Server runnning ..!")

    //Req
    res.write(req.url)
    //res.end()
    //console.log("Server Running..!")
}).listen(8000)