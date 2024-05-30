import { Injectable } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class LoggerService {
  private logger;

  constructor() {
    console.log(process.env.LOG_LEVEL);
    this.logger = createLogger({
      level: process.env.LOG_LEVEL,
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/server.log' }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace?: string) {
    this.logger.error(message, trace);
  }

  warning(message: string, trace?: string) {
    this.logger.warning(message, trace);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}