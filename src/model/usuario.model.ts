import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
  tableName: 'Usuario',
  timestamps: false
})
export class UsuarioModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  IdUsuario: number;

  @Column
  Nome: string;

  @Column
  Email: string;

  @Column
  Senha: string;

  @Column
  Super: boolean;
}