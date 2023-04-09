const mongoose = require("mongoose");

const needySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("needy_users", needySchema);