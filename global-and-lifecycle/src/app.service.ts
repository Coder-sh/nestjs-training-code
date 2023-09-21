import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('AppService onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AppService onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('AppService onModuleDestroy');
  }

  beforeApplicationShutdown(signal: any) {
    console.log('AppService beforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('AppService onApplicationShutdown', signal);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
