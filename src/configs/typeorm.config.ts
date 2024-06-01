import { DataSource, DataSourceOptions, } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SeederOptions } from 'typeorm-extension';
import * as dotenv from "dotenv";
dotenv.config({});

export const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/../**/*.entity.{js,ts}'],
  seeds: ['dist/src/configs/seeds/**/*.js'],
  synchronize: true,
};

export const dataSource = new DataSource(options)