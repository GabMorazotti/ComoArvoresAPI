import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service'
import { LoggerService } from 'src/service/logger.service ';
import { UsuarioModel } from 'src/model/usuario.model';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly logger: LoggerService
  ) {}

  @Post()
  async create(@Body() usuario: UsuarioModel): Promise<UsuarioModel> {
    this.logger.verbose("UsuarioController - create");
    return this.usuarioService.create(usuario);
  }

  @Get()
  async findAll(): Promise<UsuarioModel[]> {
    this.logger.verbose("UsuarioController - findAll");
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<UsuarioModel> {
    this.logger.verbose("UsuarioController - findById");
    return this.usuarioService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() usuario: UsuarioModel): Promise<void> {
    this.logger.verbose("UsuarioController - update");
    await this.usuarioService.update(id, usuario);
  }
}