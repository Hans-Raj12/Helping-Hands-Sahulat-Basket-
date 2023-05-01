const mongoose = require('mongoose');

const donationHistorySchema = new mongoose.Schema({
  donor_name: { type: String, },
  donor_email: { type: String, },
  donation_type: { type: String, },
  donation_quantity: { type: String, },
  donor_address: { type: String,  },
  donation_date: { type: String, },
  email: { type: String, }
});

const DonationHistory = mongoose.model('DonationHistory', donationHistorySchema);

module.exports = DonationHistory;