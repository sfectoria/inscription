import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class CreateMemeberDto {
  @ApiProperty()
  firstNameAr: string;

  @ApiProperty()
  lastNameAr: string;

  @ApiProperty()
  gender: Gender;
  @ApiProperty()
  dob: Date;
  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;
  @ApiProperty()
  governmentId: number;
}
