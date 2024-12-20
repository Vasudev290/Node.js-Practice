import express, { Router } from 'express'

const router = express.Router()

/*
URL : http://127.0.0.1:8080/product/
Method:GET
Required Fields:None 
Access Type:Public 
*/
router.get('/', (req, res) => {
    res.send("Product added successfull!")
})


/*
URL : http://127.0.0.1:8080/product/create
Method:POST
Required Fields:None 
Access Type:Public 
*/
router.post('/create', (req, res) => {
    res.json({"msg":"Product added successfull!"})
})


/*
URL : http://127.0.0.1:8080/product/update
Method:PUT
Required Fields:None 
Access Type:Public 
*/
router.put('/update', (req, res) => {
    res.send("Product updated successful!")
})


/*
URL : http://127.0.0.1:8080/product/delete
Method:DELETE
Required Fields:None 
Access Type:Public 
*/
router.delete('/delete', (req, res) => {
    res.send("Product deleted successsfull!")
})

export default router