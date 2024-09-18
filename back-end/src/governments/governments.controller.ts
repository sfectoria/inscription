import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GovernmentsService } from './governments.service';
import { CreateGovernmentDto } from './dto/create-government.dto';
import { UpdateGovernmentDto } from './dto/update-government.dto';

@Controller('governments')
export class GovernmentsController {
  constructor(private readonly governmentsService: GovernmentsService) {}

  @Post()
  create(@Body() createGovernmentDto: CreateGovernmentDto) {
    return this.governmentsService.create(createGovernmentDto);
  }

  @Get()
  findAll() {
    return this.governmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.governmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGovernmentDto: UpdateGovernmentDto) {
    return this.governmentsService.update(+id, updateGovernmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.governmentsService.remove(+id);
  }
}
