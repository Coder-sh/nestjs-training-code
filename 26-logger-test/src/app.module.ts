import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLogger3 } from './MyLogger3';
import { LoggerModule } from './logger/logger.module';
import { AaaModule } from './aaa/aaa.module';
import { Logger2Module } from './logger2/logger2.module';

@Module({
  imports: [
    LoggerModule,
    AaaModule,
    Logger2Module.register({ xxx: 1, yyy: 2 }),
  ],
  controllers: [AppController],
  providers: [AppService, MyLogger3],
})
export class AppModule {}
