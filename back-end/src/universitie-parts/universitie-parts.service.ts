import { Injectable } from '@nestjs/common';
import { CreateUniversitiePartDto } from './dto/create-universitie-part.dto';
import { UpdateUniversitiePartDto } from './dto/update-universitie-part.dto';

@Injectable()
export class UniversitiePartsService {
  create(createUniversitiePartDto: CreateUniversitiePartDto) {
    return 'This action adds a new universitiePart';
  }

  findAll() {
    return `This action returns all universitieParts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} universitiePart`;
  }

  update(id: number, updateUniversitiePartDto: UpdateUniversitiePartDto) {
    return `This action updates a #${id} universitiePart`;
  }

  remove(id: number) {
    return `This action removes a #${id} universitiePart`;
  }
}
