import express from 'express'
import UserModel from '../model/UserModel.js'
const router = express.Router()

/*
Usage: featch all employees
API URL: http://127.0.0.1:8000/user/read
Method Type:GET
Req Fields:
Access Type:Public
*/
router.get('/read', async (req, res) => {
   try{
    let userDeatils = await UserModel.find()
    return res.json({"Status":200, "Message":"Getting all the Data from User", "User_Result":userDeatils.length, "User":userDeatils})
   } catch(err) {
    return res.status(404).json({"Status":404,"message":err.message})
   }
});

/*
Usage: Creating new User
API URL: http://127.0.0.1:8000/user/create
Method Type:GET
Req Fields:
Access Type:Public
*/
router.post('/create', async (req, res) => {
    try{
        let user_data = req.body
        let user_Obj = await UserModel.findOne({'uid':user_data.uid})
        if(user_Obj) {
        return res.status(404).json({"message":"User already Existed"})
    }
    let user = new UserModel(user_data) 
    let users = await user.save();
    return res.status(200).json({"message":"Created New User Successfully..!", "Created_Obj":users})
    } catch(err) {
        res.json({"message":err.message})
    }
});

/*
Usage: Updateing new User
API URL: http://127.0.0.1:8000/user/update/101
Method Type:GET
Req Fields:
Access Type:Public
*/
router.put('/update/:user_Id', async (req, res) => {
    try{
        let user_Id = req.params.user_Id;
        let user_Obj = await UserModel.findOne({"uid":user_Id})
        if(!user_Obj){
            return res.status(404).json({"message":"User Already excisted"})
        }
        let user = req.body
        let userDeatils = await UserModel.findByIdAndUpdate(user_Obj._id, user)
        return res.status(200).json({"message":"User Details Updated Successfully!", "Updated_User":user})
    } catch(err){
        return res.status(404).json({"message":err.message})
    }
});

/*
Usage: Deleting User
API URL: http://127.0.0.1:8000/user/delete/101
Method Type:DELETE
Req Fields:
Access Type:Public
*/
router.delete('/delete/:user_Id', async (req, res) => {
    try{
        let user_Id = req.params.user_Id;
        let user_Obj = await UserModel.findOne({"uid":user_Id})
        if(!user_Obj){
            return res.status(404).json({"message":"User Already Exsict"})
        }
        let user = req.body
        let userDeatils = await UserModel.findByIdAndDelete(user_Obj._id, user)
        return res.status(200).json({"message":"User Details Deleted Successfully!", "Deleted_User":userDeatils})
    } catch(err) {
        return res.status(404).json({"message":err.message})
    }
})
export default router