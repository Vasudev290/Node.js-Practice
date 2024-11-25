const express = require('express');



const app = express();

app.get('/', (req, res) => {
    res.send("Getting all the res from the request..! ")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});