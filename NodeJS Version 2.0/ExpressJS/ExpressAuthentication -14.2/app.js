const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const ejs = require('ejs');
const session = require('express-session');
var bcrypt = require('bcryptjs')
const MongoDBStore = require('connect-mongodb-session')(session);
const User = require('./models/User')


const app = express();

dotEnv.config();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB Database connected Successfully..!')
})
.catch((error) => {
    console.log(`${error}`)
});

//Connecting Store Auth
const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: "mySession"
});
//Session analyze
app.use(session({
    secret: "This is a secret",
    resave: false,
    saveUninitialized: false,
    store: store
}));

const checkAuth = (req, res, next) => {
    if(req.session.isAuthicated) {
        next()
    } else{
        res.redirect('/signup')
    }
};

app.get('/signup', (req, res) => {
    res.render('register')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/dashboard',checkAuth,  (req, res) => {
    res.render('welcome')
});

/* app.post('/register', async(req, res) => {
    const {username, email, password} = req.body;
    try{
        const newUser = new User({
            username,
            email, 
            password
        })
        await newUser.save()
        req.session.personal = newUser.username
        res.redirect('/login')
    }catch(err) {
        console.error(err)
        res.redirect('/signup')
    }
}); */

//Register
app.post('/register', async(req, res) => {
    const {username, email, password} = req.body

    let user = await User.findOne({ email })
    if (user) {
        return res.redirect('/signup')
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    user = new User({
        username,
        email,
        password: hashedPassword
    })
    req.session.person = user.username
    await user.save()
    res.redirect('/login')
});

//login 
app.post('/user-login', async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(!user){
        return res.redirect('/signup')
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    
    if(!checkPassword){
        return res.redirect('/signup')
    }
    req.session.isAuthicated = true
    res.redirect('/dashboard')
});

//logout
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        res.redirect('/signup')
    })
});

app.listen(PORT, () => {
    console.log(`Server Started and Running @${PORT}`)
});