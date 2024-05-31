import { Module } from '@nestjs/common';
import { BrothsService } from './broths.service';
import { BrothsController } from './broths.controller';
import { Broth } from './entities/broth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Broth])],
  controllers: [BrothsController],
  providers: [BrothsService],
  exports: [BrothsService]
})
export class BrothsModule {}
