import { Exercise } from 'src/exercises/exercise.entity';
import { TrainingProgramm } from 'src/training_programms/training_programm.entity';
import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Workout {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  weekDay: number;
}
