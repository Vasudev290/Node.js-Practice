const express = require('express');
const bodyParser = require('body-parser')
const db = require('./db-config')


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Get Method
app.get('/get', (req, res) => {
    db.getMobiles()
    .then((mobile)=> {
         res.send(mobile)
    })
    .catch((err) => {
        res.send("Unable thorwing the", err)
    });
    // res.send("Getting all the request from list..!")
});

//Post Method
app.post('/create', (req, res) => {
    db.addMobiles(req.body.mobile, req.body.ram, req.body.storage, req.body.price)
    .then((mobile)=> {
        res.send(mobile)
    })
    .catch((err)=> {
        res.send("Throwing err", err)
    });
    //res.send("Createing data from the Users..!")
});

// Put Method
app.put('/update', (req, res) => {
    db.updateMobile()
    .then((mobile)=> {
        res.send(mobile)
    })
    .catch((err)=> {
        res.send("Updated err", err)
    });
    // res.send("Updated all the users from list..! ")
});

//Delete Method
app.delete('/delete', (req, res) => {
    db.deleteMobiles()
    .then((mobile) => {
        res.send(mobile)
    })
    .catch((err)=> {
        res.send("Deleted Err:", err)
    });
    // res.send("User Deleted from list ")
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});