//5th Step
const express = require('express');
const router = express.Router()
const employeeController = require('../controllers/employeeCtl')
const Employee = require('../models/Employee')


//get, post, put and delete

//Create / post
router.post('/add-emp', employeeController.createEmployee);

//Read / Get
router.get('/all-emp', employeeController.getEmployee)

//Read / Get -> Single Employee
router.get('/single-emp/:id', employeeController.singleEmployee) 
module.exports = router;