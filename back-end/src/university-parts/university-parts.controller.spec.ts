import { Test, TestingModule } from '@nestjs/testing';
import { UniversityPartsController } from './university-parts.controller';
import { UniversityPartsService } from './university-parts.service';

describe('UniversityPartsController', () => {
  let controller: UniversityPartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversityPartsController],
      providers: [UniversityPartsService],
    }).compile();

    controller = module.get<UniversityPartsController>(UniversityPartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
