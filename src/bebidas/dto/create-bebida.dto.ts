import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";

export class CreateBebidaDto {
    @IsNotEmpty()
    nombre: string;
    @IsNotEmpty()
    descripcion: string;
    @IsNotEmpty()
    precio: number;
    @IsNotEmpty()
    stock: number;
    @IsNotEmpty()
    imagen: string;
    @IsNotEmpty()
    categoriaId: number;

}
