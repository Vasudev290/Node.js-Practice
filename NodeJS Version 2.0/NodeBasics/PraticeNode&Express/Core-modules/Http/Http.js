const HTTP = require('http')
const server = HTTP.createServer((req, res) => {
    res.write("Hello World, Welcome to HTTP Request..!")
    res.end()
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log("Server Running Successfulll....!")
})
