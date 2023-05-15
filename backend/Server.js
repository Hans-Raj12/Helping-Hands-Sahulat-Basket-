require('dotenv').config()
const express = require('express')
const cors = require('cors')
const multer = require('multer');
const fs = require('fs/promises');

const fundraisingpost_api = require('./routes/fundraisingposts.routes')
const ngo_routes = require('./routes/ngo.routes')
const donor_routes = require('./routes/donor.routes')
const needy_routes = require('./routes/needy.routes')

const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const Donations = require('./Models/Donations')
// const dbSchema = require('./Models/schemaModels')
const router = express.Router();
const role = require('./Models/role');
const Users = require('./Models/Users')
const Funding = require('./Models/Funding')
const FundingDetails = require('./Models/FundingDetails')
const DonationOffer = require('./Models/DonationOffer')
const DonationType = require('./Models/DonationType')
const DonationHistory = require('./Models/DonationHistory')


const app = express()

// Configure middleware-*
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "js")));

// Connect to the database
mongoose.connect("mongodb+srv://hans:hans@cluster0.axxfcfd.mongodb.net/fyp?retryWrites=true&w=majority")
.then(()=>{
    //listener for requests
    app.listen(process.env.PORT,()=>{
        console.log("connected to database & listening on port",process.env.PORT)
    })
})
.catch((error)=>{
    console.log("This is the error: ",error)
});


// donr-routes
app.use('/donor-signup',async (req, res) => {

  try {
    const {name, address, email, phone, cnic, password } = req.body;

    const newUser = new Users({
       roleId:'3',
       name,
       password,
       email,
       address,
       phone,
       cnic 
    })
    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({savedUser}); // Return the saved user as a JSON response with a 201 status code
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
})
// ngo-routes
app.use('/ngo-signup',async (req, res) => {

  try {
    const {
      name,
      address, 
      email, 
      password,
      phone,
      numOfEmployees,
      NGOType,
      experience,
      websiteUrl,
     } = req.body;

    const newUser = new Users({
       roleId:'2',
       name,
       password,
       email,
       address,
       phone,
       numOfEmployees,
       NGOType,
       experience,
       websiteUrl
    })
    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({savedUser}); // Return the saved user as a JSON response with a 201 status code
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
})

//needy routes
app.use('/needy-signup', async (req, res) => {
  try {
    const {name, address, email, phone, cnic, password } = req.body;
    // Create a new user object
    const needy = new Users({
      roleId:'4',
      name,
      password,
      email,
      address,
      phone,
      cnic
    });

    // Save the user to the database
    await needy.save();

    // Return a success response
    res.status(200).json({needy});
  } catch (err) {
    // Return an error response
    console.error(err);
    res.status(500).send({ message: "Error creating user" });
  }
}
)


//login
app.use('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Check if donor user exists with the given email and password
  const user = await Users.findOne({ email, password });
  if (user && user.roleId=="1") {
    res.status(200).json({ user, redirect:"/admin", role:'admin' });
    return;
  }
  else if (user && user.roleId=="2") {
    res.status(200).json({ user, redirect:"/ngo", role:'NGO' });
    return;
  }
  else if (user && user.roleId=="3") {
    res.status(200).json({ user, redirect:"/donor",role:'Donor' });
    return;
  }
  else if (user && user.roleId=="4") {
    res.status(200).json({ user, redirect:"/needy", role:'Needy' });
    return;
  }
  // Check if needy user exists with the given email and password
  // const needyUser = await needy_users.findOne({ email, password });
  // if (needyUser) {
  //   res.status(200).send({ message: "Needy user logged in successfully", redirect:"/about" });
  //   return;
  // }

  // If neither donor nor needy user exists, return an error response
  res.status(401).json({ message: "Invalid email or password" });
})


app.use('/roles', async (req, res) => {
  try {
    // Create a new role instance with dummy data
    const newRole = new role({
      _id: '1',
      roleName: 'Admin',
      description: 'Admin role with full access'
    });
    const newRole2 = new role({
      _id: '2',
      roleName: 'NGO',
      description: 'NGO role'
    });
    const newRole3 = new role({
      _id: '3',
      roleName: 'Donor',
      description: 'Donor role '
    });
    const newRole4 = new role({
      _id: '4',
      roleName: 'Needy',
      description: 'Needy role '
    });  
    // Save the new role to the database
    const savedRole = await newRole.save();
    const savedRole2 = await newRole2.save();
    const savedRole3 = await newRole3.save();
    const savedRole4 = await newRole4.save();
    res.status(201).json({savedRole,savedRole2,savedRole3,savedRole4}); // Return the saved role as a JSON response with a 201 status code
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
});

// Route to create a new user
app.use('/users', async (req, res) => {
  try {
    const {name, password, email, address, phone, cnic } = req.body;

    const newUser = new Users({
       roleId:'3',
       name,
       password,
       email,
       address,
       phone,
       cnic 
    })
    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({savedUser}); // Return the saved user as a JSON response with a 201 status code
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
});

app.use('/fundings', async (req, res) => {
  try {
    const dummyFunding = {
      from: new Date(),
      createDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      active: true
    };
    const funding = new Funding(dummyFunding);
    const result = await funding.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

//643b08b13e835c1e5a06247c

app.use('/funding-details', async (req, res) => {
  try {
    const dummyFundingDetails = {
      donorId: '643b02f01411ce2ae94406fe',
      amount: '1000',
      fundingId: '643b08b13e835c1e5a06247c'
    };
    const fundingDetails = new FundingDetails(dummyFundingDetails);
    const result = await fundingDetails.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

// create a new donation type
app.use('/donation-types', async (req, res) => {
  try {
    const data1 = {
      _id:'1',
      typeName:'Food',
      description:'Food donation'
    }
    const data2 = {
      _id:'2',
      typeName:'Clothes',
      description:'Clothes donation'
    }
    const data3 = {
      _id:'3',
      typeName:'Money',
      description:'fund donation'
    }
    const donationType1 = new DonationType(data1);
    const donationType2 = new DonationType(data2);
    const donationType3 = new DonationType(data3);
    const result1 = await donationType1.save();
    const result2 = await donationType2.save();
    const result3 = await donationType3.save();
    res.send({result1,result2,result3});
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use('/donation-offers', async (req, res) => {
  try {
    const data = {
      typeId:'1',
      from:'643b02f01411ce2ae94406fe',
      to:'643b02f01411ce2ae94406ff',
      quantity:'1000',
      description:'food donation'
    }
    const donationOffer = new DonationOffer(data);
    const result = await donationOffer.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

//creating donations - donors
app.use('/create-donation',async(req,res)=>{
  try{

      const {recipient_type, donation_type} = req.body

      if(recipient_type=='Needy-Person'){
        const {recipient_email} = req.body
        const user = await Users.findOne({email:recipient_email})
        if(!(user && user.roleId == "4")){
          res.status(404).send({message:"Needy person not found"})
          return
        } 
      }
      if(recipient_type=='Needy-Person' && donation_type=='food'){
        const { donor_name,
                donor_email,
                recipient_name,
                recipient_email,
                donation_type,
                food_quantity,
                food_type
              } = req.body
              
        const newDonation = new Donations({
          donor_name,
          donor_email,
          recipient_type,
          recipient_name,
          recipient_email,
          donation_type,
          food_quantity,
          food_type,
          donation_date: new Date(),
          accepted:'false'
        })

        newDonation.save()
        .then((donation)=>{
          res.status(200).json({donation})
      })
      .catch(err=>{
          res.status(500).json({err})
      })
        
      }
      else if(recipient_type=='Needy-Person' && donation_type=='cloth'){
        const { donor_name,
                donor_email,
                recipient_name,
                recipient_email,
                donation_type,
                cloth_quantity,
                cloth_quality,
                cloth_type
              } = req.body
              
        const newDonation = new Donations({
          donor_name,
          donor_email,
          recipient_type,
          recipient_name,
          recipient_email,
          donation_type,
          cloth_quantity,
          cloth_quality,
          cloth_type,
          donation_date: new Date(),
          accepted:'false'
        })

        newDonation.save()
        .then((donation)=>{
          res.status(200).json({donation})
      })
      .catch(err=>{
          res.status(500).json({err})
      })
        
      }
      else if(recipient_type=='Needy-Person' && donation_type=='money'){
        const { donor_name,
                donor_email,
                recipient_name,
                recipient_email,
                donation_type,
                amount
              } = req.body
              
        const newDonation = new Donations({
          donor_name,
          donor_email,
          recipient_type,
          recipient_name,
          recipient_email,
          donation_type,
          amount,
          donation_date: new Date(),
          accepted:'false'
        })

        newDonation.save()
        .then((donation)=>{
          res.status(200).json({donation})
      })
      .catch(err=>{
          res.status(500).json({err})
      })
        
      }
      else if(recipient_type=='NGO' && donation_type=='food'){
        const { 
          donor_name,
          donor_email,
          donor_address,
          donation_type,
          food_quantity,
        } = req.body
        const newDonation = new Donations({
          donor_name,
          donor_email,
          recipient_type,
          donation_type,
          food_quantity,
          donor_address,
          donation_date: new Date(),
          accepted:'false'
        })

        newDonation.save()
        .then((donation)=>{
          console.log('Donation saved', donation)
          res.status(200).json({donation})
      })
      .catch(err=>{
          res.status(500).json({err})
      })
      }
      else if(recipient_type=='NGO' && donation_type=='cloth'){
        const { 
          donor_name,
          donor_email,
          donor_address,
          donation_type,
          cloth_quantity,
          cloth_quality
        } = req.body
        const newDonation = new Donations({
          donor_name,
          donor_email,
          donor_address,
          recipient_type,
          donation_type,
          cloth_quantity,
          cloth_quality,
          donation_date: new Date(),
          accepted:'false'
        })

        newDonation.save()
        .then((donation)=>{
          console.log('Donation saved', donation)
          res.status(200).json({donation})
      })
      .catch(err=>{
          res.status(500).json({message:"Donation Failed"})
      })
      }
      else if(recipient_type=='NGO' && donation_type=='money'){
        const { 
          donor_name,
          donor_email,
          donor_address,
          donation_type,
          amount
        } = req.body
        const newDonation = new Donations({
          donor_name,
          donor_email,
          donor_address,
          recipient_type,
          donation_type,
          amount,
          donation_date: new Date(),
          accepted:'false'
        })

        newDonation.save()
        .then((donation)=>{
          console.log('Donation saved', donation)
          res.status(200).json({donation})
      })
      .catch(err=>{
          res.status(500).json({err})
      })
      }
  
    }catch(err){
    res.status(500).json({err})
  }
 
})


//route to get donations in NGO dashboard
app.use('/ngo-donations',async(req,res)=>{
   try {
    const {recipient_email} = req.body
    const donations = await Donations.find({ recipient_type: 'NGO',email:recipient_email, accepted: false });
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.use('/donations-update', (req, res) => {
  const donationId = req.body.id;
  
  Donations.findByIdAndUpdate(donationId, { accepted: true }, { new: true })
  .then(updatedDonation => {
    if (!updatedDonation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    res.status(200).json(updatedDonation);
  })
  .catch(error => {
    console.error('Error updating donation:', error);
    res.status(500).json({ message: 'Error updating donation' });
  });
});



//route to store donations in Donation History
app.post('/donation-history', (req, res) => {
  const { donor_name, donor_email, donation_type,  email } = req.body;
  let donation_quantity = donation_type === "food" ? req.body.food_quantity+" ("+req.body.food_type+" )" : donation_type=='cloth' ? req.body.cloth_quantity + " ( "+req.body.cloth_quality+" )" : req.body.amount
  // if(donation_type=='food'){
  //   donation_quantity = req.body.food_quantity
  // }
  // else if(donation_type=='money'){
  //  const {donation_quantity} = req.body.amount
  // }
  // else if(donation_type=="cloth"){
  //  const {donation_quantity} = req.body.cloth_quantity + " ( "+re.body.cloth_quality+" )" 
  // }
  const newDonation = new DonationHistory({
     donor_name,
     donor_email, 
     donation_type, 
     donation_quantity, 
     donation_date: new Date(), 
     email });
  newDonation.save()
    .then(donation => {
      console.log('New donation added:', donation);
      res.status(201).json(donation);
    })
    .catch(error => {
      console.error('Error adding new donation:', error);
      res.status(500).json({ error: 'Error adding new donation' });
    });
});

//get the donations from donation history in NGOs donation history
app.use('/updated-donations-history',async(req,res)=>{
  try {
    const {recipient_email} = req.body
    const donations = await DonationHistory.find({email:recipient_email});
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})
app.use('/needy-updated-donations-history',async(req,res)=>{
  try {
    const {email} = req.body
    const donations = await DonationHistory.find({email});
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

//route to get donations in NGO dashboard
app.use('/needy-donations',async(req,res)=>{
  try {
    const { recipient_email } = req.body
   const donations = await Donations.find({ recipient_type: 'Needy-Person',recipient_email, accepted: false });
   res.status(200).json(donations);
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
})

// DELETE endpoint to delete a donation record
app.use('/donations/:id', async (req, res) => {
  const donationId = req.params.id;

  const result = await Donations.deleteOne(req.params)
  res.send(result)
});


// endpoint to view donors in NGO dashboard
app.use('/donor-profiles', async (req, res) => {
  
  try{
    const filteredUsers = await Users.find({roleId:"3"});
    res.status(200).json(filteredUsers);
  }
  catch(err){
    res.status(500).json({err})
  }
  
});

app.use('/donor-donations',async(req,res)=>{
  try {
    const { email } = req.body
   const donations = await Donations.find({ donor_email:email,recipient_type:'Needy-Person', accepted: true });
   res.status(200).json(donations);
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
})

app.use('/public', express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
// Define endpoint to create a fundraising post
app.use('/fundraising-posts', fundraisingpost_api)

app.use('/ngos',ngo_routes)
app.use('/donors',donor_routes)
app.use('/needy',needy_routes)