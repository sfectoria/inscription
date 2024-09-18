import { Test, TestingModule } from '@nestjs/testing';
import { MemebersController } from './members.controller';
import { MemebersService } from './members.service';

describe('MemebersController', () => {
  let controller: MemebersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemebersController],
      providers: [MemebersService],
    }).compile();

    controller = module.get<MemebersController>(MemebersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
