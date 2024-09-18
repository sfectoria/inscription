import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversitiePartsService } from './universitie-parts.service';
import { CreateUniversitiePartDto } from './dto/create-universitie-part.dto';
import { UpdateUniversitiePartDto } from './dto/update-universitie-part.dto';

@Controller('universitie-parts')
export class UniversitiePartsController {
  constructor(private readonly universitiePartsService: UniversitiePartsService) {}

  @Post()
  create(@Body() createUniversitiePartDto: CreateUniversitiePartDto) {
    return this.universitiePartsService.create(createUniversitiePartDto);
  }

  @Get()
  findAll() {
    return this.universitiePartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universitiePartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniversitiePartDto: UpdateUniversitiePartDto) {
    return this.universitiePartsService.update(+id, updateUniversitiePartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universitiePartsService.remove(+id);
  }
}
