import mongoose from "mongoose";

let empSchema  = mongoose.Schema({
    eid: {type: Number, require:true},
    ename: {type: String, require: true },
    esal: {type: Number, require:true},
    eloc: {type: String, require:true}
})

let empModel = mongoose.model("Employee", empSchema)

export default empModel;