const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  certifications: [{ type: String }],
  bio: { type: String },
  website: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Consultant = mongoose.model('Consultant', consultantSchema);
 module.exports = Consultant;
