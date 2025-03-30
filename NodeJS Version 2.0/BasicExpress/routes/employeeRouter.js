const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeControler');
const Employee = require('../models/Employee');

//Api creations => ['get', "post", "put", 'delete']

router.post('/add-emp', employeeController.createEmployee)

module.exports = router;