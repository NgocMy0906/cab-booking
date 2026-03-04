// src/scripts/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Pricing = require('../models/pricingModel');
const Surge = require('../models/surgeModel');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Xóa dữ liệu cũ
    await Pricing.deleteMany();
    await Surge.deleteMany();

    // Thêm pricing
    await Pricing.insertMany([
      { vehicleType: 'car', baseFare: 10000, perKmRate: 5000, perMinuteRate: 1000 },
      { vehicleType: 'suv', baseFare: 15000, perKmRate: 7000, perMinuteRate: 1200 },
      { vehicleType: 'bike', baseFare: 5000, perKmRate: 3000, perMinuteRate: 500 }
    ]);

    // Thêm surge
    await Surge.insertMany([
      { zone: 'CENTER', multiplier: 1.5 },
      { zone: 'AIRPORT', multiplier: 2.0 },
      { zone: 'SUBURB', multiplier: 1.0 }
    ]);

    console.log('Seed data created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seedData();