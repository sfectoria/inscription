import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class CreateMemeberDto {
  @ApiProperty()
  cin: string;
  @ApiProperty()
  firstNameAr: string;
  @ApiProperty()
  firstNameFr: string;
  @ApiProperty()
  lastNameAr: string;
  @ApiProperty()
  lastNameFr: string;
  @ApiProperty()
  gender: Gender;
  @ApiProperty()
  dob: Date;
  @ApiProperty()
  email: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  governmentId: number;
  @ApiProperty()
  gradeId: number;
  @ApiProperty()
  universityId: number;
  @ApiProperty()
  universityPartId: number;
  @ApiProperty()
  educationLevelId: number;
  @ApiProperty()
  speciality: string;
}
