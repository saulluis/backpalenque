import { Module } from '@nestjs/common';
import { BebidasService } from './bebidas.service';
import { BebidasController } from './bebidas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bebida } from './entities/bebida.entity';

@Module({
  controllers: [BebidasController],
  providers: [BebidasService],
  imports: [ TypeOrmModule.forFeature([Bebida])],
})
export class BebidasModule {}
