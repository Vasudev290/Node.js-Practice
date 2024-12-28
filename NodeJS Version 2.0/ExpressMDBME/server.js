import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose'
import chalk from 'chalk'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'

// Initialize Express
const app = express()

// Middleware for JSON parsing
app.use(express.json())

dotenv.config({path:'./Config//dev.env'})
let port = process.env.PORT || 8000
let hostname = process.env.HOSTNAME || "127.0.0.1"
let mongodb_Url = process.env.MONGODB_URL || "mongodb://localhost:27017/User_CRUD";


// Middleware for logging requests
app.use(morgan('dev'))

//Enable Cors
app.use(cors())

//MongoDB Database connection
mongoose.connect(mongodb_Url)
.then((res) => {console.log("MongoDB Database Connected Successfully..!")})
.catch((err) => {console.log(err)})

app.get('/', (req, res) => {
    res.send("Root Request")
} )

//Router Request
app.use('/user', userRouter)

//port listening
app.listen(port, hostname, (err) => {
    if (err) throw err
    console.log(chalk.bgGreen(`Server Started and Running on ${hostname}:${port}`))
});