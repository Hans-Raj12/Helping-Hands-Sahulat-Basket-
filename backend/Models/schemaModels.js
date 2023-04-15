const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const needySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const roleSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique:true },
    roleName: { type: String, required:true },
    description: { type: String}
});

const usersSchema = new mongoose.Schema({
    roleId: {type: String},
    name:{type: String, required:true},
    password:{type: String, required:true},
    email:{ type:String, required:true, unique:true},
    address:{type: String, required:true},
    phone:{type: String, required:true},
    cnic:{type: String, required:true, unique:true}
})


const fundingSchema = new mongoose.Schema({
    from : {type:Date, required:true},
    createDate:{type:Date, required:true},
    startDate:{type:Date, required:true},
    endDate:{type:Date, required:true},
    active:{type:Boolean, required:true}
})

const fundingDetailsSchema = new mongoose.Schema({
    donorId:{type:mongoose.Schema.Types.objectId, ref:'Users'},
    amount:{type:String, required:true},
    fundingId:{type:mongoose.Schema.Types.objectId, ref:'Funding'},
})

const donationTypeSchema = new mongoose.Schema({
    _id: {type:String, required:true},
    typeName:{type:String, required:true},
    description:{type:String}
})
const donationOfferSchema = new mongoose.Schema({
    typeId:{type:mongoose.Schema.Types.objectId,ref:'DonationType'},
    from :{type:mongoose.Schema.Types.objectId, ref:'Users',required:true},
    to:{type:mongoose.Schema.Types.objectId, ref:'Users', required:true},
    quantity:{type:String},
    description:{type:String}
})

  
const Role = mongoose.model("Role", roleSchema);
const Users = mongoose.model("Users", usersSchema);
const Funding = mongoose.model('Funding', fundingSchema);
const FundingDetails = mongoose.model('FundingDetails', fundingDetailsSchema)
const DonationType = mongoose.model('DonationType',donationTypeSchema)
const DonationOffer = mongoose.model('DonationOffer',donationOfferSchema)
const needy_users = mongoose.model("needy_users", needySchema);
const donor_users = mongoose.model("donor_users", donorSchema);

module.exports ={
    Role:Role,
    Users:Users,
    Funding:Funding,
    FundingDetails:FundingDetails,
    DonationType:DonationType,
    DonationOffer:DonationOffer,
    needy_users:needy_users,
    donor_users:donor_users
}