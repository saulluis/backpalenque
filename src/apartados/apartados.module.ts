import { Module } from '@nestjs/common';
import { ApartadosService } from './apartados.service';
import { ApartadosController } from './apartados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartado } from './entities/apartado.entity';

@Module({
  controllers: [ApartadosController],
  providers: [ApartadosService],
  imports: [TypeOrmModule.forFeature([Apartado])],
})
export class ApartadosModule {}
