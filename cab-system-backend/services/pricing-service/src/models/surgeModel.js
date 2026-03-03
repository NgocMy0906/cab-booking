const mongoose = require('mongoose');

const surgeSchema = new mongoose.Schema({
  zone: String,
  multiplier: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Surge', surgeSchema);