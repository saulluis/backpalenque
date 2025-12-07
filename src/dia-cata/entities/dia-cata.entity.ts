/* eslint-disable prettier/prettier */
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DiaCata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  fecha: Date;

  @Column()
  capacidad: number;
  @Column()
  costo: number;
  @OneToMany(() => Usuario, (usuario) => usuario.diaCata)
  usuarios: Usuario[];
  @Column()
  estado: boolean;
}
