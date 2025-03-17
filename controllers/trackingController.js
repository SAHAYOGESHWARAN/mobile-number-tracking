const Tracking = require('../models/Tracking');
const User = require('../models/User');
const { validateMobileNumber } = require('../utils/validation'); // Utility for mobile number validation
const logger = require('../utils/logger'); // Logger utility

const trackNumber = async (req, res) => {
    const { mobileNumber, location } = req.body;
    const userId = req.user.id; // Assuming user ID is available in req.user after authentication

    // Validate mobile number
    if (!validateMobileNumber(mobileNumber)) {
        return res.status(400).json({ error: 'Invalid mobile number format.' });
    }

    try {
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User  not found.' });
        }

        // Create tracking entry
        const trackingEntry = new Tracking({ mobileNumber, userId, location });
        await trackingEntry.save();

        // Log the tracking entry
        logger.info(`Tracking entry created for mobile number: ${mobileNumber} by user: ${userId}`);

        res.status(201).json({ message: 'Tracking entry created successfully', trackingEntry });
    } catch (error) {
        logger.error(`Error creating tracking entry: ${error.message}`);
        res.status(500).json({ error: 'An error occurred while creating the tracking entry.' });
    }
};

module.exports = { trackNumber };