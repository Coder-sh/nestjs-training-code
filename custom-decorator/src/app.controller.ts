import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  Headers,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders, MyQuery } from './my.decorator';
import { Ddd } from './ddd.decorator';

@Ddd('eee', 'guang')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', ['admin'])
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('hello2', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello4')
  getHello4(@Ccc() c) {
    return c;
  }

  @Get('hello5')
  getHello5(
    @Headers('Accept') headers1: string,
    @MyHeaders('Accept') headers2: string,
  ) {
    console.log('header1', headers1);
    console.log('header2', headers2);
  }

  @Get('hello6')
  getHello6(
    @Query('aaa', ParseIntPipe) aaa: string,
    @MyQuery('bbb', ParseIntPipe) bbb: string,
  ) {
    console.log('aaa', aaa + 1);
    console.log('bbb', bbb + 1);
  }
}
