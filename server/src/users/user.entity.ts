import { Exercise } from 'src/exercises/exercise.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectId,
  ObjectIdColumn
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  avatar: string;
}
