import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
  tableName: 'Evento',
  timestamps: false
})
export class EventoModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  IdEvento: number;

  @Column
  Nome: string;

  @Column
  Data: Date;

  @Column
  Endereco: string;

  @Column
  Imagem: string;

}