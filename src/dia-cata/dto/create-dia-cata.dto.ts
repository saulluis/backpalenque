import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDiaCataDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    fecha: Date;

    @IsNumber()
    capacidad: number;

    @IsNumber()
    costo: number;
    @IsNotEmpty()
    estado: boolean;

}
