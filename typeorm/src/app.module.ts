import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalConfigModule } from './global/config/global-config.module';
import { DatabaseConfigModule } from './global/config/database/database-config.module';
import { DatabaseConfigService } from './global/config/database/database-config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GlobalConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      inject: [DatabaseConfigService],
      useFactory: (dbConfig: DatabaseConfigService) => ({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [__dirname + '/domain/**/*.entity{.ts,.js}'],
        synchronize: true, // JPA의 ddl-auto: update                                              │
        logging: true,     // JPA의 show-sql: true  
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
