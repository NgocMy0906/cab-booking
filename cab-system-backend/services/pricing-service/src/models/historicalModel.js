const mongoose = require('mongoose');

const historicalSchema = new mongoose.Schema({
  requestId: String,
  vehicleType: String,
  distance: Number,
  duration: Number,
  zone: String,
  baseFare: Number,
  perKmRate: Number,
  perMinuteRate: Number,
  surgeMultiplier: Number,
  estimatedFare: Number,
  promotionCode: String,
  finalFare: Number,
  userId: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Historical', historicalSchema);