import { Injectable } from '@nestjs/common';
import { CreateInfoHomeDto } from './dto/create-info-home.dto';
import { UpdateInfoHomeDto } from './dto/update-info-home.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoHome } from './entities/info-home.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InfoHomeService {
  @InjectRepository(InfoHome)
  private readonly infoHomeRepository: Repository<InfoHome>;

  async create(createInfoHomeDto: CreateInfoHomeDto) {
    const infoHome = this.infoHomeRepository.create(createInfoHomeDto);
    return await this.infoHomeRepository.save(infoHome);
  }

  async findAll() {
    return await this.infoHomeRepository.find();
  }

  async findOne(id: number) {
    return await this.infoHomeRepository.findOne({where: { id }});
  }

  async update(id: number, updateInfoHomeDto: UpdateInfoHomeDto) {
    await this.infoHomeRepository.update(id, updateInfoHomeDto);
    return await this.infoHomeRepository.findOne({where: { id }});
  }

  async remove(id: number) {
    await this.infoHomeRepository.delete(id);
    return `This action removes a #${id} infoHome`;
  }
}
