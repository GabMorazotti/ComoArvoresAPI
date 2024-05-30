import { Module } from '@nestjs/common';
import { SequelizeService } from 'src/service/sequelize.service';
import { GlobalConfigService } from 'src/service/global-config.service';

@Module({
  providers: [
    SequelizeService,
    GlobalConfigService,
  ],
  exports: [SequelizeService],
})
export class SequelizeModule {}