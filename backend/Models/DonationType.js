const mongoose = require('mongoose')
const donationTypeSchema = new mongoose.Schema({
    _id: {type:String, required:true},
    typeName:{type:String, required:true},
    description:{type:String}
})

module.exports = mongoose.model('DonationType', donationTypeSchema)