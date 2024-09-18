import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversityPartsService } from './university-parts.service';
import { CreateUniversityPartDto } from './dto/create-university-part.dto';
import { UpdateUniversityPartDto } from './dto/update-university-part.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('University Parts')
@Controller('university-parts')
export class UniversityPartsController {
  constructor(private readonly universityPartsService: UniversityPartsService) {}

  @Post()
  create(@Body() createUniversityPartDto: CreateUniversityPartDto) {
    return this.universityPartsService.create(createUniversityPartDto);
  }

  @Get(':universityId')
  findAll(@Param('universityId') universityId:string) {
    return this.universityPartsService.findAll(+universityId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universityPartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniversityPartDto: UpdateUniversityPartDto) {
    return this.universityPartsService.update(+id, updateUniversityPartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universityPartsService.remove(+id);
  }
}
