const ex= require('express')
const router = ex.Router()

// /user "Like Home Page"
router.get("/", (req, res) => {
    res.send("Getting all the user details from user")
});

//Dynamic  Router
router.get('/user-details/:id', (req, res) => {
    res.send("Get Request for Specific User"+ req.params.id);
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