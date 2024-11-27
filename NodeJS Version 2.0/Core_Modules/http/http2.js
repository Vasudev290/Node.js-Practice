const http = require('http');
http.createServer((req, resp) => {
    resp.write("Now server created successfully..!")
    resp.end()
    console.log("Server Running..!")
}).listen(8080)