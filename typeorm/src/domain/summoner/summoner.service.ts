import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Summoner } from './summoner.entity';
import { SummonerProfile } from './summoner-profile.entity';
import { SummonerRepository } from './summoner.repository';

@Injectable()
export class SummonerService {
  constructor(
    private readonly summonerRepository: SummonerRepository,
    private readonly dataSource: DataSource,
  ) {}

  getByName(name: string) {
    return this.summonerRepository.findByName(name);
  }

  getHighLevelWithTag(minLevel: number) {
    return this.summonerRepository.findActiveHighLevel(minLevel);
  }

  async create(name: string): Promise<Summoner> {
    return this.dataSource.transaction(async (manager) => {
      const summoner = manager.create(Summoner, { name });
      return manager.save(summoner);
    });
  }

  async getAllSummonerTiers(): Promise<string[]> {
    const summoners = await this.summonerRepository.findAll();
    return Promise.all(
      summoners.map(async (s) => {
        const profile = await this.dataSource
          .getRepository(SummonerProfile)
          .findOneBy({ summoner: { id: s.id } });
        return profile?.tier ?? 'unranked';
      })
    );
  }

  async getAllSummonerTiersWithRelations(): Promise<string[]> {
    const summoners = await this.dataSource.getRepository(Summoner).find({
      relations: { profile: true },
    });
    return summoners.map((s) => s.profile?.tier ?? 'unranked');
  }

  async createWithQueryRunner(name: string): Promise<Summoner> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const summoner = queryRunner.manager.create(Summoner, { name });
      const result = await queryRunner.manager.save(summoner);
      await queryRunner.commitTransaction();
      return result;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
