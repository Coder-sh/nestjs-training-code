import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'guang',
      cookie: { maxAge: 100000 },
    }),
  );
  await app.listen(3000);
}
bootstrap();
