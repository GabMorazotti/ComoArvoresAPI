import { Module } from '@nestjs/common';
import { GlobalConfigService } from 'src/service/global-config.service';

@Module({
  providers: [
    GlobalConfigService,
  ],
  exports: [ GlobalConfigService ],
})
export class GlobalConfigModule {}