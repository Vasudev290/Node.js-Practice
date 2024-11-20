const express = require('express')
const app = express();

app.get("/user", (req, resp) => {
    resp.send("Hello World..!")
});

app.get("/details", (req, resp) => {
    let personDetails = {
        name: "Vasu",
        age: 23,
        active: true,
        email: "vasu@gmail.com",
        city: "Bangalore",
        state: "Karnathaka",
        country: "India"
    }
    resp.send(personDetails)
})
app.listen(8000);
console.log("Server running on port number 8000");

//install Express js installed successfully..!