
import { createLogger, format, transports } from 'winston'

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const buildLogger = (loggerLabel: string) => {
    const logger = createLogger({
    format: combine(
        label({ label: loggerLabel }),
        timestamp(),
        myFormat
    ),
    transports: [new transports.Console()]
    });

    return logger;
}
