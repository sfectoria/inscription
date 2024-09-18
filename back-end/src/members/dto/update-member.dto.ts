import { PartialType } from '@nestjs/swagger';
import { CreateMemeberDto } from './create-member.dto';

export class UpdateMemeberDto extends PartialType(CreateMemeberDto) {}
