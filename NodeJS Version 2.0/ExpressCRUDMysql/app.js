const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("Server Running on PORT no : 3000");
});

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3000,
    user: 'root',
    password: 'root',
    database: 'tickets'
});

db.connect((err) => {
    if(err){
        console.log("Unable to connect to  Database");
    }
    console.log("MySQL Database connected Successfully..!");
});