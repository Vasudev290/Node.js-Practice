const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    database: 'vasudev'
});

connection.connect(function(err){
    if(!!err){
        console.log(err);
    }
    else{
        console.log("MySQL Database Connected Successfully..! ");
    }
});

module.exports = connection;