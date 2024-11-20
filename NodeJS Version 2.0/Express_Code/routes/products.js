const express = require('express')
const router = express.Router();

// /products/"Like Home page"
router.get('/', (req, res) => {
    res.send("Get Request from Products.!")
});

// /products/get-product-details
router.get("/get-product-details", (req, res) => {
    res.send("Getting Product details from the Home page")
});

module.exports = router;