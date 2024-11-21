const express = require('express')
const router = express.Router();

router.use('/', (req, res, next) => {
    //Check is user is authenticated
    //Check if data is correct
    //Check if all data is present
    //Check if is active
    req.headers['content-type'] = 'application/json';
    console.log("Api Called recived by User at " + new Date());
    next();
});

router.get('/', (req, res) => {
    res.send("Header Received :"+ req.headers['content-type'])
    //res.send("Get Request for users");  as it's unnecessary
});

router.use('/', (req, res, next) => {
    console.log("Api Called Ended");
    next();
});

// /products/"Like Home page"
router.get('/', (req, res) => {
    res.send("Get Request from Products.!")
});

// /products/get-product-details
router.get("/get-product-details", (req, res) => {
    res.send("Getting Product details from the Home page")
});

module.exports = router;