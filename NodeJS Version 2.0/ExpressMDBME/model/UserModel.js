import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    uid : {type: Number, require: true },
    uname : {type: String, require: true },
    uemail : {type: String, require: true },
    uaddess : {type: String, require: true },
    ucity : {type: String, require: true }
});

let userModel = mongoose.model("User", userSchema)
export default userModel;