const http = require('http');

const server = http.createServer((req, resp) => {
   
    //Setting the response header
    resp.writeHead(200, {'content-type':'application/json'});

    //Sending the data
    resp.end("My First HTTP interaction")
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server running at port" + PORT);
});