import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { BrothsService } from '../broths/broths.service'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProteinsService } from 'src/proteins/proteins.service';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    private brothsService: BrothsService,
    private proteinsService: ProteinsService
  ) {}

  async create(createOrderDto: CreateOrderDto) : Promise<Order> {
    let selectedBroth = await this.brothsService.findOne(createOrderDto.BrothId)
    let selectedProtein = await this.proteinsService.findOne(createOrderDto.Proteinid)
    if (selectedBroth && selectedProtein){
      const newOrder = new Order ();
      newOrder.description = selectedBroth.name + " " + "and" + " " +  selectedProtein.name + " " + "ramen"
      newOrder.image = "https://tech.redventures.com.br/icons/ramen/ramenChasu.png"
      return await this.orderRepository.save(newOrder)
    }
  }

}
