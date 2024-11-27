const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Now..! You're in the Home section..!")
});

app.get('/products', (req, res) => {
    res.send("Now.. You r in the products category..!")
});

app.listen(8080, () => {
    console.log("Server running on 8080")
});