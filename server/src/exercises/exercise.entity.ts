import { User } from 'src/users/user.entity';
import { Muscle } from 'src/muscles/muscle.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  ObjectId
} from 'typeorm';

@Entity()
export class Exercise {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon: string;
}
