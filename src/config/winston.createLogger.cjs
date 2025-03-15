const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message }) => {
      return `[${level.toUpperCase()}]: ${message}`;
    })
  ),
  defaultMeta: { service: "user-service" },
  transports: [new winston.transports.File({ filename: "src/logs/app.log" })],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

logger.on("finish", () => {
  console.log("Logs have been written to file.");
});
module.exports = logger;
