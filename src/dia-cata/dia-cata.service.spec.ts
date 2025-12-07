import { Test, TestingModule } from '@nestjs/testing';
import { DiaCataService } from './dia-cata.service';

describe('DiaCataService', () => {
  let service: DiaCataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiaCataService],
    }).compile();

    service = module.get<DiaCataService>(DiaCataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
