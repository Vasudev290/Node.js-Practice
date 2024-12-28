import express from 'express'
import UserModel from '../model/UserModel.js'
const router = express.Router()

/*
Usage: featch all employees
API URL: http://127.0.0.1:3000/user/read
Method Type:GET
Req Fields:
Access Type:Public
*/
router.get('/read', (req, res) => {
    return res.json({"message":"Application Request"})
});

export default router