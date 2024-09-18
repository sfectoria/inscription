import { PartialType } from '@nestjs/swagger';
import { CreateUniversitiePartDto } from './create-universitie-part.dto';

export class UpdateUniversitiePartDto extends PartialType(CreateUniversitiePartDto) {}
