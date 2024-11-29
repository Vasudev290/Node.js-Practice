//4th step
const Employee = require('../models/Employee');

//Post - Create
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

//Get - Read
const getEmployee = async(req, res) => {
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
        //res.send({status:200, message:"Getting all the data from employee!", responeceOjb:res.json(employees)})
    }catch(error){
        res.status(500).json({message: "Server error"})
    }
};

//Get - Read -> SingleEmployee
const singleEmployee = async(req, res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        if(!employee){
            return res.status(404).json({message: "Employee Not Found"})
        }
        res.status(200).json(employee)
    }
    catch(error){
        console.error("There was an error :", error)
        res.status(500).json({message:"Server Error"})
    }
};
module.exports = {createEmployee , getEmployee, singleEmployee}