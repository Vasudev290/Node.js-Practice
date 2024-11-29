const express = require('express'); //1st step
const dotEnv = require('dotenv');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employeeRoute')

const app = express();
app.use(bodyParser.json())

const PORT = 3000 || process.env.PORT

dotEnv.config()

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully..!")
})
.catch((error) => {
    console.log("Enable to Connect :",error)
});

app.use('/employees', employeeRoutes)

//console.log(process.env);
app.listen(PORT, () => {
    console.log(`Server Start Running on ${PORT} Successfully..!`)
});;                



