

const validateMobileNumber = (mobileNumber) => {
    const regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/; 
    return regex.test(mobileNumber);
};

module.exports = { validateMobileNumber };