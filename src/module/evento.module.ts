import { Module } from '@nestjs/common';
import { EventoController } from 'src/controllers/evento.controller';
import { EventoService } from 'src/service/evento.service';
import { GlobalModule } from './global.module';

@Module({
    controllers: [EventoController],
    imports: [
        GlobalModule,
    ],
    providers: [
        EventoService,
    ],
})
export class EventoModule {}