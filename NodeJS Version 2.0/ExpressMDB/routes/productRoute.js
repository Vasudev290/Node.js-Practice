const express = require('express');
const router = express.Router();
const productController = require('../controllers/productCtl');
const Product = require('../models/Product')

// Get Post Put Delete => Products

//Post - Create
router.post('/create-pro', productController.createProduct);

//Get - Read
router.get('/all-pro',productController.getProducts );

//Get - Read(SingleProduct)
router.get('/single-pro/:id', productController.singleProduct);

//Put - Update
router.put('/update-pro/:id', productController.updateProduct);

//Delete - Delete
router.delete('/delete/:id', productController.delProduct)


module.exports = router;