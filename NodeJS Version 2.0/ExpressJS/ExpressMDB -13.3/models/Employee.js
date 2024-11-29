const mongoose = require('mongoose'); // 3rd step

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        default:false
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Employee', employeeSchema );