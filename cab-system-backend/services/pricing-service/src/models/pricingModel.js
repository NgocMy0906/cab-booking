const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  vehicleType: String,
  baseFare: Number,
  perKmRate: Number,
  perMinuteRate: Number
});

module.exports = mongoose.model('Pricing', pricingSchema);