import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post("create")
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradorService.create(createAdministradorDto);
  }

  @Get("findAll")
  findAll() {
    return this.administradorService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.administradorService.remove(+id);
  }
}
