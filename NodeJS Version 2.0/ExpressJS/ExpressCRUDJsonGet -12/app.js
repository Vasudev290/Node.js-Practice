const express = require('express')
const app = express();

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

app.listen(8080, () => {
    console.log("Server Running Successfully..!")
});