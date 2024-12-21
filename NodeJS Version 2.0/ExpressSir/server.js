import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import bcrypt from 'bcrypt'
import user from './routers/userRouter.js'
import product from './routers/productRouter.js'
 const app = express()


 dotenv.config({'path':'./dev.env'})
 let port = process.env.PORT
 let host = process.env.HOSTNAME
//  app.get('/create', (req, res) => {
//     return res.json({"msg":"Root Req"})
//  })
app.use(morgan('tiny'))
app.use('/user', user)
app.use('/product', product)

 app.listen(port, host, (err) => {
    if (err) throw err
    console.log(chalk.bgBlue(`Server started and Running on http://${host}:${port}`))
 })