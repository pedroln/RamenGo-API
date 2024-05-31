import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { BrothsModule } from './broths/broths.module';
import { ProteinsModule } from './proteins/proteins.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot(typeOrmConfig), BrothsModule, ProteinsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
