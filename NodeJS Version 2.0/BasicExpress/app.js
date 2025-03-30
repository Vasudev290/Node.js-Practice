const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const employeeRoutes = require('./routes/employeeRouter')

const app = express();

dotenv.config();
app.use(bodyParser.json())

//Direct MongoDB Connect
// MongoClient.connect( process.env.MONGO_DB_URL )
// .then(() => {
//     console.log("MongoDB Connected Successfully")
// })
// .catch((err) => {
//     console.log("Error :", err)
// })

//With using of Mongoose
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully..!");
  })
  .catch((err) => {
    console.log("Error :", err);
  });

app.use('/employees', employeeRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started and Running at port ${PORT} Successfull`);
});
