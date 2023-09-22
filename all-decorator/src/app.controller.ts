import {
  Body,
  Controller,
  Delete,
  Get,
  Head,
  HttpException,
  HttpStatus,
  Inject,
  Optional,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Headers,
  SetMetadata,
  UseFilters,
  UseGuards,
  UseInterceptors,
  Ip,
  Session,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { AaaGuard } from './aaa.guard';
import { AaaInterceptor } from './aaa.interceptor';
import { AaaDto } from './aaa.dto';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  // constructor(@Optional() private readonly appService: AppService) {}
  @Inject(AppService)
  private readonly appService: AppService;

  @Optional()
  @Inject('Guang')
  private readonly guang: Record<string, any>;

  @Get()
  @UseFilters(AaaFilter)
  @UseGuards(AaaGuard)
  @UseInterceptors(AaaInterceptor)
  @SetMetadata('roles', ['admin'])
  // @UsePipes(ParseIntPipe)
  getHello(): string {
    console.log(this.guang);
    throw new HttpException('xxxx', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }

  @Get('/xxx/:aaa')
  getHello2(
    @Param('aaa', ParseIntPipe) aaa: number,
    @Query('bbb', ParseBoolPipe) bbb: boolean,
  ) {
    console.log(typeof aaa, typeof bbb);
    console.log(aaa, bbb);
    return 'hello';
  }

  @Post('/bbb')
  getHello3(@Body() aaa: AaaDto) {
    console.log(aaa);
    return 'hello';
  }

  @Put()
  getHello4() {
    return 'hello';
  }

  @Delete()
  getHello5() {
    return 'hello';
  }

  @Patch()
  getHello6() {
    return 'hello';
  }

  @Head()
  getHello7() {
    return 'hello';
  }

  @Get('/ccc')
  header(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept, headers);
  }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip);
  }

  @Get('/session')
  session(@Session() session) {
    if (!session.count) {
      session.count = 0;
    }
    session.count = session.count + 1;
    return session.count;
  }
}
