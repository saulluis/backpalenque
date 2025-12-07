import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { TypeORMError } from 'typeorm';
import { Administrador } from './entities/administrador.entity';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AdministradorController],
  providers: [AdministradorService],
  imports: [TypeOrmModule.forFeature([Administrador])],
})
export class AdministradorModule {}
