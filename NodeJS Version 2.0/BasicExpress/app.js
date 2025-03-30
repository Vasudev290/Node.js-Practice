const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb')
const app = express()

dotenv.config();

MongoClient.connect( process.env.MONGO_DB_URL )
.then(() => {
    console.log("MongoDB Connected Successfully")
})
.catch((err) => {
    console.log("Error :", err)
})




const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Started and Running at port ${PORT} Successfull`)
})

