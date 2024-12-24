import express from 'express'
const router = express.Router()


/*
URL : http://127.0.0.1:8000/emp/create
Method:POST
Required Fields:None 
Access Type:Public 
*/
router.post('/create', (req, res) => {
    return res.json({'employee': 'Created employee success..!'})
})

/*
URL : http://127.0.0.1:8000/emp/read
Method:GET
Required Fields:None 
Access Type:Public 
*/
router.get('/read', (req, res) => {
    return res.json({'employee': 'Getting all the employees'})
})

/*
URL : http://127.0.0.1:8000/emp/update/eid
Method:PUT
Required Fields:None 
Access Type:Public 
*/
router.put('/update/eid', (req, res) => {
   return res.json({"employee": "Employee Details updated success..!"})
})

/*
URL : http://127.0.0.1:8000/emp/delete/eid
Method:Delete
Required Fields:None 
Access Type:Public 
*/
router.delete('/delete/eid', (req, res) => {
    return res.json({'employee': "Employee details delete Success!" })
})

export default router