const mongoose = require('mongoose')
const fundingDetailsSchema = new mongoose.Schema({
    donorId:{type:String, required:true},//{type:mongoose.Schema.Types.objectId, ref:'Users'}   
    amount:{type:String, required:true},
    fundingId:{type:String, required:true} //{type:mongoose.Schema.Types.objectId, ref:'Funding'},
})

module.exports=mongoose.model('FundingDetails', fundingDetailsSchema)