import express from 'express';
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

let products = [
    {
        id: 1,
        name: "iphone"
    },
    {
        id: 2,
        name: "Vivo"
    },
    {
        id: 3,
        name: "Oppo"
    },
    {
        id: 4,
        name: "Realme"
    },
]

//Getting Data Read
app.get('/products', (req, res) => {
    res.json(products)
});

//Read with id
app.get('/products/:id', (req, res) => {
    const newProData = products.filter(item => item.id.toString() === req.params.id)
    return res.send(newProData)
})

//Create Data
app.post('/addProducts', (req, res) => {
    const {id, name} = req.body;
    console.log(id, name);
    return res.send("Data Created Successfull!")
})

//Delete Data
app.delete('/deletePro/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const initialLength = products.length;
    
    products =  products.filter(item => item.id !== productId);
    if(products.length === initialLength){
        return res.status(404).send({message: "Product not found!"})
    }
    return res.send({message: "Product deleted Successfully", products})
})
app.listen(5000, () => console.log("Server running Successfully..!"))