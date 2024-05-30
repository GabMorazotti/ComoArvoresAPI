import { Injectable, Logger } from '@nestjs/common';
import { EventoModel } from '../model/evento.model'
import { SequelizeService } from './sequelize.service';
import { LoggerService } from './logger.service ';

@Injectable()
export class EventoService {
  constructor(
    private sequelizeService: SequelizeService,
    private readonly logger: LoggerService,
  ) {}

  async create(evento: EventoModel): Promise<EventoModel> {
    let result;
    try {
      this.logger.verbose("EventoService - create");
      result = await this.sequelizeService.getSequelizeInstance().models.EventoModel.create((JSON.parse(JSON.stringify(evento))));
    }
    catch(ex) {
      this.logger.error("EventoService - create", ex.error);
    }
    finally {
      this.logger.verbose("EventoService - create - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }

  async findAll(): Promise<EventoModel[]> {
    let result;
    try {
      this.logger.verbose("EventoService - findAll");
      result = await this.sequelizeService.getSequelizeInstance().models.EventoModel.findAll();
    }
    catch(ex) {
      this.logger.error("EventoService - findAll", ex.error);
    }
    finally{
      this.logger.verbose("EventoService - findAll - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }

  async findById(id: number): Promise<EventoModel> {
    let result;
    try {
      this.logger.verbose("EventoService - findById");
      result = await this.sequelizeService.getSequelizeInstance().models.EventoModel.findByPk(id);
    }
    catch(ex) {
      this.logger.error("EventoService - findById", ex.error);
    }
    finally {
      this.logger.verbose("EventoService - findById - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }

  async contaPresencaEvento(id: number): Promise<number> {
    let result;
    try {
      this.logger.verbose("EventoService - findById");
      let req = await this.sequelizeService.getSequelizeInstance().models.EventoModel.findByPk(id);
      result = req.dataValues.length;
    }
    catch(ex) {
      this.logger.error("EventoService - findById", ex.error);
    }
    finally {
      this.logger.verbose("EventoService - findById - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }

  async update(id: number, evento: EventoModel): Promise<void> {
    let result;
    try {
      this.logger.verbose("EventoService - update");
      result = await this.sequelizeService.getSequelizeInstance().models.EventoModel.update(evento, { where: { IdTexto: id } })
    }
    catch(ex) {
      this.logger.error("EventoService - update", ex.error);
    }
    finally {
      this.logger.verbose("EventoService - update - finally");
      // this.sequelizeService.getSequelizeInstance().close();
    }
    return result;
  }
}
