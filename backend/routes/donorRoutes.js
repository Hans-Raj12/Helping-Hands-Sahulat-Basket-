const express = require('express')

const { signupDonor} = require('../controllers/userController')
const router = express.Router()


//signup route

router.post('/donor-signup',signupDonor)

module.exports = router

  