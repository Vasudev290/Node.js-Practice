var express = require('express');
var app = express()
//We are initilizing express app
// Basic Routing

/* Api url: Localhost:5000
Method: get
Fields: No required
Access type: Public
 */
app.get("/", (req, res)=>{
    res.send("Root Request")
});

/* Api url: Localhost:5000/user
Method: get
Fields: No required
Access type: Public */
app.get("/user", (req,res)=>{
    res.send("User name : Arjun")
})

/* Api url: Localhost:5000/employee
Method: get
Fields: No required
Access type: Public */
app.get("/employee", (req,res)=>{
    res.send("Employee under process")
})

/* Api url: Localhost:5000/employee/details
Method: get
Fields: No required
Access type: Public */
app.get("/employee/details", (req,res)=>{
    res.send(`<h1>Employee on fire </h1>`)
})

app.listen(5000, (err)=>{
    if(err) throw err
    console.log("Server is running on port 5000");
});