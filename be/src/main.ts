import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Cypress')
    .setDescription('API for Demo Cypress')
    .setVersion('1.0')
    .addTag('hello')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    'XYZ',)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
