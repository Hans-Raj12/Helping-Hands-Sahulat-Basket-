let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();
const DIR = '../public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
// User model
let FundraisingPost = require('../Models/FundraisingPost');
router.post('/', upload.single('file'), (req, res, next) => {
    const { title, description, goalAmount,ngoEmail,ngoId } = req.body;
   
    const url = req.protocol + '://' + req.get('host')
    const imageFilePath = req.file.filename;
    const fundraisingpost = new FundraisingPost({
        title,
        description,
        goalAmount,
        imageFilePath,
        raisedAmount:0,
        createdAt:new Date(),
        ngoEmail,
        ngoId
    });
    fundraisingpost.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})
router.get('/', (req, res, next) => {
    const ngoEmail = req.query.ngoEmail
    FundraisingPost.find({ngoEmail})
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(error => {
        res.status(500).json({
          message: "An error occurred while retrieving posts.",
          error: error
        });
      });
  });


module.exports = router;