import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './MyLogger';
import { MyLogger2 } from './MyLogger2';
import { MyLogger3 } from './MyLogger3';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
    // logger: ['warn', 'error'],
    // logger: new MyLogger2(),
    bufferLogs: true,
  });
  app.useLogger(app.get(MyLogger3));
  await app.listen(3000);
}
bootstrap();
