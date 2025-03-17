const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true,
        unique: true, // Ensure mobile number is unique per user
        validate: {
            validator: function(v) {
                return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(v); // Regex for Indian mobile numbers
            },
            message: props => `${props.value} is not a valid Indian mobile number!`
        }
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User ', 
        required: true // Ensure userId is required
    },
    location: { 
        type: String, 
        required: true, // Ensure location is provided
        validate: {
            validator: function(v) {
                return v.length > 0; // Ensure location is not empty
            },
            message: props => 'Location cannot be empty!'
        }
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    },
});

// Middleware to update the updatedAt field before saving
trackingSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Custom method to find tracking entries by userId
trackingSchema.statics.findByUser Id = function(userId) {
    return this.find({ userId });
};

// Custom method to delete tracking entry by mobile number
trackingSchema.statics.deleteByMobileNumber = function(mobileNumber) {
    return this.deleteOne({ mobileNumber });
};

module.exports = mongoose.model('Tracking', trackingSchema);