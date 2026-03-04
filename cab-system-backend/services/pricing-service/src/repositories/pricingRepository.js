const Pricing = require('../models/pricingModel');

// Lấy pricing theo loại xe
const getPricing = async (vehicleType) => {
  return await Pricing.findOne({ vehicleType });
};

// Lấy tất cả pricing
const getAllPricing = async () => {
  return await Pricing.find({});
};

// Thêm pricing mới
const createPricing = async (data) => {
  const pricing = new Pricing(data);
  return await pricing.save();
};

// Cập nhật pricing
const updatePricing = async (vehicleType, updateData) => {
  return await Pricing.findOneAndUpdate(
    { vehicleType },
    updateData,
    { new: true, runValidators: true }
  );
};

// Xóa pricing
const deletePricing = async (vehicleType) => {
  return await Pricing.deleteOne({ vehicleType });
};

module.exports = { 
  getPricing,
  getAllPricing,
  createPricing,
  updatePricing,
  deletePricing
};