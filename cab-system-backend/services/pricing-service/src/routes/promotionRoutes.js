const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

router.post('/apply', promotionController.applyPromotion);
router.get('/', promotionController.getAllPromotions);
router.post('/', promotionController.createPromotion);
router.put('/:code', promotionController.updatePromotion);
router.delete('/:code', promotionController.deletePromotion);

module.exports = router;