import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Summoner } from './summoner.entity';
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

  // 6-1: transaction() 콜백 방식
  async create(name: string): Promise<Summoner> {
    return this.dataSource.transaction(async (manager) => {
      const summoner = manager.create(Summoner, { name });
      return manager.save(summoner);
    });
  }

  // 6-2: QueryRunner — 수동 begin/commit/rollback
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
