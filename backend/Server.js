require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const needy_users = require('./Models/needy-users')
const donor_users = require('./Models/donor_users')
// const dbSchema = require('./Models/schemaModels')
const router = express.Router();
const role = require('./Models/role');
// const { Users } = require('./Models/schemaModels');
const Users = require('./Models/Users')
const Funding = require('./Models/Funding')
const FundingDetails = require('./Models/FundingDetails')
const DonationOffer = require('./Models/DonationOffer')
const DonationType = require('./Models/DonationType')

const app = express()

// Configure middleware
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
    // Create a new user object
    const donor = new donor_users({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      number: req.body.number,
      cnic: req.body.cnic,
      password: req.body.password,
    });

    // Save the user to the database
    await donor.save();

    // Return a success response
    res.status(200).send({ message: "User created successfully" });
  } catch (err) {
    // Return an error response
    console.error(err);
    res.status(500).send({ message: "Error creating user" });
  }
})


//needy routes
app.use('/needy-signup', async (req, res) => {
  try {
    // Create a new user object
    const needy = new needy_users({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      number: req.body.number,
      cnic: req.body.cnic,
      password: req.body.password,
    });

    // Save the user to the database
    await needy.save();

    // Return a success response
    res.status(200).json(needy);
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
  const donorUser = await donor_users.findOne({ email, password });
  if (donorUser) {
    res.status(200).send({ message: "Donor user logged in successfully", redirect:"/home" });
    return;
  }
  
  // Check if needy user exists with the given email and password
  const needyUser = await needy_users.findOne({ email, password });
  if (needyUser) {
    res.status(200).send({ message: "Needy user logged in successfully", redirect:"/about" });
    return;
  }

  // If neither donor nor needy user exists, return an error response
  res.status(401).send({ message: "Invalid email or password" });
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
    // const { roleId, name, password, email, address, phone, cnic } = req.body;

    // // Create a new user instance
    // const newUser = new User({
    //   roleId,
    //   name,
    //   password,
    //   email,
    //   address,
    //   phone,
    //   cnic
    // });

    const newUser = new Users({
       roleId:'1',
       name:'Hans',
       password:'hans12',
       email:'hans63565@gmail.com',
       address:'Sukkur',
       phone:'03043458660',
       cnic:'4510589725885' 
    })

    const newUser2 = new Users({
      roleId:'2',
      name:'Raj',
      password:'hans12',
      email:'raj@gmail.com',
      address:'Sukkur',
      phone:'03043458660',
      cnic:'451089725885' 
   })

   const newUser3 = new Users({
    roleId:'3',
    name:'Kashi',
    password:'hans12',
    email:'kashi@gmail.com',
    address:'Sukkur',
    phone:'03043458660',
    cnic:'45108725885' 
 })
 const newUser4 = new Users({
  roleId:'4',
  name:'Prem',
  password:'hans12',
  email:'prem@gmail.com',
  address:'Sukkur',
  phone:'03043458660',
  cnic:'4510725885' 
})
    // Save the new user to the database
    const savedUser = await newUser.save();
    const savedUser2 = await newUser2.save();
    const savedUser3 = await newUser3.save();
    const savedUser4 = await newUser4.save();

    res.status(201).json({savedUser,savedUser2,savedUser3,savedUser4}); // Return the saved user as a JSON response with a 201 status code
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