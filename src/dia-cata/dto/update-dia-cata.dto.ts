import { PartialType } from '@nestjs/mapped-types';
import { CreateDiaCataDto } from './create-dia-cata.dto';

export class UpdateDiaCataDto extends PartialType(CreateDiaCataDto) {}
