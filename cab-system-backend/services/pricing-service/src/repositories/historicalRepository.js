const Historical = require('../models/historicalModel');

const saveHistory = async (data) => {
  const history = new Historical(data);
  return await history.save();
};

const getHistoryByDate = async (startDate, endDate) => {
  return await Historical.find({
    timestamp: { $gte: startDate, $lte: endDate }
  }).sort({ timestamp: -1 }); // Sắp xếp mới nhất lên đầu
};

const getHistoryByZone = async (zone) => {
  return await Historical.find({ zone }).sort({ timestamp: -1 });
};

module.exports = {
  saveHistory,
  getHistoryByDate,
  getHistoryByZone
};