import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { AaaInterceptor } from './aaa.interceptor';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AaaInterceptor)
  @UseGuards(AaaGuard)
  @SetMetadata('roles', ['admin'])
  getHello(): string {
    return this.appService.getHello();
  }
}
