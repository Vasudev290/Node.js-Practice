const express = require('express')
const app = express();
const products = require('./routes/products')
const orders = require('./routes/orders')
const user = require("./routes/user")

app.use('/products', products)
app.use('/orders', orders)
app.use('/user', user)

/*app.post('/read-create-users', (req, resp) => {
    resp.send("List of Users")
})
app.put('/read-update-users', (req, resp) => {
    resp.send("In All the User in List was getting Updated..!")
})
app.delete('/read-delete-users', (req, resp) => {
    resp.send("Deleted all the user from List..! ")
})
app.get('/read-get-details', (req, resp) => {
    const userObj = {
        id: 31,
        name: "Vasu",
        age: 23,
        alive: true,
        email: "vasu@gmail.com",
        state: "Karnathaka",
        pin: 560012
    }
    resp.send(userObj)
}) */
app.listen(8000);
console.log("Server running on port number 8000");