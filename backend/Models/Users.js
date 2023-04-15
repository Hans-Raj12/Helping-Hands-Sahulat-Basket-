const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    roleId: {type: String},
    name:{type: String, required:true},
    password:{type: String, required:true},
    email:{ type:String, required:true, unique:true},
    address:{type: String, required:true},
    phone:{type: String, required:true},
    cnic:{type: String, required:true, unique:true}
})

module.exports = mongoose.model('Users',usersSchema)