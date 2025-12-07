import { Test, TestingModule } from '@nestjs/testing';
import { DiaCataController } from './dia-cata.controller';
import { DiaCataService } from './dia-cata.service';

describe('DiaCataController', () => {
  let controller: DiaCataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiaCataController],
      providers: [DiaCataService],
    }).compile();

    controller = module.get<DiaCataController>(DiaCataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
