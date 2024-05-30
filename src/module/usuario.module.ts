import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controllers/usuario.controller';
import { UsuarioService } from 'src/service/usuario.service';
import { GlobalModule } from './global.module';

@Module({
    controllers: [UsuarioController],
    imports: [
        GlobalModule,
    ],
    providers: [
        UsuarioService,
    ],
})
export class UsuarioModule {}