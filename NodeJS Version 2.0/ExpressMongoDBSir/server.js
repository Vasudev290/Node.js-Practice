import express, { response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import chalk from 'chalk'
import cors from 'cors'
import empRouter from './routes/employeeRouter.js'

//create express app
const app = express()

//read form data or postman body data
app.use(express.json())

//Configure and load application setting
dotenv.config({path: './Config/dev.env'})
let port = process.env.PORT;
let hostname = process.env.HOSTNAME;
let mongodb_Url = process.env.MONGODB_URL;

//enable http request logger middleware
app.use(morgan('dev'))

//enable cors
app.use(cors())

//Employee Router
app.use('/emp', empRouter )

//connect to mongodb
mongoose.connect(mongodb_Url)
.then((response) => { console.log("MongoDB Connection Successfully!")})
.catch((err) => {console.log(err)})

//create app and listen
app.listen(port,hostname, (err) => {
    if (err) throw err
    console.log(chalk.bgGrey(`Server is started and Running on ${hostname}:${port}`))
})
