const express = require('express');
const { trackNumber } = require('../controllers/trackingController');
const { validateTrackingInput } = require('../middlewares/validation'); 
const { authenticate } = require('../middlewares/auth'); 
const router = express.Router();

// Apply authentication middleware
router.use(authenticate);

// Route to track a mobile number
router.post('/track', validateTrackingInput, trackNumber);

module.exports = router;