import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/service/auth.service';
import { GlobalConfigService } from 'src/service/global-config.service';
import { LoggerService } from 'src/service/logger.service ';
import { SequelizeService } from 'src/service/sequelize.service';

@Module({
  providers: [
    GlobalConfigService,
    SequelizeService,
    LoggerService,
    AuthService,
    ConfigService,
  ],
  exports: [
    GlobalConfigService,
    SequelizeService,
    LoggerService,
    AuthService,
    ConfigService,
  ],
})
export class GlobalModule {}