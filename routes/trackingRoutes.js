const express = require('express');
const { trackNumber } = require('../controllers/trackingController');
const router = express.Router();

router.post('/track', trackNumber);

module.exports = router;