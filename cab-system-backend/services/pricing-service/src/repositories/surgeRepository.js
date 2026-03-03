const Surge = require('../models/surgeModel');

const getSurge = async (zone) => {
  const surge = await Surge.findOne({ zone });
  return surge ? surge.multiplier : 1;
};

module.exports = { getSurge };