//5th Step
const express = require('express');
const router = express.Router()
const employeeController = require('../controllers/employeeCtl')
const Employee = require('../models/Employee')


//get, post, put and delete

//Create / post
router.post('/add-emp', employeeController.createEmployee)

module.exports = router;