import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
const app = express()
import api from './router/apiRouter.js'

dotenv.config({path : './Config/dev.env'})
let port = process.env.PORT
let host = process.env.HOSTNAME


app.use(morgan('tiny'))
app.use('/emp', api)

app.listen(port, host, (err) => {
    console.log(chalk.bgGreen(`Server started and Running on ${port}:${host}`))
})