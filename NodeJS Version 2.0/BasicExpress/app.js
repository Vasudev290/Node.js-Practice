const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const MongoDBStore = require("connect-mongodb-session")(session);
const UserModel = require("./models/User");

//const { MongoClient } = require("mongodb");
const employeeRoutes = require("./routes/employeeRouter");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

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
  collection: "mySession",
});

app.use(
  session({
    secret: "This is a secrat",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

const checkAuth = (req, res, next) => {
  if(req.session.isAuthenticated){
   next() 
  }else{
    res.redirect('/signup')
  }
}

app.use("/employees", employeeRoutes);

app.get("/signup", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/dashboard", checkAuth,  (req, res) => {
  res.render("welcome");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  let User = await UserModel.findOne({ email });
  if (User) {
    return res.redirect("/signup");
  }
  const hashPassword = await bcrypt.hash(password, 12);
  User = new UserModel({
    username,
    email,
    password: hashPassword,
  });
  await User.save();
  req.session.personal = User.username
  res.redirect("/login");
});

app.post('/user-login', async (req, res) => {
  const {email, password} = req.body;

  const user = await UserModel.findOne({ email })
  if(!user){
    return res.redirect('/signup')
  }
  req.session.isAuthenticated = true;
  const checkPassword = await bcrypt.compare(password, user.password)
  if(!checkPassword){
    return res.redirect('/signup')
  }
  res.redirect('/dashboard')
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if(err) throw err;
    res.redirect('/signup')
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started and Running at port ${PORT} Successfull`);
});
