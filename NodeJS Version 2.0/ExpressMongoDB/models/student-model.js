const mongoose = require("mongoose");

var studentsSchema = mongoose.Schema({
    studentId: Number,
    firstName:String,
    lastName:String,
    age:Number,
    dob:Date,
    department:String,
    BloodGroup: String,
    motherName:String,
    fatherName:String,
    schoolName:String
  });
  
  var StudentModel = mongoose.model("Student", studentsSchema);

  module.exports = StudentModel;