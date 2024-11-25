var express = require('express');
var router = express.Router();
var connection = require('../db-config')


/* Home link */
router.get('/', function(req, res, next) {
  res.send('User Data Working.!');
});

/* GET users listing. */
router.get('/employee', function(req, res, next){
    var getEmployee = "Select * from `employee`";
    connection.query(getEmployee, function(err, result){
      if(err){
        console.log(err);
        res.send("Unable to get the Emoplyee");
      }
      else{
        res.send(result)
      }
    });
});

/* Post Users Listings*/
router.post('/employee-details', function(req, res, next) {
  const {name, salary, email, location } = req.body;
  const addEmployee = "Insert into `employee` (`name`, `salary`, `email`, `location`) values (?, ?, ?, ?)";
  connection.query(addEmployee, [name, salary, email, location], function(err, result){
    if(err){
      console.error(err);
      res.send({status:500, message:"Error throwing", error:err});
    } else {
      res.send({status:200, message:"Employee added successfully..!", employeeObj:result.insertId})
    }
  })
})
module.exports = router;
