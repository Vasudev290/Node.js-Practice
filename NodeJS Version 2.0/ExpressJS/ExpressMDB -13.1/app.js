const express = require('express');
const app = express();


//Middleware Section
const fisrtHandler =((req, res, next) => {
    if(10<20){
        next()
    }
});

const secondHandler =((req, res, next) => {
    if(30>20){
        next()
    }
});

const thirdHandler =((req, res, next) => {
    if(10<20){
        next()
    }
});


app.get('/home', fisrtHandler, (req, res) => {
    res.send("Hello..! I'm in Home page section..!")
});

app.get('/about',secondHandler, (req, res) => {
    res.send("Hii This is the About page section...!")
});

app.get('/user/:1',thirdHandler, (req, res) => {
    res.send("You guyz are searching for 1 page")
});

app.listen(8080, () => {
    console.log("Server running on 8080")
});