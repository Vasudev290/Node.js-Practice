import express from 'express'

const router = express.Router()

/*
URL : http://127.0.0.1:8080/user/
Method:GET
Required Fields:None 
Access Type:Public 
*/
router.get('/', (req, res) => {
    res.send("User Root request from getting request..!")
});

/*
URL : http://127.0.0.1:8080/user/create
Method:POST
Required Fields:None 
Access Type:Public 
*/
router.post('/create', (req, res) => {
    res.json({"msg":"User Added details successfully"})
});

/*
URL : http://127.0.0.1:8080/user/update
Method:PUT
Required Fields:None 
Access Type:Public 
*/
router.put('/update', (req, res) => {
    res.send("Details updated successfully!")
});


/*
URL : http://127.0.0.1:8080/user/delete
Method:DELETE
Required Fields:None 
Access Type:Public 
*/
router.delete('/delete', (req, res) => {
    res.send("User Details deleted success")
})


export default router