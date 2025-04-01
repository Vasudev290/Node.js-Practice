const EmployeeModel = require("../models/Employee");

//POST - CREATE METHOD
const createEmployee = async (req, res) => {
  try {
    const { name, age, email, phone, city } = req.body;
    const employee = new EmployeeModel({
      name,
      age,
      email,
      phone,
      city,
    });
    await employee.save();
    res.status(200).json({message: "New Employee Created Successfull", employee});
  } catch (err) {
    console.log("There was an Error :", err);
    res.status(500).json({ message: "Server Error!" });
  }
};

//GET - READ METHOD
const readEmployee = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json({
      message: "All Employees Details",
      No_of_employees: employees.length,
      employees,
    });
  } catch (err) {
    console.log("There was an error", err);
    res.status(500).json("Server Error!");
  }
};

//GET - READ METHOD
const singleEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee Details", employee });
  } catch (err) {
    console.log("There was an Error", err);
    res.status(500).json({ message: "Server is out of service..!" });
  }
};

//PUT - UPDATE METHOD
const updateEmployee = async (req, res) => {
  try {
    const { name, age, email, phone, city } = req.body;
    const upEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id, {
      name,
      age,
      email,
      phone,
      city,
    });
    if (!upEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Updated Employee Details", upEmployee });
  } catch (err) {
    console.log("There was an Error", err);
    res.status(500).json({ message: "Server Error..!" });
  }
};

//DELETE METHOD
const deleteEmployee = async (req, res) => {
  try {
    const delEmployee = await EmployeeModel.findByIdAndDelete(req.params.id);
    if (!delEmployee) {
      return res.status(404).json("Employee not Found");
    }
    res
      .status(200)
      .json({
        message: "Employee Deleted Successfully!",
        Deleted_Employee: delEmployee,
      });
  } catch (err) {
    console.log("There was an Error", err);
    res.status(500).json({ message: "Server Error..!" });
  }
};
module.exports = {
  createEmployee,
  readEmployee,
  singleEmployee,
  updateEmployee,
  deleteEmployee,
};
