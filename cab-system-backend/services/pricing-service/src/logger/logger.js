const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logToFile = (level, message, data = {}) => {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} [${level}] ${message} ${JSON.stringify(data)}\n`;
  const filePath = path.join(logsDir, `${level}.log`);
  
  fs.appendFile(filePath, logEntry, (err) => {
    if (err) console.error('Error writing to log file:', err);
  });
};

const logger = {
  info: (message, data = {}) => {
    console.log(`[INFO] ${message}`, data);
    logToFile('info', message, data);
  },
  error: (message, data = {}) => {
    console.error(`[ERROR] ${message}`, data);
    logToFile('error', message, data);
  },
  warn: (message, data = {}) => {
    console.warn(`[WARN] ${message}`, data);
    logToFile('warn', message, data);
  },
  debug: (message, data = {}) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, data);
    }
  }
};

module.exports = logger;