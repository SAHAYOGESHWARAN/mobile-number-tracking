const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const trackingRoutes = require('./routes/trackingRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect('mongodb://localhost:27017/mobileTracking', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tracking', trackingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});