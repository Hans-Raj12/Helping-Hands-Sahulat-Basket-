const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fundraisingPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  goalAmount: {
    type: Number,
    required: true
  },
  imageFilePath: {
    type: String,
    required: true
  },
  raisedAmount:{
    type:Number,
    required:true
  },
  createdAt:{
    type:Date,
    required:true
  },
  ngoEmail: {
    type: String,
    required: true
  },
  ngoId: {
    type: String,
    required: true
  },
});

const FundraisingPost = mongoose.model('FundraisingPost', fundraisingPostSchema);

module.exports = FundraisingPost;