const Product = require('../models/Product')

//Create - Post
const createProduct = async(req, res) => {
    try{
        const {name, desc, brand, category, price}  = req.body;
        const product = new Product({
            name,
            desc,
            brand, 
            category,
            price
        });
        await product.save()
        // res.status(200).json(product)
        res.send({status:200, message:"Product added successfully..!", productObj:product})
    }catch(error){
        console.log("There is an error", error)
        // res.status(404).json({message: "Server Error"})
        res.send({status:404, message:"Server Error", error:error.message})
    }
};

//Read - Get
const getProducts = async(req, res) => {
    try{
        const products = await Product.find()
        res.send({status:200, message:"Getting all the products,..!", productResult:products.length, productObj:products})
    }catch(error){
        console.log("There is an error: ", error)
        res.send({status:404, message:"Server Error", error:error.message})
    }
};

//Read - Get singleProduct
const singleProduct = async(req, res) => {
    try{
        const sProduct = await Product.findById(req.params.id)
        res.send({status:200, message:"Product retrived Successfully..!", product:sProduct})
    }catch(error){
        console.log("There is an error :", error)
        res.send({status:404, message:"Server Error", error:error.message})
    }
};

//Update - put 
const updateProduct = async (req, res) => {
    try{
        const {name, desc, brand, category, price}  = req.body;

        const myProduct = await Product.findByIdAndUpdate(
            req.params.id, {name, desc, brand, category, price});
        if(!myProduct){
            return res.send({status:404, message:"Product not found"})
        }
        res.send({status:200, message:"Product Details Updated Successfully..!", productObj:myProduct})
    }catch(error){
        console.log("There is an Error :", error)
        res.send({status:404, message:"Server Error", error:error.message})
    }
};

//Delete - delete
const delProduct = async(req, res) => {
    try{
        const deletProduct = await Product.findByIdAndDelete(req.params.id)
        res.send({status:200, massege:"Product Deleted Successfully..!", deletedProduct:deletProduct})
    }catch(error){
        console.log("There is an error :", error)
        res.send({status:404, message:"Server Erro", error:error.message})
    }
};


module.exports = {createProduct, getProducts, singleProduct, updateProduct, delProduct };