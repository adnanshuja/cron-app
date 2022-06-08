import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { entities, modules } from './modules';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'cron_db',
    entities: [...entities],
    synchronize: true,
  }), 
  ScheduleModule.forRoot(),
  ...modules], 
  controllers: [],
  providers: [],
})
export class AppModule { }
