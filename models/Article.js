const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  content:    { type: String, required: true },
  coverImage: { type: String },
  tags:       [String],
  views:      { type: Number, default: 0 },
  author:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
