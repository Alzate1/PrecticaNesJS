import { Test, TestingModule } from '@nestjs/testing';
import { PaymetsService } from './paymets.service';

describe('PaymetsService', () => {
  let service: PaymetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymetsService],
    }).compile();

    service = module.get<PaymetsService>(PaymetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
