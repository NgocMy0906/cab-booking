const pricingRepository = require('../repositories/pricingRepository');
const surgeRepository = require('../repositories/surgeRepository');
const pricingService = require('./pricingService');
const historicalRepository = require('../repositories/historicalRepository'); // Thêm
const logger = require('../logger/logger'); // Thêm
const { v4: uuidv4 } = require('uuid'); // npm install uuid

const calculateEstimate = async ({ vehicleType, distance, duration, zone }) => {
  const requestId = uuidv4();
  
  logger.info('Calculating estimate', { requestId, vehicleType, distance, duration, zone });
  
  const pricingConfig = await pricingRepository.getPricing(vehicleType);
  if (!pricingConfig) {
    logger.warn('Vehicle type not found', { requestId, vehicleType });
    throw new Error('Vehicle type not found');
  }

  const surgeMultiplier = await surgeRepository.getSurge(zone);
  
  const fare = pricingService.calculateFare({
    baseFare: pricingConfig.baseFare,
    perKmRate: pricingConfig.perKmRate,
    perMinuteRate: pricingConfig.perMinuteRate,
    distance,
    duration,
    surgeMultiplier
  });

  // Lưu lịch sử
  await historicalRepository.saveHistory({
    requestId,
    vehicleType,
    distance,
    duration,
    zone,
    baseFare: pricingConfig.baseFare,
    perKmRate: pricingConfig.perKmRate,
    perMinuteRate: pricingConfig.perMinuteRate,
    surgeMultiplier,
    estimatedFare: fare
  });

  logger.info('Estimate calculated', { requestId, fare });

  return {
    requestId,
    vehicleType,
    distance,
    duration,
    surgeMultiplier,
    estimatedFare: fare
  };
};

module.exports = { calculateEstimate };