import { Test, TestingModule } from '@nestjs/testing';
import { PaymetsController } from './paymets.controller';
import { PaymetsService } from './paymets.service';

describe('PaymetsController', () => {
  let controller: PaymetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymetsController],
      providers: [PaymetsService],
    }).compile();

    controller = module.get<PaymetsController>(PaymetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
