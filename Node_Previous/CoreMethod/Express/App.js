const express = require("express")
const app = express()

/* Api url: Localhost:808/signup
Method: post
Fields: No required
Access type: Public */
app.post("/signup", (req, res)=>{
    res.send("User signin successfully")
});

/* Api url: Localhost:808
Method: get
Fields: No required
Access type: Public */
app.get("/", (req, res)=>{
    res.send("Hii daw machaaa")
});

app.listen(808, (err)=>{
    if(err) throw err
    console.log("Server running on port 808");
});
