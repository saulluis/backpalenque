import { Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrador } from './entities/administrador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdministradorService {
  @InjectRepository(Administrador)
  private readonly administradorRepository: Repository<Administrador>;
  async create(createAdministradorDto: CreateAdministradorDto) {
    const administrador = this.administradorRepository.create(createAdministradorDto);
    return await this.administradorRepository.save(administrador);
  }

  async findAll() {
    return await this.administradorRepository.find();
  }

  async findOne(id: number) {
    return await this.administradorRepository.findOne({where: { id }});
  }

  async update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    await this.administradorRepository.update(id, updateAdministradorDto);
    return await this.administradorRepository.findOne({where: { id }});
  }

  async remove(id: number) {
    await this.administradorRepository.delete(id);
    return `This action removes a #${id} administrador`;
  }
}
