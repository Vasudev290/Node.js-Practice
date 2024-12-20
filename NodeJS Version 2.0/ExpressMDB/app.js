//1st step
const express = require('express');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs')
const employeeRoutes = require('./routes/employeeRoute')
const productRoutes = require('./routes/productRoute')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 3000 || process.env.PORT

app.set('view engine', 'ejs')

dotEnv.config()

//Client side rendering
app.get('/mongo', (req, res) => {
    res.json({product:"Tables"})
});

//server side rendering
app.get('/grapes',(req, res) => {
    res.render('sampleOne')
});

//html css
//Template engines
//EJS

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully..!")
})
.catch((error) => {
    console.log("Enable to Connect :",error)
});

app.use('/employees', employeeRoutes)
app.use('/products', productRoutes)

//console.log(process.env);
app.listen(PORT, () => {
    console.log(`Server Start Running on ${PORT} Successfully..!`)
});;                



