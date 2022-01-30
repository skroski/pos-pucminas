import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('TCC com NX')
    .setDescription('TCC com NX')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('', app, document)

  const globalPrefix = '';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  
}

bootstrap();
