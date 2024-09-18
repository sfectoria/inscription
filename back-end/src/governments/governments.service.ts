import { Injectable } from '@nestjs/common';
import { CreateGovernmentDto } from './dto/create-government.dto';
import { UpdateGovernmentDto } from './dto/update-government.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GovernmentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGovernmentDto: CreateGovernmentDto) {
    return 'This action adds a new government';
  }

  async findAll() {
    return await this.prisma.government.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} government`;
  }

  update(id: number, updateGovernmentDto: UpdateGovernmentDto) {
    return `This action updates a #${id} government`;
  }

  remove(id: number) {
    return `This action removes a #${id} government`;
  }
}
