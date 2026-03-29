import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../global/common/base.entity';
import { MatchParticipant } from './match-participant.entity';

@Entity('matches')
export class Match extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  matchId: string;

  @OneToMany(() => MatchParticipant, (participant) => participant.match, { cascade: true })
  participants: MatchParticipant[];
}
