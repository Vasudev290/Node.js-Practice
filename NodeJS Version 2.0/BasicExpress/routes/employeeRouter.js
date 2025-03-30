const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeControler');
const Employee = require('../models/Employee');

//Api creations => ['get', "post", "put", 'delete']
router.get('/all-emp', employeeController.readEmployee)
router.get('/single-emp/:id', employeeController.singleEmployee)
router.post('/add-emp', employeeController.createEmployee)
router.put('/update-emp/:id', employeeController.updateEmployee)
router.delete('/delete-emp/:id', employeeController.deleteEmployee )

module.exports = router;