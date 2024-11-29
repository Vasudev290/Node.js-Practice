//const { json } = require('body-parser');  //4th step
const Employee = require('../models/Employee');

const createEmployee = async(req, res) => {
    try{
        const {name, email, phone, city, state} = req.body;
        const employee = new Employee({
            name, 
            email,
            phone,
            city,
            state
        })
        await employee.save()
        res.status(201).json(employee)
    }catch(error) {
        console.log("There is an error", error)
        res.status(500).json({message: 'Sever error'})
    }
}

module.exports = {createEmployee}