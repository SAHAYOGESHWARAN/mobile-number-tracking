

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
        return res.status(401).json({ error: 'No token provided, authorization denied.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key');
        req.user = await User.findById(decoded.id); // Attach user to request
        if (!req.user) {
            return res.status(401).json({ error: 'Token is not valid, user not found.' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token is not valid.' });
    }
};

module.exports = { authenticate };