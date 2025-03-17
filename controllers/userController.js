const User = require('../models/User');

const registerUser  = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser  = new User({ name, email, password });
        await newUser .save();
        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser  = async (req, res) => {
    const { email, password } = req.body;
    // Implement login logic (authentication) here
};

module.exports = { registerUser , loginUser  };