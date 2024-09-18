import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemeberDto } from './dto/create-member.dto';
import { UpdateMemeberDto } from './dto/update-member.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('members')
@Controller('members')
export class MembersController {
  constructor(private readonly memebersService: MembersService) {}

  @Post()
  create(@Body() createMemeberDto: CreateMemeberDto) {
    return this.memebersService.create(createMemeberDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() filters: any) {
    return this.memebersService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memebersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemeberDto: UpdateMemeberDto) {
    return this.memebersService.update(+id, updateMemeberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memebersService.remove(+id);
  }
}
