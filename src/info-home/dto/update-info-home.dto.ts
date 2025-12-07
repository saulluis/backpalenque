import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoHomeDto } from './create-info-home.dto';

export class UpdateInfoHomeDto extends PartialType(CreateInfoHomeDto) {}
