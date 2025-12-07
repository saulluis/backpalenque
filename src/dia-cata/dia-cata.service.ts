/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateDiaCataDto } from './dto/create-dia-cata.dto';
import { UpdateDiaCataDto } from './dto/update-dia-cata.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DiaCata } from './entities/dia-cata.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiaCataService {
  @InjectRepository(DiaCata)
  private readonly diaCataRepository: Repository<DiaCata>;
  async create(createDiaCataDto: CreateDiaCataDto) {
    const diaCata = this.diaCataRepository.create(createDiaCataDto);
    return await this.diaCataRepository.save(diaCata);
  }

  async findAll() {
    return await this.diaCataRepository.find();
  }

  async findOne(id: number) {
    return await this.diaCataRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDiaCataDto: UpdateDiaCataDto) {
    await this.diaCataRepository.update(id, updateDiaCataDto);
    return await this.diaCataRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.diaCataRepository.delete(id);
    return `This action removes a #${id} diaCata`;
  }
}
