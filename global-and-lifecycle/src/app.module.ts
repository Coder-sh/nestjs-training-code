import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

@Module({
  imports: [AaaModule, BbbModule, CccModule, DddModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('AppModule onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AppModule onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('AppModule onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('AppModule beforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('AppModule onApplicationShutdown', signal);
  }
}
