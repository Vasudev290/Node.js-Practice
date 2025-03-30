const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    //name, age, gender, email, phone, city
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        default: false
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Employee", employeeSchema) 