console.log("This is an informational message");
console.error("This is an error message");
console.warn("This is a warning message");
console.debug("This is a debug message");

const winston = require("winston");

// Create a logger instance with transports
const logger = winston.createLogger({
  // Transports define where your logs go
  transports: [
    // Console transport
    new winston.transports.Console({
      level: "debug", // Log only if info level or below
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    // File transport
    new winston.transports.File({
      filename: "log.log", // All logs will be saved in this file
      level: "info",
    }),
  ],
});

// Log some messages
logger.info("This is an informational message");
logger.error("This is an error message");
logger.warn("This is a warning message");
logger.debug("This is a debug message");
logger.debug("This is a debug message looooog");
