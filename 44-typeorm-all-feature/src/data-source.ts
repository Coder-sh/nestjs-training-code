import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Aaa } from './entity/AAA';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'sh',
  database: 'practice',
  synchronize: true,
  logging: true,
  entities: [User, Aaa],
  // entities: ['./**/entity/*.ts'],
  migrations: [],
  subscribers: [],
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
