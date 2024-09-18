import { Module } from '@nestjs/common';
import { UniversityPartsService } from './university-parts.service';
import { UniversityPartsController } from './university-parts.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UniversityPartsController],
  providers: [UniversityPartsService,PrismaService]
})
export class UniversityPartsModule {}
