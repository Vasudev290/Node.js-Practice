const express = require('express');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())
dotenv.config();

const secretKey = process.env.mySecretKey

const PORT = 8080
const users = [{
    id:"1",
    username: "vasu",
    password: "vasu",
    isAdmin : true
},
{
    id:"2",
    username: "dev",
    password: "dev",
    isAdmin : false
}
]

app.post('/api/login', (req, res) => {
    const {username, password} =req.body;
    const user = users.find((person) => {
        return person.username === username && person.password === password
    })
    if(user) {
        const accessToken = jwt.sign({
            id:user.id, 
            username: user.username,
            password : user.password,
            isAdmin:user.isAdmin
        }, secretKey)
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken
        })
    } else{
        res.status(401).json("User crential not matched..!")
    }
});


app.listen(PORT, () => {
    console.log(`Server started and running @ ${PORT}`)
});