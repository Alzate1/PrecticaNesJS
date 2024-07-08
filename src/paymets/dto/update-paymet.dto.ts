import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymetDto } from './create-paymet.dto';

export class UpdatePaymetDto extends PartialType(CreatePaymetDto) {}
