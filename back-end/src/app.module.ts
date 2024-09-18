import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { GovernmentsModule } from './governments/governments.module';

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
