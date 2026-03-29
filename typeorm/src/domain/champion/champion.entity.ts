import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../../global/common/base.entity';
import { ChampionTag } from './champion-tag.entity';

@Entity('champions')
export class Champion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  name: string;

  @ManyToMany(() => ChampionTag, (tag) => tag.champions)
  @JoinTable({
    name: 'champion_tags',
    joinColumn: { name: 'champion_id' },
    inverseJoinColumn: { name: 'tag_id' },
  })
  tags: ChampionTag[];
}
