import { Controller, Get, Param  } from '@nestjs/common';
import { ProteinsService } from './proteins.service';


@Controller('proteins')
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Get()
  findAll() {
    return this.proteinsService.findAllProtein();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proteinsService.findOne(+id);
  }

}
