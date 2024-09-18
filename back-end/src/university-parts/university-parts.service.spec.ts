import { Test, TestingModule } from '@nestjs/testing';
import { UniversityPartsService } from './university-parts.service';

describe('UniversityPartsService', () => {
  let service: UniversityPartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversityPartsService],
    }).compile();

    service = module.get<UniversityPartsService>(UniversityPartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
