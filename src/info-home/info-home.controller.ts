import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfoHomeService } from './info-home.service';
import { CreateInfoHomeDto } from './dto/create-info-home.dto';
import { UpdateInfoHomeDto } from './dto/update-info-home.dto';

@Controller('info-home')
export class InfoHomeController {
  constructor(private readonly infoHomeService: InfoHomeService) {}

  @Post("create")
  create(@Body() createInfoHomeDto: CreateInfoHomeDto) {
    return this.infoHomeService.create(createInfoHomeDto);
  }

  @Get("findAll")
  findAll() {
    return this.infoHomeService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.infoHomeService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateInfoHomeDto: UpdateInfoHomeDto) {
    return this.infoHomeService.update(+id, updateInfoHomeDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.infoHomeService.remove(+id);
  }
}
