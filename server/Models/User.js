const mongoose = require('mongoose');

// Your schema should not define _id manually
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure email is unique
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}, { timestamps: true });  // Adding timestamps to record createdAt and updatedAt

module.exports = mongoose.model('User', userSchema);
