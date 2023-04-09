require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const needy_users = require('./Models/needy-users')
const donor_users = require('./Models/donor_users')


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


