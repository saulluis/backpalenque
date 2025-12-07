/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateApartadoDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
   cantidad: number;

  @IsNumber()
  @IsNotEmpty()
   usuarioID: number;

  @IsNumber()
  @IsNotEmpty()
   bebidasID: number;
}
