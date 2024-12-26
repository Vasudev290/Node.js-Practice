import express from 'express'
import fs from 'fs'
const router = express.Router()


/*
URL : http://127.0.0.1:8000/emp/create
Method:POST
Required Fields:None 
Access Type:Public 
*/
router.post('/create', async (req, res) => {
    let emp_data = req.body;
    //console.log(emp_data)
    let employees = await getEmployee();
    let emp = employees.find((employee) => 
         employee.eid == emp_data.eid);
        //console.log(emp_data)
    if(emp) {
        return res.json({"Message": "Employee Already existed"})
    }
    employees.push(emp_data)
    //console.log(employees)
    await createEmployee(employees)

    return res.json({"msg": "New Employee Created"})
})

/*
URL : http://127.0.0.1:8000/emp/read
Method:GET
Required Fields:None 
Access Type:Public 
*/
router.get('/read', async (req, res) => {
    let employees = await getEmployee();
    return res.json(employees)
})

/*
Usage: get  emp/product/order based on id
API URL: http://127.0.0.1:8000/emp/read/101
Method Type:GET
Required Fields: None
Access Type:Public
*/

router.get("/read/:eid",async(req,resp)=>{
	//how to read url data
	let emp_Id = req.params.eid;

	//verify employee exist or not.

	let employees = await getEmployee();
	let employee = employees.find((employee)=>{return employee.eid == emp_Id})
	if(!employee){
	    return resp.json({"error":"Not Exits"})
	}
	return resp.json(employee)

})


/*
URL : http://127.0.0.1:8000/emp/update/eid
Method:PUT
Required Fields:None 
Access Type:Public 
*/
router.put('/update/:eid', async (req, res) => {
    let emp_Id = req.params.eid;
    let emp = req.body;
    let employees = await getEmployee()
    let employee = employees.find((employee) => {return employee.eid == emp_Id})
    if(!employee) {
        return res.json({"Error": "Employee Not Exits"})
    }
    let remaining_Employee = employees.filter(empl => empl.eid != emp_Id)
    remaining_Employee.unshift(emp)
    createEmployee(remaining_Employee)
   return res.json({"employee": "Employee Details updated success..!"})
})

/*
URL : http://127.0.0.1:8000/emp/delete/101
Method:Delete
Required Fields:None 
Access Type:Public 
*/
router.delete('/delete/:eid', async (req, res) => {
    let emp_id = req.params.eid;
    //console.log(emp_id);
    let employees = await getEmployee();
    let emp = employees.find(employee => employee.eid == emp_id)
    if(!emp){
        return res.json({"msg": "Employee Already exists"})
    }
    let remining_Employee = employees.filter(employee => employee.eid != emp_id)
    console.log(remining_Employee);
    await createEmployee(remining_Employee)
    return res.json({"Msg": "Employee Record Deleted!"})
})


//All Employee Data
let getEmployee = () => {
    let emp_data = fs.readFileSync('emp.json', 'utf-8')
    return JSON.parse(emp_data)
}

//Createing Method
let createEmployee = (employees) => {
    fs.writeFileSync('emp.json', JSON.stringify(employees))
}
export default router;