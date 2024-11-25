var express = require('express');
var router = express.Router();
var connection = require('../db-config')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User Data Working.!');
});

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
    })
})

module.exports = router;
