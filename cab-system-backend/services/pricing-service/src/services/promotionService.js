const promotionRepository = require('../repositories/promotionRepository');

const validatePromotion = async (code, tripValue, vehicleType, zone) => {
  const promotion = await promotionRepository.getPromotionByCode(code);
  
  if (!promotion) {
    throw new Error('Invalid or expired promotion code');
  }
  
  // Kiểm tra usage limit
  if (promotion.usageLimit && promotion.usedCount >= promotion.usageLimit) {
    throw new Error('Promotion code has reached usage limit');
  }
  
  // Kiểm tra min trip value
  if (tripValue < promotion.minTripValue) {
    throw new Error(`Minimum trip value for this promotion is ${promotion.minTripValue}`);
  }
  
  // Kiểm tra vehicle type
  if (promotion.applicableVehicleTypes && 
      promotion.applicableVehicleTypes.length > 0 && 
      !promotion.applicableVehicleTypes.includes(vehicleType)) {
    throw new Error('Promotion not applicable for this vehicle type');
  }
  
  // Kiểm tra zone
  if (promotion.applicableZones && 
      promotion.applicableZones.length > 0 && 
      !promotion.applicableZones.includes(zone)) {
    throw new Error('Promotion not applicable for this zone');
  }
  
  return promotion;
};

const calculateDiscount = (tripValue, promotion) => {
  let discount = 0;
  
  if (promotion.type === 'fixed') {
    discount = promotion.value;
  } else if (promotion.type === 'percentage') {
    discount = (tripValue * promotion.value) / 100;
  }
  
  // Giới hạn discount tối đa nếu có
  if (promotion.maxDiscount && discount > promotion.maxDiscount) {
    discount = promotion.maxDiscount;
  }
  
  return discount;
};

const applyPromotion = async (code, tripValue, vehicleType, zone) => {
  // Validate promotion
  const promotion = await validatePromotion(code, tripValue, vehicleType, zone);
  
  // Calculate discount
  const discount = calculateDiscount(tripValue, promotion);
  
  // Increment usage count
  await promotionRepository.incrementUsageCount(code);
  
  return {
    code: promotion.code,
    originalPrice: tripValue,
    discount,
    finalPrice: tripValue - discount,
    promotionType: promotion.type,
    promotionValue: promotion.value
  };
};

module.exports = {
  validatePromotion,
  calculateDiscount,
  applyPromotion
};