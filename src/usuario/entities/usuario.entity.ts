import { Apartado } from "src/apartados/entities/apartado.entity";
import { DiaCata } from "src/dia-cata/entities/dia-cata.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  genero: string;
  @Column()
  status: number;

  @CreateDateColumn()
  CreatedAt: Date;
  @ManyToOne(() => DiaCata, (diaCata) => diaCata.usuarios, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'dia_cata_id' })
  diaCata: DiaCata | null;
  @OneToMany(() => Apartado, (apartado) => apartado.usuarioID)
  apartados: Apartado[];
}
