import {
  BeforeApplicationShutdown,
  Controller,
  Get,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly appService: AppService) {}
  onModuleInit() {
    console.log('AppController onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AppController onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('AppController onModuleDestroy');
  }

  beforeApplicationShutdown(signal) {
    console.log('AppController beforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('AppController onApplicationShutdown', signal);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
