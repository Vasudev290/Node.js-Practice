const express = require('express')
const app = express();

app.get("/user", (req, resp) => {
    resp.send("Hello World..!")
});
app.listen(8000);
console.log("Server running on port number 8000");

//install Express js installed successfully..!