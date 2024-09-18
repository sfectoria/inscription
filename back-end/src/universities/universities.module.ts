import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UniversitiesController],
  providers: [UniversitiesService,PrismaService]
})
export class UniversitiesModule {}
