const express = require('express');
const app = express()


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Node and Express Js</h1>")
})
const port = 5000;

app.listen(port, () => {
    console.log("Server Started and Running Successfull..!")
})