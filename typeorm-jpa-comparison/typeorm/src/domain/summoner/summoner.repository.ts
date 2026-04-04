import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Summoner } from './summoner.entity';

@Injectable()
export class SummonerRepository {
  constructor(
    @InjectRepository(Summoner)
    private readonly repository: Repository<Summoner>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  findByName(name: string) {
    return this.repository.findOneBy({ name });
  }

  findActiveHighLevel(minLevel: number) {
    return this.repository
      .createQueryBuilder('summoner')
      .where('summoner.tagLine IS NOT NULL')
      .andWhere('summoner.summonerLevel >= :minLevel', { minLevel })
      .getMany();
  }

  findByNameContainingNative(keyword: string): Promise<Summoner[]> {
    return this.repository.query(
      `SELECT * FROM summoners WHERE name LIKE $1`,
      [`%${keyword}%`]
    );
  }
}
