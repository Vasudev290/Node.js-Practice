const EmployeeModel = require('../models/Employee');

const createEmployee = async(req, res) => {
    try{
        const { name, age, email, phone, city } = req.body;
        const employee = new EmployeeModel({
            name,
            age, 
            email,
            phone,
            city
        })
        await employee.save()
        res.status(200).json(employee)
    }catch(err){
        console.log("There was an Error :", err)
        res.status(500).json({message: "Server Error!"})
    }
}

module.exports = { createEmployee }