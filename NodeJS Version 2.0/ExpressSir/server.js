import express from 'express'
import dotenv from 'dotenv'
import user from './routers/userRouter.js'
import product from './routers/productRouter.js'
 const app = express()


 dotenv.config({'path':'./dev.env'})
 let port = process.env.PORT
 let host = process.env.HOSTNAME
//  app.get('/create', (req, res) => {
//     return res.json({"msg":"Root Req"})
//  })

app.use('/user', user)
app.use('/product', product)

 app.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server started and Running on http://${host}:${port}`)
 })