/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { DiaCata } from 'src/dia-cata/entities/dia-cata.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(DiaCata)
    private readonly diaCataRepository: Repository<DiaCata>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const { Idcata, ...rest } = createUsuarioDto;

    const diaCata = await this.diaCataRepository.findOneBy({ id: Idcata });
    if (!diaCata) throw new NotFoundException('Día de cata no encontrado');

    const usuario = this.usuarioRepository.create({
      ...rest,
      diaCata,
    });

    return await this.usuarioRepository.save(usuario);
  }

  async findAll() {
    return await this.usuarioRepository.find({
      relations: ['diaCata'],
    });
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOne({
      where: { id },
      relations: ['diaCata'],
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const { Idcata, ...rest } = updateUsuarioDto;

    Object.assign(usuario, rest);

    if (Idcata) {
      const diaCata = await this.diaCataRepository.findOneBy({ id: Idcata });
      if (!diaCata) throw new NotFoundException('Día de cata no encontrado');
      usuario.diaCata = diaCata;
    }

    return await this.usuarioRepository.save(usuario);
  }

  async remove(id: number) {
    return await this.usuarioRepository.delete(id);
  }

  async findByVisita(visitaId: number) {
    return await this.usuarioRepository.find({
      where: { diaCata: { id: visitaId } },
      relations: ['diaCata'],
    });
  }
}
