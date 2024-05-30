import { HttpException, Injectable } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { Sequelize } from 'sequelize-typescript';
import { GlobalConfigService } from './global-config.service';
import { LoggerService } from './logger.service ';
import { UsuarioModel } from 'src/model/usuario.model';
import { EventoModel } from 'src/model/evento.model';

// import { TabClassElementoModel } from 'src/model/tab-class_elemento.model';

@Injectable()
export class SequelizeService {
  private sequelize: Sequelize;

  constructor(
    private loggerService: LoggerService,
  ) { }

  async configSequilizeInstance() {
    try {
      this.sequelize = new Sequelize({
        dialect: 'mysql',
        dialectOptions: {
          options: {
            encrypt: false,
            debug: false,
          },
          application_name: 'ComoArvoresAPI',
        },
        host: process.env.DATABASE_HOST,
        //port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        define: {
          timestamps: false,
        },
      });

      this.sequelize.addModels([
        UsuarioModel,
        EventoModel
      ]);

      await this.sequelize.authenticate();
      this.loggerService.log(
        'Conexão com o banco de dados estabelecida com sucesso',
      );
    } catch (ex) {
      this.loggerService.error('Erro ao acessar banco de dados.', ex);
      throw new HttpException(
        'Erro ao acessar banco de dados.',
        HttpStatusCode.Forbidden,
      );
    }
  }

  getSequelizeInstance(): Sequelize {
    if (!this.sequelize) {
      this.loggerService.error(
        'Erro ao acessar banco de dados.',
        'SequelizeService - getSequelizeInstance',
      );
      throw new HttpException(
        'Erro ao acessar banco de dados.',
        HttpStatusCode.Forbidden,
      );
    }
    return this.sequelize;
  }
}
