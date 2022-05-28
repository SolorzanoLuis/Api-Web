const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    second_lastname: {
        type: String,
        trim: true,
        required: true
    },
    position_id: {
        type: String,
        required: true,
    }
})

employeeSchema.methods.toJSON = function(){

    const employee = this
    const employeePublic = employee.toObject()
    delete employeePublic._id
    delete employeePublic.user_id

    return employeePublic

}

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee