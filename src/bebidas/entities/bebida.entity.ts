import { Apartado } from "src/apartados/entities/apartado.entity";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bebida {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;
    @Column()
    precio: number;
    @Column()
    stock: number;
    @Column({ type: 'longtext' })
    imagen: string
    @ManyToOne(() => Categoria, (categoria) => categoria.bebidas)
    categoria: Categoria;
    @OneToMany(() => Apartado, (apartado) => apartado.bebidasID)
    apartado: Apartado[];

}
