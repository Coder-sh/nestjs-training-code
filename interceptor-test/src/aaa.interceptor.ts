import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  constructor(private readonly appService: AppService) {}

  // @Inject(AppService)
  // private readonly appService: AppService;

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(this.appService.getHello());

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After...${Date.now() - now}ms`)));
  }
}
