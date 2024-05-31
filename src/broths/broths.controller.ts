import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BrothsService } from './broths.service';
import { CreateBrothDto } from './dto/create-broth.dto';
import { UpdateBrothDto } from './dto/update-broth.dto';
import { ApiKeyGuard } from 'src/auth/api-key-auth.guard';

@Controller('broths')
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Get()
  @UseGuards(ApiKeyGuard)
  findAll() {
    return this.brothsService.findAllBroth();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brothsService.findOne(+id);
  }

}