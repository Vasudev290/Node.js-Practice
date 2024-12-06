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

const verifyUser = (req, res, next) => {
    const userToken = req.headers.authorization
    if(userToken) {
        const token = userToken.split(" ")[1]
        jwt.verify(token, secretKey, (err, user) => {
            if(err) {
                return res.status(403).json({err: "token is not valid"})
            }
            req.user = user
            next()
        })
    } else{
        res.status(401).json("You are not authenticated")
    }
}

//Post
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
        res.status(401).json("User crenditials not matched..!")
    }
});

//Delete
app.delete('/api/users/:Uid', verifyUser,(req, res) => {
    if(req.user.id === req.params.Uid || req.user.isAdmin){
        res.status(200).json("User is deleted successfull...!")
    }else {
        res.status(404).json("you are not allowed to delete..!")
    }
});

app.listen(PORT, () => {
    console.log(`Server started and running @ ${PORT}`)
});