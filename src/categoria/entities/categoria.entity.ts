import { Bebida } from "src/bebidas/entities/bebida.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()


export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @OneToMany(()=> Bebida, (bebida)=> bebida.categoria)
    bebidas: Bebida[];
}
