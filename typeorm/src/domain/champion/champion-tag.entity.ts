import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../global/common/base.entity';
import { Champion } from './champion.entity';

@Entity('tags')
export class ChampionTag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true, nullable: false })
  name: string;

  @ManyToMany(() => Champion, (champion) => champion.tags)
  champions: Champion[];
}
