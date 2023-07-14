const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name:{type: String, required:true},
    email:{ type:String, required:true},
    subject:{type: String, required:true},
    message:{type: String, required:true},
    active:{type:Boolean}
})

module.exports = mongoose.model('Feedback',feedbackSchema)