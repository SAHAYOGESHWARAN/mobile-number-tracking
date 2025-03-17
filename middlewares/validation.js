
const { body, validationResult } = require('express-validator');

const validateTrackingInput = [
    body('mobileNumber')
        .isString()
        .withMessage('Mobile number must be a string.')
        .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)
        .withMessage('Invalid mobile number format.'),
    body('location')
        .isString()
        .withMessage('Location must be a string.')
        .notEmpty()
        .withMessage('Location cannot be empty.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateTrackingInput };