const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const products = [
    {
        id:1,
        name:"iphone",
        price: 69999
    },
    {
        id:2,
        name:"Sumsung",
        price: 59999
    },
    {
        id:3,
        name:"Vivo",
        price: 29999
    },{
        id:4,
        name:"Oppo",
        price: 23999
    },{
        id:5,
        name:"OnePlus",
        price: 39999
    }
]

//Get /Read

app.get('/', (req, res) => {
    res.send("Hello.!, Welcome to Node and Express World.!")
});

app.get('/products', (req, res) => {
    res.json(products)
});

app.get('/products/:id', (req, res)=>{
    const newData = products.filter(item => item.id.toString() === req.params.id);
    return res.send(newData)
});

//Post/ Create

app.post('/addProduct', (req, res) => {
    const{id, name, price} = req.body;
    console.log(id, name, price)
    return res.send({status:200, message: "Data Stored Successfully.!"})
});

app.listen(8080, () => {
    console.log("Server Running Successfully..!")
});