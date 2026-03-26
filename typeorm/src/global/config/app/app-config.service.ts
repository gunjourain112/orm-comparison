import { Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import appConfig from './configuration';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly config: ConfigType<typeof appConfig>,
  ) {}

  get port(): number {
    return this.config.port;
  }
}
