import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Set {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  num: number;

  @Column()
  reps: number;

  @Column()
  weight: number;

  @Column()
  rest: number;
}
