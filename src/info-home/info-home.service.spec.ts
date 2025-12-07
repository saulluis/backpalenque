import { Test, TestingModule } from '@nestjs/testing';
import { InfoHomeService } from './info-home.service';

describe('InfoHomeService', () => {
  let service: InfoHomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoHomeService],
    }).compile();

    service = module.get<InfoHomeService>(InfoHomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
