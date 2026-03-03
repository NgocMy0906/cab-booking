const pricingRepository = require('../repositories/pricingRepository');
const surgeRepository = require('../repositories/surgeRepository');
const pricingService = require('./pricingService');

const calculateEstimate = async ({ vehicleType, distance, duration, zone }) => {
  const pricingConfig = await pricingRepository.getPricing(vehicleType);
  if (!pricingConfig) throw new Error('Vehicle type not found');

  const surgeMultiplier = await surgeRepository.getSurge(zone);

  const fare = pricingService.calculateFare({
    baseFare: pricingConfig.baseFare,
    perKmRate: pricingConfig.perKmRate,
    perMinuteRate: pricingConfig.perMinuteRate,
    distance,
    duration,
    surgeMultiplier
  });

  return {
    vehicleType,
    distance,
    duration,
    surgeMultiplier,
    estimatedFare: fare
  };
};

module.exports = { calculateEstimate };