const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar:   { type: String, default: '' },
  favorites: [{ type: String }] // array of article links or IDs
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
