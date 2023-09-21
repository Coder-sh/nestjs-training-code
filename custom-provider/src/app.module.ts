import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'app_service',
      useClass: AppService,
    },
    {
      provide: 'person',
      useValue: {
        name: 'person',
        age: 18,
      },
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'person2',
          age: 19,
        };
      },
    },
    {
      provide: 'person3',
      useFactory(
        person: { name: string; age: number },
        appService: AppService,
      ) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },
    {
      provide: 'person4',
      useExisting: 'person2',
    },
    {
      provide: 'person5',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 5000);
        });
        return {
          name: 'person5',
          desc: 'aaaaa',
        };
      },
    },
  ],
})
export class AppModule {}
