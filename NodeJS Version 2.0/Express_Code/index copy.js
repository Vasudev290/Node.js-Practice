const express = require('express')
const app = express();

app.get('/read-users', (req, resp) => {
    resp.send("List of Users")
})
app.get('/read-details', (req, resp) => {
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
})
app.listen(8000);
console.log("Server running on port number 8000");

