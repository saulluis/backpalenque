import { Module } from '@nestjs/common';
import { DiaCataService } from './dia-cata.service';
import { DiaCataController } from './dia-cata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaCata } from './entities/dia-cata.entity';

@Module({
  controllers: [DiaCataController],
  providers: [DiaCataService],
  imports: [
     TypeOrmModule.forFeature([DiaCata])
  ],
})
export class DiaCataModule {}
