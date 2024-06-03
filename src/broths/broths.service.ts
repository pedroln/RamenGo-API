import { Injectable } from '@nestjs/common';
import { Broth } from './entities/broth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrothsService {

  constructor(
    @InjectRepository(Broth) private readonly brothRepository: Repository<Broth>,
  ) {}

  async findAllBroth(): Promise<Broth[]> {
    return await this.brothRepository.find();
  }

  async findOne(id: number): Promise<Broth> {
    return await this.brothRepository.findOne({ where: { id } })
  }

}


