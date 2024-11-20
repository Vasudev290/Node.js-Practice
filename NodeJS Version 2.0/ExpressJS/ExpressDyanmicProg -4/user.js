const ex= require('express')
const router = ex.Router()

// /user "Like Home Page"
router.get("/", (req, res) => {
    res.send("Getting all the user details from user")
});

//Dynamic Router (with Numbers concept)
router.get('/user-details/:id', (req, res) => {
    res.send("Get Request for Specific User"+ req.params.id);
});

//Dynamic Router (with State and city concept)
router.get('/search-by-location/:state/:city', (req, res) => {
    res.send("Get Request for Specific User"+ req.params.state + req.params.city);
});

// /orders get-user-details
router.get("/get-user-details", (req, res) => {
    const userDetails= {
        name: "Vasu", 
        age: 23,
        email: "vasu@gmail.com",
        city: "Bangalore"
    }
    res.send(userDetails)
});
module.exports = router;