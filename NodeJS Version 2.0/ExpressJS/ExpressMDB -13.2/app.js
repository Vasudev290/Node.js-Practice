const express = require('express');
const dotEnv = require('dotenv');
const {MongoClient} = require('mongodb')
const app = express();
dotEnv.config()
MongoClient.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully..!")
})
.catch((error) => {
    console.log("Enable to Connect :",error)
})



//console.log(process.env);
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server Start Running on ${PORT} Successfully..!`)
});