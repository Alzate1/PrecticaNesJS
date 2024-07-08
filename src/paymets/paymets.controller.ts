import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymetsService } from './paymets.service';
import { CreatePaymetDto } from './dto/create-paymet.dto';
import { UpdatePaymetDto } from './dto/update-paymet.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('paymets')
@ApiTags('paymets')
export class PaymetsController {
  constructor(private readonly paymetsService: PaymetsService) {}

  @Post()
  create(@Body() createPaymetDto: CreatePaymetDto) {
    return this.paymetsService.create(createPaymetDto);
  }

  @Get()
  findAll() {
    return this.paymetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymetDto: UpdatePaymetDto) {
    return this.paymetsService.update(+id, updatePaymetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymetsService.remove(+id);
  }
}
