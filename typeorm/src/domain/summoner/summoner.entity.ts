import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from '../../global/common/base.entity';

@Entity('summoners')
export class Summoner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  name: string;

  @Column({ type: 'int', default: 1, nullable: false })
  summonerLevel: number;

  @Column({ type: 'int', nullable: true })
  profileIconId: number | null;

  @Column({ type: 'varchar', length: 10, nullable: true })
  tagLine: string | null;
}
