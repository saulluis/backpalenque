/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNumber,
  IsString,
} from 'class-validator';
export class CreateUsuarioDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  telefono: string;
  @IsNumber()
  status: number;
  @IsString()
  genero: string;
  @IsNumber()
  Idcata: number;
}
