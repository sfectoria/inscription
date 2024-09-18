// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({optionsSuccessStatus:200,credentials:true, });
  app.useStaticAssets(join(__dirname, '../../../front-end', 'build'))
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('UGTE')
    .setDescription('The UGTE API description')
    .addApiKey({ type: 'apiKey', name: 'Authorization', in: 'header' },'apiKey')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-ugte-nizar', app, document);

  await app.listen(3001);
}
bootstrap();