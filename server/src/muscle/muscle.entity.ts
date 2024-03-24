import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Muscle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
