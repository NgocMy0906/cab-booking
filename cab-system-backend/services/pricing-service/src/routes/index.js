const express = require('express');
const router = express.Router();

const estimateRoutes = require('./estimateRoutes');

router.use('/estimate', estimateRoutes);

module.exports = router;