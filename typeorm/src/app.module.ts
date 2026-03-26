import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'orm_compare',
      entities: [],
      synchronize: true, // JPA의 ddl-auto: update와 동일
      logging: true,     // JPA의 show-sql: true와 동일
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
