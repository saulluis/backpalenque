import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bebida } from './entities/bebida.entity';
import { CreateBebidaDto } from './dto/create-bebida.dto';
import { UpdateBebidaDto } from './dto/update-bebida.dto';

@Injectable()
export class BebidasService {
  constructor(
    @InjectRepository(Bebida)
    private readonly bebidaRepository: Repository<Bebida>,
  ) {}

 
  async create(createBebidaDto: CreateBebidaDto) {
    const bebida = this.bebidaRepository.create({
      ...createBebidaDto,
      categoria: { id: createBebidaDto.categoriaId }, // relación con categoría
    });
    return await this.bebidaRepository.save(bebida);
  }

 
  async findAll() {
    return await this.bebidaRepository.find({
      relations: ['categoria'], 
    });
  }

  async findOne(id: number) {
    const bebida = await this.bebidaRepository.findOne({
      where: { id },
      relations: ['categoria'],
    });

    if (!bebida) {
      throw new NotFoundException(`No se encontró la bebida con ID ${id}`);
    }

    return bebida;
  }

  async update(id: number, updateBebidaDto: UpdateBebidaDto) {
    const bebida = await this.bebidaRepository.findOne({ where: { id } });
    if (!bebida) {
      throw new NotFoundException(`No se encontró la bebida con ID ${id}`);
    }

    const updated = this.bebidaRepository.merge(bebida, {
      ...updateBebidaDto,
      categoria: updateBebidaDto.categoriaId
        ? { id: updateBebidaDto.categoriaId }
        : bebida.categoria,
    });

    return await this.bebidaRepository.save(updated);
  }

  
  async remove(id: number) {
    const bebida = await this.bebidaRepository.findOne({ where: { id } });
    if (!bebida) {
      throw new NotFoundException(`No se encontró la bebida con ID ${id}`);
    }

    await this.bebidaRepository.remove(bebida);
    return { message: `La bebida con ID ${id} fue eliminada correctamente.` };
  }

  async findByCategoria(categoriaId: number) {
    return await this.bebidaRepository.find({
      where: { categoria: { id: categoriaId } },
      relations: ['categoria'],
    });
  }
}