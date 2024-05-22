import { Column, Entity, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class TrainingProgramm {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  duration: number;
}
