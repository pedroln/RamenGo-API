import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
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
    private proteinsService: ProteinsService,
  ) {}

  async create(createOrderDto: CreateOrderDto) : Promise<Order> {
    if (createOrderDto.brothId && createOrderDto.proteinId){
      const newOrder = new Order ();
      let selectedBroth = await this.brothsService.findOne(createOrderDto.brothId)
      let selectedProtein = await this.proteinsService.findOne(createOrderDto.proteinId)
      if (selectedBroth && selectedProtein){
        newOrder.description = selectedBroth.name + " " + "and" + " " +  selectedProtein.name + " " + "ramen"
        newOrder.image = "https://tech.redventures.com.br/icons/ramen/ramenChasu.png"
        return await this.orderRepository.save(newOrder)
      }
      else{
        throw new HttpException({error: 'could not place order'}, HttpStatus.INTERNAL_SERVER_ERROR)
      }
    }
    else{
      throw new HttpException({error: 'both brothId and proteinId are required'}, HttpStatus.BAD_REQUEST)
    }
  }
}
