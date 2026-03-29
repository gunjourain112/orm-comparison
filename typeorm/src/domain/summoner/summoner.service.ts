import { Injectable } from '@nestjs/common';
import { SummonerRepository } from './summoner.repository';

@Injectable()
export class SummonerService {
  constructor(private readonly summonerRepository: SummonerRepository) {}

  getByName(name: string) {
    return this.summonerRepository.findByName(name);
  }

  getHighLevelWithTag(minLevel: number) {
    return this.summonerRepository.findActiveHighLevel(minLevel);
  }
}
