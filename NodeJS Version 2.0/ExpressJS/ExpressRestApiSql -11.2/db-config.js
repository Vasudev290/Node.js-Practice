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

});

    function getMobiles() {
        return new Promise(function(resolve, reject){
            connection.query(`Select * from mobiles`, function(err, res){
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            })
        })
    }

    function addMobiles(mobile, ram, storage, price) {
        return new Promise(function(resolve, reject){
            connection.query(`Insert into mobiles (mobile, ram, storage, price) values(?, ?, ?, ?)`, [mobile, ram, storage, price], function(err, res){
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            })
        })
    }

    function updateMobile(id, mobile, ram, storage, price) {
        return new Promise(function(resolve, reject){
            connection.query(`Update mobiles set mobile = ?, ram = ?, storage = ?, price = ? Where sno = ?`, [mobile, ram, storage, price, id], function(err, res){
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            })
        })
    }

    function deleteMobiles(id) {
        return new Promise(function(resolve, reject){
            connection.query(`Delete from mobiles Where sno = ?`, [id], function(err, res){
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            })
        })
    }

module.exports = {getMobiles, addMobiles, updateMobile, deleteMobiles}
     




