import { Injectable } from '@nestjs/common';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EducationLevelsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createEducationLevelDto: CreateEducationLevelDto) {
    return 'This action adds a new educationLevel';
  }

  async findAll() {
    return await this.prisma.educationLevel.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} educationLevel`;
  }

  update(id: number, updateEducationLevelDto: UpdateEducationLevelDto) {
    return `This action updates a #${id} educationLevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} educationLevel`;
  }
}
