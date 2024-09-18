import { Injectable } from '@nestjs/common';
import { CreateMemeberDto } from './dto/create-member.dto';
import { UpdateMemeberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateMemeberDto) {
    return await this.prisma.member.create({
      data: {
        ...dto,
        dob: new Date(dto.dob).toISOString(),
      },
    });
  }

  async findAll(filters: any) {
    let aux = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (['universityId', 'universityPartId'].includes(key)) {
        aux[key] = +value;
      }
    });
    return await this.prisma.member.findMany({
      where: aux,
      include: {
        University: true,
        UniversityPart: true,
        EducationLevel: true,
        Grade: true,
        Government: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.member.findUniqueOrThrow({
      where: { cin: id },
      include: {
        University: true,
        UniversityPart: true,
        EducationLevel: true,
        Grade: true,
        Government: true,
      },
    });
  }

  update(id: number, updateMemeberDto: UpdateMemeberDto) {
    return `This action updates a #${id} memeber`;
  }

  remove(id: number) {
    return `This action removes a #${id} memeber`;
  }
}
