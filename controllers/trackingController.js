const Tracking = require('../models/Tracking');

const trackNumber = async (req, res) => {
    const { mobileNumber, userId, location } = req.body;
    try {
        const trackingEntry = new Tracking({ mobileNumber, userId, location });
        await trackingEntry.save();
        res.status(201).json({ message: 'Tracking entry created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { trackNumber };