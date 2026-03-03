const Pricing = require('../models/pricingModel');

const getPricing = async (vehicleType) => {
  return await Pricing.findOne({ vehicleType });
};

module.exports = { getPricing };