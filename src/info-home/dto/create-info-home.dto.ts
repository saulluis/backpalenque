import { IsString, IsNumber, IsUrl, isString } from 'class-validator';

export class CreateInfoHomeDto {
  @IsString()
  historia: string;

  @IsString()
  vision: string;

  @IsString()
  imageUrl: string;

  @IsString()
  maestroMezcal: string;

  @IsString()
  mision: string;

  @IsString()
  valores: string;

  @IsString()
  normasProduccion: string;

  @IsNumber()
  numeroContacto: number;

  @IsString()
  ubicacion: string;
}
