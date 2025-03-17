
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'tracking.log');

const info = (message) => {
    const logMessage = `[INFO] ${new Date().toISOString()}: ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage);
};

const error = (message) => {
    const logMessage = `[ERROR] ${new Date().toISOString()}: ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage);
};

module.exports = { info, error };