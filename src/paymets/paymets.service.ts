import { Injectable } from '@nestjs/common';
import { CreatePaymetDto } from './dto/create-paymet.dto';
import { UpdatePaymetDto } from './dto/update-paymet.dto';

@Injectable()
export class PaymetsService {
  create(createPaymetDto: CreatePaymetDto) {
    return 'This action adds a new paymet';
  }

  findAll() {
    return `This action returns all paymets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymet`;
  }

  update(id: number, updatePaymetDto: UpdatePaymetDto) {
    return `This action updates a #${id} paymet`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymet`;
  }
}
