// const Donor_user = require('../models/Donor_user')


//login user

//signup user
const signupDonor = async (req, res) => {
    try {
      // Create a new user object
      const donor = new Donor_user({
        firstName: req.body.firstName,
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
  }

module.exports = {signupDonor}