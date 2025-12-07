/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApartadosService } from './apartados.service';
import { CreateApartadoDto } from './dto/create-apartado.dto';
import { UpdateApartadoDto } from './dto/update-apartado.dto';

@Controller('apartados')
export class ApartadosController {
  constructor(private readonly apartadosService: ApartadosService) {}

  @Post()
  create(@Body() createApartadoDto: CreateApartadoDto) {
    return this.apartadosService.create(createApartadoDto);
  }

  @Get()
  findAll() {
    return this.apartadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartadosService.findOne(+id);
  }
  @Get('usuario/:id')
  findByUsuario(@Param('id') id: string) {
    return this.apartadosService.findByUsuario(+id);
  }
  @Get('bebida/:id')
  findByBebida(@Param('id') id: string) {
    return this.apartadosService.findByBebida(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApartadoDto: UpdateApartadoDto,
  ) {
    return this.apartadosService.update(+id, updateApartadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartadosService.remove(+id);
  }
  
}
