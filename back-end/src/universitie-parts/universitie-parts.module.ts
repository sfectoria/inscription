import { Module } from '@nestjs/common';
import { UniversitiePartsService } from './universitie-parts.service';
import { UniversitiePartsController } from './universitie-parts.controller';

@Module({
  controllers: [UniversitiePartsController],
  providers: [UniversitiePartsService]
})
export class UniversitiePartsModule {}
