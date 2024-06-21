//Create Server http:nodej.s Core module :-

/* const http = require('http');
const server = http.createServer((req, resp)=>{
    resp.end(`<h1>Hello @ world....!</h1>`);
});
server.listen(7000,(err)=>{
    if(err) throw err;
    console.log("Server Running");
})  */


//Single line of code

/* const http = require("http")
.createServer((req, resp)=>{
    resp.end(`<h1> Yello Gud morning </h1>`)
})
.listen(7000, ()=>{
    console.log("Server Runnniiggg");
}); */

//again

require("http").createServer((req, resp)=>{
    resp.end("Hello.....!!");
}).listen(808, ()=>{
    console.log("Working");
})