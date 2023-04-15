const mongoose = require('mongoose')
const fundingSchema = new mongoose.Schema({
    from : {type:Date, required:true},
    createDate:{type:Date, required:true},
    startDate:{type:Date, required:true},
    endDate:{type:Date, required:true},
    active:{type:Boolean, required:true}
})

module.exports = mongoose.model('Funding',fundingSchema)

