import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa.module';

@Module({
  imports: [AaaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'Guang',
      useFactory() {
        return {
          name: 'guang',
        };
      },
    },
  ],
})
export class AppModule {}
