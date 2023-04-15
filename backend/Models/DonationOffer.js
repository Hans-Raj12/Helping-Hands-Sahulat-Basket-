const mongoose = require('mongoose')
const donationOfferSchema = new mongoose.Schema({
    typeId:{type:String, required:true},//{type:mongoose.Schema.Types.objectId,ref:'DonationType'},
    from :{type:String, required:true},//{type:mongoose.Schema.Types.objectId, ref:'Users',required:true},
    to:{type:String, required:true},//{type:mongoose.Schema.Types.objectId, ref:'Users', required:true},
    quantity:{type:String},
    description:{type:String}
})

module.exports = mongoose.model('DonationOffer', donationOfferSchema)