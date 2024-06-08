const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  projects: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;