import { Controller, Post, Body,UseGuards } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

import { ApiKeyGuard } from 'src/auth/api-key-auth.guard';

@Controller('order')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}


  @Post()
  @UseGuards(ApiKeyGuard)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

}
