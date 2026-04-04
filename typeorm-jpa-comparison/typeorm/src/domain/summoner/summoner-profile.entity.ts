import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../global/common/base.entity';
import { Summoner } from './summoner.entity';

@Entity('summoner_profiles')
export class SummonerProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Summoner, (summoner) => summoner.profile, { nullable: false })
  @JoinColumn({ name: 'summoner_id' })
  summoner: Summoner;

  @Column({ type: 'varchar', length: 20, nullable: true })
  tier: string | null;

  @Column({ type: 'varchar', length: 10, nullable: true })
  rank: string | null;

  @Column({ type: 'int', default: 0, nullable: false })
  leaguePoints: number;
}
