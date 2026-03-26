import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './app/app-config.module';
import { DatabaseConfigModule } from './database/database-config.module';
import { configValidationSchema } from './config-validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    AppConfigModule,
    DatabaseConfigModule,
  ],
  exports: [AppConfigModule, DatabaseConfigModule],
})
export class GlobalConfigModule {}
