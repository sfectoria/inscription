import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { GovernmentsModule } from './governments/governments.module';
import { GradesModule } from './grades/grades.module';
import { UniversitiesModule } from './universities/universities.module';
import { UniversitiePartsModule } from './universitie-parts/universitie-parts.module';
import { EducationLevelsModule } from './education-levels/education-levels.module';
import { UniversityPartsModule } from './university-parts/university-parts.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';


@Module({
  imports: [
    UsersModule,
    AuthModule,
    MailModule,
    PrismaModule,
    MembersModule,
    GovernmentsModule,
    GradesModule,
    UniversitiesModule,
    UniversitiePartsModule,
    EducationLevelsModule,
    UniversityPartsModule,
    ServeStaticModule.forRoot({
      serveStaticOptions: {
        maxAge: 604800, // one week
        cacheControl: false,
        etag: false,
      },
      rootPath: join(__dirname, '../../../front-end', 'build'),
      // serveRoot: '/back-office',
      // renderPath: '/back-office',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
