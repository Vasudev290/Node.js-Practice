const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require('ejs');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const UserModel = require("./models/User")

//const { MongoClient } = require("mongodb");
const employeeRoutes = require('./routes/employeeRouter')

const app = express();
app.use(cors)

dotenv.config();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: "This is a secrat",
  resave: false,
  saveUninitialized: true,
}))

app.use(bodyParser.json())

//Direct MongoDB Connect
// MongoClient.connect( process.env.MONGO_DB_URL )
// .then(() => {
//     console.log("MongoDB Connected Successfully")
// })
// .catch((err) => {
//     console.log("Error :", err)
// })

//With using of Mongoose
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully..!");
  })
  .catch((err) => {
    console.log("Error :", err);
  });

const store = new MongoDBStore({
  uri: process.env.MONGO_DB_URL,
  collection: "mySession"
})

app.use('/employees', employeeRoutes)

app.get('/signup', (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/dashboard', (req, res) => {
  res.render('welcome')
})

app.post('/register', async(req, res) => {
  const {username, email, password} = req.body;
  try{
    const newUser = new UserModel({
      username, email, password
    })
    await newUser.save()
    res.redirect('/login')
  }catch(err){
    console.error(err)
    res.redirect('/signup')
  }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started and Running at port ${PORT} Successfull`);
});
