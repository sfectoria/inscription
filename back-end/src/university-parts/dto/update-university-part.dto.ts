import { PartialType } from '@nestjs/swagger';
import { CreateUniversityPartDto } from './create-university-part.dto';

export class UpdateUniversityPartDto extends PartialType(CreateUniversityPartDto) {}
