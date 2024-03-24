import { Muscle } from 'src/muscle/muscle.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Muscle)
  @JoinTable()
  muscles: number[];

  @Column()
  icon: string;
}
