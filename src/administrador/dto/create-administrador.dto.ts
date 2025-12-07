import { IsString } from "class-validator";

export class CreateAdministradorDto {
    @IsString()
    nombre: string;
    @IsString()
    email: string;
}
