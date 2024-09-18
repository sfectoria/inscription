import { Test, TestingModule } from '@nestjs/testing';
import { GovernmentsController } from './governments.controller';
import { GovernmentsService } from './governments.service';

describe('GovernmentsController', () => {
  let controller: GovernmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GovernmentsController],
      providers: [GovernmentsService],
    }).compile();

    controller = module.get<GovernmentsController>(GovernmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
