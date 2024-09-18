import { Test, TestingModule } from '@nestjs/testing';
import { GovernmentsService } from './governments.service';

describe('GovernmentsService', () => {
  let service: GovernmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GovernmentsService],
    }).compile();

    service = module.get<GovernmentsService>(GovernmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
