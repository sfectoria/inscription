import { Module } from '@nestjs/common';
import { GovernmentsService } from './governments.service';
import { GovernmentsController } from './governments.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GovernmentsController],
  providers: [GovernmentsService,PrismaService]
})
export class GovernmentsModule {}
