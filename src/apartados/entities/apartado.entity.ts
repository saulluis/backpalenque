/* eslint-disable prettier/prettier */
import { Bebida } from 'src/bebidas/entities/bebida.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Apartado {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cantidad: number;
  @ManyToOne(() => Usuario, (usuario) => usuario.apartados)
  usuarioID: Usuario;
  @ManyToOne(() => Bebida, (bebidas) => bebidas.apartado)
  bebidasID: Bebida;
}
