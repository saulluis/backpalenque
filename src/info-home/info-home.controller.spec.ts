import { Test, TestingModule } from '@nestjs/testing';
import { InfoHomeController } from './info-home.controller';
import { InfoHomeService } from './info-home.service';

describe('InfoHomeController', () => {
  let controller: InfoHomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoHomeController],
      providers: [InfoHomeService],
    }).compile();

    controller = module.get<InfoHomeController>(InfoHomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
