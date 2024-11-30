//5th Step
const express = require('express');
const router = express.Router()
const employeeController = require('../controllers/employeeCtl')
const Employee = require('../models/Employee')


//get, post, put and delete => employee

//Create / post
router.post('/add-emp', employeeController.createEmployee);

//Read / Get
router.get('/all-emp', employeeController.getEmployee)

//Read / Get -> Single Employee
router.get('/single-emp/:id', employeeController.singleEmployee) 

//Update / Put 
router.put('/update/:id', employeeController.updateEmployee)

//Delete / Delete
router.delete('/delete/:id', employeeController.deleteEmployee)
module.exports = router;