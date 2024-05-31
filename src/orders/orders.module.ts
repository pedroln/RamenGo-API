import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { BrothsModule } from 'src/broths/broths.module';
import { ProteinsModule } from 'src/proteins/proteins.module';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Order]), BrothsModule, ProteinsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
