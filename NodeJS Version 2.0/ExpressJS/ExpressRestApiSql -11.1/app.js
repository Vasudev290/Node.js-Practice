const express = require('express');



const app = express();

app.get('/get', (req, res) => {
    res.send("Getting all the res from the request..! ")
});

app.post('/create', (req, res) => {
    res.send("Createing data from the Users..!")
});

app.put('/update', (req, res) => {
    res.send("Updated all the users from list..! ")
});

app.delete('/delete', (req, res) => {
    res.send("User Deleted from list ")
});
app.listen(3000, () => {
    console.log("Server running on port 3000")
});