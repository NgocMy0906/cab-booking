const express = require('express');
const router = express.Router();

const estimateRoutes = require('./estimateRoutes');
const pricingRoutes = require('./pricingRoutes');
const surgeRoutes = require('./surgeRoutes');
const promotionRoutes = require('./promotionRoutes');
const healthRoutes = require('./healthRoutes');
const historicalRoutes = require('./historicalRoutes'); 

router.use('/estimate', estimateRoutes);
router.use('/pricing', pricingRoutes);
router.use('/surge', surgeRoutes);
router.use('/promotion', promotionRoutes);
router.use('/health', healthRoutes);
router.use('/historical', historicalRoutes); 

module.exports = router;