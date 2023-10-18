import { Global, Module } from '@nestjs/common';
import { MyLogger } from 'src/MyLogger';

@Global()
@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
