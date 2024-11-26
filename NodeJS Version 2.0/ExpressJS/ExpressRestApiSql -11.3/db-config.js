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
    //Get / Read
    function getMobiles() {
        return new Promise(function(resolve, reject){
            connection.query(`Select * from mobiles`, function(err, res){
                if(err){
                    reject(err)
                }
                else{
                    resolve({status:200, message:"Getting data Successfully.!", mobileOjb:res.length, mobileData:res})
                }
            })
        })
    }
    
    //Post/ Create
    function addMobiles(mobile, ram, storage, price) {
        return new Promise(function(resolve, reject){
            connection.query(`Insert into mobiles (mobile, ram, storage, price) values(?, ?, ?, ?)`, [mobile, ram, storage, price], function(err, res){
                if(err){
                    reject(err)
                }
                else{
                    resolve({Status:200, message:"Data Added Successfully..!", dataDetails:res})
                }
            })
        })
    }
    
    //Put/ Update
    function updateMobile(id, mobile, ram, storage, price) {
        return new Promise(function(resolve, reject){
            connection.query(`Update mobiles set mobile = ?, ram = ?, storage = ?, price = ? Where sno = ?`, [mobile, ram, storage, price, id], function(err, res){
                if(err){
                    reject(err)
                }
                else{
                    resolve({Status:200, Message:"Updated the data Successfully!", obj:res})
                }
            })
        })
    }

    //Delete/ Delete
    function deleteMobiles(id){
        return new Promise((resolve, reject)=>{
            connection.query(`DELETE FROM mobiles  WHERE sno = ?`, [id], (err, res) => {
                if(err){
                    reject(err)
                }
                else{
                    resolve({Status: 200, message:"Deleted Data Successfully..!", DeletedData:res})
                    // resolve(res.affectedRows)
                }
            })
        })
    }

module.exports = {getMobiles, addMobiles, updateMobile, deleteMobiles}
     




