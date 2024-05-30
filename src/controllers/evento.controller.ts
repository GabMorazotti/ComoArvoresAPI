import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { LoggerService } from 'src/service/logger.service ';
import { EventoModel } from 'src/model/evento.model';
import { EventoService } from 'src/service/evento.service';

@Controller('evento')
export class EventoController {
  constructor(
    private readonly eventoService: EventoService,
    private readonly logger: LoggerService
  ) {}

  @Post()
  async create(@Body() evento: EventoModel): Promise<EventoModel> {
    this.logger.verbose("EventoController - create");
    return this.eventoService.create(evento);
  }

  @Get()
  async findAll(): Promise<EventoModel[]> {
    this.logger.verbose("EventoController - findAll");
    return this.eventoService.findAll();
  }

  @Get('/presenca/:id')
  async contaPresencaEvento(@Param('id') id: number): Promise<number> {
    this.logger.verbose("EventoController - contaPresencaEvento");
    return this.eventoService.contaPresencaEvento(id);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<EventoModel> {
    this.logger.verbose("EventoController - findById");
    return this.eventoService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() evento: EventoModel): Promise<void> {
    this.logger.verbose("EventoController - update");
    await this.eventoService.update(id, evento);
  }
}