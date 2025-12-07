import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  @InjectRepository(Categoria)
  private readonly categoriaRepository: Repository<Categoria>;
  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(categoria);
  }

  async findAll() {
    return await this.categoriaRepository.find();
  }

  async findOne(id: number) {
    return await this.categoriaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.categoriaRepository.update(id, updateCategoriaDto);
    return await this.categoriaRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.categoriaRepository.delete(id);
    return `This action removes a #${id} categoria`;
  }
}
