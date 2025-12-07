import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InfoHome {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    historia: string;

    @Column()
    vision: string;

    @Column({ type: 'longtext' })
    imageUrl: string;

    @Column()
    maestroMezcal: string;
    @Column()
    mision: string;
    @Column()
    valores: string;
    @Column()
    normasProduccion: string;
    @Column()
    numeroContacto: number;
    @Column()
    ubicacion: string;
    @CreateDateColumn()
    createdAt: Date;

    
}
