let express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();

let Feedback = require('../Models/feedback')

router.post('/',(req,res)=>{
    const {name, email, subject, message}= req.body
    // console.log(name, email, subject,message)

    const feedback = new Feedback({
        name,
        email,
        subject,
        message,
        active:true
    })
    feedback.save().then(result=>{
        res.status(201).json({
            message: "Feedback registered successfully!",
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

})

module.exports = router