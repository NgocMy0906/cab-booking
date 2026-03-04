const Surge = require('../models/surgeModel');

// Lấy surge multiplier theo zone
const getSurge = async (zone) => {
  const surge = await Surge.findOne({ zone });
  return surge ? surge.multiplier : 1;
};

// Lấy tất cả surge zones
const getAllSurgeZones = async () => {
  return await Surge.find({});
};

// Tạo surge mới
const createSurge = async (zone, multiplier) => {
  const surge = new Surge({ zone, multiplier });
  return await surge.save();
};

// Cập nhật surge
const updateSurge = async (zone, multiplier) => {
  return await Surge.findOneAndUpdate(
    { zone },
    { multiplier },
    { new: true, upsert: true }
  );
};

// Xóa surge
const deleteSurge = async (zone) => {
  return await Surge.deleteOne({ zone });
};

module.exports = { 
  getSurge,
  getAllSurgeZones,
  createSurge,
  updateSurge,
  deleteSurge
};