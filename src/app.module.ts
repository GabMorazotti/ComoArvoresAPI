import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './module/global.module';
import { UsuarioModule } from './module/usuario.module';

// import { TabClassElementoModule } from './module/tab-class_elemento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      //TODOPUB - alterar arquivo .env
      envFilePath: '.env.local',
      isGlobal: true,
    }),
    GlobalModule,
    UsuarioModule
    // TabClassElementoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
  ],
})
export class AppModule {}
