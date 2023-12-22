import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions, createClient } from 'redis';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      // @ts-ignore
      store: async () =>
        await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
          database: 2,
        }),
      ttl: 60,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379,
          },
          database: 2,
        });
        await client.connect();
        return client;
      },
    },
  ],
})
export class AppModule {}
