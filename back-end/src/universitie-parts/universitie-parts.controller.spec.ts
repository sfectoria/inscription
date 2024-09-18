import { Test, TestingModule } from '@nestjs/testing';
import { UniversitiePartsController } from './universitie-parts.controller';
import { UniversitiePartsService } from './universitie-parts.service';

describe('UniversitiePartsController', () => {
  let controller: UniversitiePartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversitiePartsController],
      providers: [UniversitiePartsService],
    }).compile();

    controller = module.get<UniversitiePartsController>(UniversitiePartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
