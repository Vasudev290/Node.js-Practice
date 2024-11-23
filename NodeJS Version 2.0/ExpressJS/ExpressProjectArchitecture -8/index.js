const express = require('express')
const moongose = require("mongoose")
const app = express();
const products = require('./routes/products')
const orders = require('./routes/orders')
const user = require("./routes/user")
var properties = require("./properites").DB_URL;



app.use('/products', products)
app.use('/orders', orders)
app.use('/user', user)

moongose.connect(properties);
moongose.connection.on("Connected", () => {
    console.log("Connected to MongoDB Successfully..!");
});

app.listen(8000);
console.log("Server running on port number 8000");