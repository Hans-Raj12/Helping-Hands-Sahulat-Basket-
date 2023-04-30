const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donor_name: {
    type: String,
    required: true
  },
  donor_email: {
    type: String,
    required: true
  },
  recipient_type: {
    type: String,
    enum: ['NGO', 'Needy-Person'],
    required: true
  },
  recipient_name: {
    type: String,
  },
  recipient_email: {
    type: String,
  },
  donation_type: {
    type: String,
    enum: ['money', 'food','cloth'],
    required: true
  },
  amount: {
    type: Number,
    min: 1,
    validate: {
      validator: function(v) {
        return this.donation_type === 'money' ? v != null : true;
      },
      message: 'Amount is required for money donations'
    }
  },
  food_quantity: {
    type: Number,
    validate: {
      validator: function(v) {
        return this.donation_type === 'food' ? v != null : true;
      },
      message: 'Food quantity is required for food donations'
    }
  },
  cloth_quantity: {
    type: Number,
    validate: {
      validator: function(v) {
        return this.donation_type === 'cloth' ? v != null : true;
      },
      message: 'Cloth quanity is required for cloth donations'
    }
  },
  donation_date: {
    type: Date,
    default: Date.now
  },
  accepted: {
    type: Boolean,
    default: false
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
