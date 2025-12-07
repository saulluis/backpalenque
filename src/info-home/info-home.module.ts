import { Module } from '@nestjs/common';
import { InfoHomeService } from './info-home.service';
import { InfoHomeController } from './info-home.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoHome } from './entities/info-home.entity';

@Module({
  controllers: [InfoHomeController],
  providers: [InfoHomeService],
  imports: [
    TypeOrmModule.forFeature([InfoHome])
  ],
})
export class InfoHomeModule {}
