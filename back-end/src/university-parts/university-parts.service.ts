import { Injectable } from '@nestjs/common';
import { CreateUniversityPartDto } from './dto/create-university-part.dto';
import { UpdateUniversityPartDto } from './dto/update-university-part.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UniversityPartsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUniversityPartDto: CreateUniversityPartDto) {
    return 'This action adds a new universityPart';
  }

  async findAll(id:number) {
    return await this.prisma.universityPart.findMany({where:{
      universityId:id
    }});
  }

  findOne(id: number) {
    return `This action returns a #${id} universityPart`;
  }

  update(id: number, updateUniversityPartDto: UpdateUniversityPartDto) {
    return `This action updates a #${id} universityPart`;
  }

  remove(id: number) {
    return `This action removes a #${id} universityPart`;
  }
}
