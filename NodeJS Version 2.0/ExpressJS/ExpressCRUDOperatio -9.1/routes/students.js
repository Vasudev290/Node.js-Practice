var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const studentModel = require('../models/student-model')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Students Route Works.!');
});

router.get('/add', function(req, res, next) {

    let newStudent = new studentModel({
        studentId: 101,
        firstName:"Harsha",
        lastName:"Vardhan",
        age:5,
        department:"English",
        BloodGroup: "A+",
        motherName:"Vara",
        fatherName:"Narayana",
        schoolName:"st.mery school"
    });

    newStudent.save(function(err, newStudent){
        if (err)
        res.send(err);
        else
        res.send({status: 200, message: "User Added SuccessFully", studentObj: newStudent});
    });

    
});

module.exports = router;