var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const studentModel = require('../models/student-model')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Students Route Works.!');
});

/*
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
 */
//Create/ Post Method 
router.post('/add', function(req, res, next) {
    console.log(req.body);
    let newStudent = new studentModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        department:req.body.department,
        BloodGroup: req.body.BloodGroup,
        motherName:req.body.motherName, 
        fatherName:req.body.fatherName,
        schoolName:req.body.schoolName
    });

    newStudent.save(function(err, newStudent){
        if (err)
        res.send(err);
        else
        res.send({
                  status: 200, 
                  message: "User Added SuccessFully", 
                  studentObj: newStudent
                });
    }); 
});

//Read / Get Method
// Find method
router.get('/list', function(req, res, next) {
    studentModel.find(function(err, resp){
        if (err)
        res.send(err);
        else
        res.send({
                  status: 200, 
                  resultsFound: resp.length,
                  students: resp
                });
    }); 
});

//FindByFirstName
router.get('/searchByFName', function(req, res, next) {
    const firstNameQuery = req.query.firstName;
    studentModel.find({firstName: firstNameQuery}, function(err, resp){
        if (err)
        res.send(err);
        else
        res.send({
                  status: 200, 
                  resultsFound: resp.length,
                  students: resp
                });
    }); 
});

//FindById
router.get('/searchById', function(req, res, next) {
    const idQuery = req.query.id;
    studentModel.findById(idQuery, function(err, resp){
        if (err)
        res.send(err);
        else
        res.send({
                  status: 200, 
                  students: resp
                });
    }); 
});

//Update/ Put
//Update
router.put('/update', function(req, res, next) {
    const department = req.query.department;
    studentModel.update({age:23}, {department: department}, function(err, resp){
        if (err)
        res.send(err);
        else
        res.send({
                  status: 200, 
                  students: resp
                });
    }); 
});

//findByIdAndUpdate
router.put('/updateUser', function(req, res, next) {
    const id = req.query.userId;
    const fName = req.query.firstName;
    studentModel.findByIdAndUpdate(id, {firstName: fName}, function(err, resp){
        if (err)
        res.send(err);
        else
        res.send({
                  status: 200, 
                  students: resp
                });
    }); 
});

//findOneAndUpdate
router.put('/updateUser', function(req, res, next) {
    const id = req.query.userId;
    const fName = req.query.firstName;
    studentModel.findOneAndUpdate(id, {firstName: fName}, function(err, resp){
        if (err)
        res.send(err);
        else
        res.send({
                  status: 200, 
                  students: resp
                });
    }); 
});
module.exports = router;
