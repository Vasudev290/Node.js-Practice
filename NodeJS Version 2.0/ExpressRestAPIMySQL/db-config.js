const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testing'
});

connection.connect((err) => {
    if(err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("MySql Database Connected successfully..!");

    function getMobiles() {
        connection.query(`Select * from mobiles`, function(err, res){
            if(err){
                console.error("Error :", err)
            }
            else{
                console.log(res)
            }
            connection.end()
        })
    }

    function addMobiles(mobile, ram, storage, price) {
        connection.query(`Insert into mobiles (mobile, ram, storage, price) values(?, ?, ?, ?)`, [mobile, ram, storage, price], function(err, res)  {
            if(err){
                console.log(err)
            }
            else{
                console.log(res)
            }
        })
    }
    getMobiles();
    addMobiles("Realme Pro", "8GB", "16GB", 29999);
});

/* function getMobiles() {
    connection.query(`Select * from mobiles`, function(err, res){
        if(err){
            console.error("Error :", err)
        }
        else{
            console.log(res)
        }
    })
}
getMobiles() */
/* connection.connect(function (err){
    if(err){
        console.error(err)
    }else{
        console.log("MySql Database Connected successfully..!")
    };
});

module.exports = connection; */