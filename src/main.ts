import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aumentar el límite de tamaño para subidas de base64/imágenes
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // 👇 CONFIGURACIÓN CORS MEJORADA (A PRUEBA DE ERRORES)
  app.enableCors({
    origin: true, // Esto permite cualquier origen (Netlify, Localhost, Celular)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  
  // Usar el puerto de Railway o el 3000 por defecto
  await app.listen(process.env.PORT || 3000);
}
bootstrap();