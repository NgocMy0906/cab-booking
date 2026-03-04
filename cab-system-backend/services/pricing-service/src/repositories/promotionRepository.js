const Promotion = require('../models/promotionModel');

const getPromotionByCode = async (code) => {
  return await Promotion.findOne({ 
    code, 
    isActive: true,
    validFrom: { $lte: new Date() },
    validTo: { $gte: new Date() }
  });
};

const getAllPromotions = async () => {
  return await Promotion.find({});
};

const createPromotion = async (data) => {
  const promotion = new Promotion(data);
  return await promotion.save();
};

const updatePromotion = async (code, updateData) => {
  return await Promotion.findOneAndUpdate(
    { code },
    updateData,
    { new: true }
  );
};

const deletePromotion = async (code) => {
  return await Promotion.deleteOne({ code });
};

const incrementUsageCount = async (code) => {
  return await Promotion.findOneAndUpdate(
    { code },
    { $inc: { usedCount: 1 } }
  );
};

module.exports = {
  getPromotionByCode,
  getAllPromotions,
  createPromotion,
  updatePromotion,
  deletePromotion,
  incrementUsageCount
};