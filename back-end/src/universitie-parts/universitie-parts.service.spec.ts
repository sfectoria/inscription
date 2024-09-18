import { Test, TestingModule } from '@nestjs/testing';
import { UniversitiePartsService } from './universitie-parts.service';

describe('UniversitiePartsService', () => {
  let service: UniversitiePartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversitiePartsService],
    }).compile();

    service = module.get<UniversitiePartsService>(UniversitiePartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
