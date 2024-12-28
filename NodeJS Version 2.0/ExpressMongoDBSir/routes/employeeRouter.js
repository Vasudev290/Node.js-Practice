import express from 'express'
import EmployeeModel from '../model/EmployeeModel.js'

//Express Route Request
let router = express.Router()

//Employee Route Request

/*
Usage: featch all employees
API URL: http://127.0.0.1:8080/emp/read
Method Type:GET
Req Fields:
Access Type:Public
*/
router.get('/read', async (req, res) => {
    try{
        let Employees = await EmployeeModel.find()
        return res.json({"Status": 200, "message":"Getting all the Employees", "Employee_Result": Employees.length ,"Employees":Employees})
    } catch(err) {
        return res.json({"Message": err.Message})
    }
});

/*
Usage: Create the new employee
API URL: http://127.0.0.1:8080/emp/create
Method Type:POST
Req Fields:
Access Type:Public
*/
router.post('/create', async (req, res) => {
    try{
        let emp_data = req.body;
        let emp_Obj = await EmployeeModel.findOne({'eid': emp_data.eid})
        if(emp_Obj) {
            return res.json({"message": "Employee Already Existed!"})
        }
        let employee = new EmployeeModel(emp_data)
        let Employees = await employee.save();
        return res.json({"Status": 200, "Message": "New Employee data Created Successfully..!", "Employee": Employees})
    } catch(err){
        return res.json({"message": err.message})
    }
});

/*
Usage: Update the employees
API URL: http://127.0.0.1:8080/emp/update/101
Method Type:PUT
Req Fields:
Access Type:Public
*/
router.put('/update/:emp_Id', async (req, res) => {
    try{
        let emp_Id = req.params.emp_Id;
        let empl_Obj = await EmployeeModel.findOne({"eid": emp_Id})
        if(!empl_Obj){
            return res.json({"message":"Employee not Existed"})
        }
        let updated_Emp = req.body
        let Employee = await EmployeeModel.findByIdAndUpdate(empl_Obj._id, updated_Emp)
        return res.json({"Status":200, "message":"Employee Details Updated Successfull!", "Updated_Details":updated_Emp})
    }catch(err) {
        return res.json({"message":err.message})
    }
});

/*
Usage: Delet the employees
API URL: http://127.0.0.1:8080/emp/delete
Method Type:DELETE
Req Fields:
Access Type:Public
*/
router.delete('/delete/:emp_Id', async (req, res) => {
    try{
        let emp_Id = req.params.emp_Id
        let emp_Obj = await EmployeeModel.findOne({"eid":emp_Id})
        if (!emp_Obj) {
            return res.json({"message":"Employee not Existed"})
        }
        let Employee = await EmployeeModel.findByIdAndDelete(emp_Obj._id)
        return res.json({"Staus":200, "Message": "Employee Delated Successfully!", "Deleted_Employee": Employee})
    } catch(err) {
        return res.json({"message":err.message})
    }
});


export default router;