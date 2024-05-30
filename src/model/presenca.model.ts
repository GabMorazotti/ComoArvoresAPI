import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UsuarioModel } from './usuario.model';
import { EventoModel } from './evento.model';

@Table({
  tableName: 'UsuarioEvento',
  timestamps: false
})
export class UsuarioEventoModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  IdUsuarioEvento: number;

  @Column
  @ForeignKey(()=> UsuarioModel)
  IdUsuario: number;

  @BelongsTo(() => UsuarioModel)
  Usuario: UsuarioModel;

  @Column
  @ForeignKey(()=> EventoModel)
  IdEvento: number;

  @BelongsTo(() => EventoModel)
  Evento: EventoModel

}