const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  code: { 
    type: String, 
    required: true, 
    unique: true 
  },
  type: { 
    type: String, 
    enum: ['fixed', 'percentage'], 
    required: true 
  },
  value: { 
    type: Number, 
    required: true 
  },
  minTripValue: { 
    type: Number, 
    default: 0 
  },
  maxDiscount: { 
    type: Number 
  },
  validFrom: { 
    type: Date, 
    required: true 
  },
  validTo: { 
    type: Date, 
    required: true 
  },
  usageLimit: { 
    type: Number, 
    default: null 
  },
  usedCount: { 
    type: Number, 
    default: 0 
  },
  applicableVehicleTypes: [String],
  applicableZones: [String],
  isActive: { 
    type: Boolean, 
    default: true 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Promotion', promotionSchema);