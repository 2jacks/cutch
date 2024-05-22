import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Workout } from './workout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workout])]
})
export class WorkoutsModule {}
