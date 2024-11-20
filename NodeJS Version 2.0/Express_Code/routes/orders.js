const ex = require('express')
const router = ex.Router()

// /orders "Like Home Page"
router.get('/', (req, res) => {
    res.send("Geeting all the order details from the Cart SEction..!")
});

// /orders/get-orders-details
router.get("/get-orders-details", (req,res) => {
    res.send("Getting order details from Home secation")
});

module.exports = router;