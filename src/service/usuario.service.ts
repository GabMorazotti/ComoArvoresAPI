import { Injectable, Logger } from '@nestjs/common';
import { UsuarioModel } from '../model/usuario.model'
import { SequelizeService } from './sequelize.service';
import { LoggerService } from './logger.service ';

@Injectable()
export class UsuarioService {
  constructor(
    private sequelizeService: SequelizeService,
    private readonly logger: LoggerService,
  ) {}

  async create(usuario: UsuarioModel): Promise<UsuarioModel> {
    let result;
    try {
      this.logger.verbose("UsuarioService - create");
      result = await this.sequelizeService.getSequelizeInstance().models.UsuarioModel.create((JSON.parse(JSON.stringify(usuario))));
    }
    catch(ex) {
      this.logger.error("UsuarioService - create", ex.error);
    }
    finally {
      this.logger.verbose("UsuarioService - create - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }

  async findAll(): Promise<UsuarioModel[]> {
    let result;
    try {
      this.logger.verbose("UsuarioService - findAll");
      result = await this.sequelizeService.getSequelizeInstance().models.UsuarioModel.findAll();
    }
    catch(ex) {
      this.logger.error("UsuarioService - findAll", ex.error);
    }
    finally{
      this.logger.verbose("UsuarioService - findAll - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }

  async findById(id: number): Promise<UsuarioModel> {
    let result;
    try {
      this.logger.verbose("UsuarioService - findById");
      result = await this.sequelizeService.getSequelizeInstance().models.UsuarioModel.findByPk(id);
    }
    catch(ex) {
      this.logger.error("UsuarioService - findById", ex.error);
    }
    finally {
      this.logger.verbose("UsuarioService - findById - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }

  async update(id: number, usuario: UsuarioModel): Promise<void> {
    let result;
    try {
      this.logger.verbose("UsuarioService - update");
      result = await this.sequelizeService.getSequelizeInstance().models.UsuarioModel.update(usuario, { where: { IdTexto: id } })
    }
    catch(ex) {
      this.logger.error("UsuarioService - update", ex.error);
    }
    finally {
      this.logger.verbose("UsuarioService - update - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }
}
