import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class MyLogger3 extends ConsoleLogger {
  @Inject(AppService)
  private readonly appService: AppService;

  log(message, context) {
    console.log(this.appService.getHello());
    console.log(`[${context}]---`, message);
    console.log('-----------------');
  }
}
