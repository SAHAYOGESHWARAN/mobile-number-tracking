const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(v); // Regex for Indian mobile numbers
            },
            message: props => `${props.value} is not a valid Indian mobile number!`
        }
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
    location: { type: String },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tracking', trackingSchema);