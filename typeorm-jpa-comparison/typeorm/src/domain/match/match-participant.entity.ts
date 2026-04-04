import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../global/common/base.entity';
import { Match } from './match.entity';
import { Summoner } from '../summoner/summoner.entity';
import { Champion } from '../champion/champion.entity';

@Entity('match_participants')
export class MatchParticipant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Match, (match) => match.participants, { nullable: false })
  @JoinColumn({ name: 'match_id' })
  match: Match;

  @ManyToOne(() => Summoner, (summoner) => summoner.matchParticipants, { nullable: false })
  @JoinColumn({ name: 'summoner_id' })
  summoner: Summoner;

  @ManyToOne(() => Champion, { nullable: false })
  @JoinColumn({ name: 'champion_id' })
  champion: Champion;

  @Column({ type: 'int', default: 0, nullable: false })
  kills: number;

  @Column({ type: 'int', default: 0, nullable: false })
  deaths: number;

  @Column({ type: 'int', default: 0, nullable: false })
  assists: number;

  @Column({ type: 'boolean', default: false, nullable: false })
  won: boolean;

  @Column({ type: 'varchar', length: 20, nullable: true })
  position: string | null;
}
