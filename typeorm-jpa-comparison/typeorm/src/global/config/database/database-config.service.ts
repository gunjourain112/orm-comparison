import { Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import databaseConfig from './configuration';

@Injectable()
export class DatabaseConfigService {
  constructor(
    @Inject(databaseConfig.KEY)
    private readonly config: ConfigType<typeof databaseConfig>,
  ) {}

  get host(): string {
    return this.config.host;
  }

  get port(): number {
    return this.config.port;
  }

  get username(): string {
    return this.config.username;
  }

  get password(): string {
    return this.config.password;
  }

  get database(): string {
    return this.config.database;
  }
}
