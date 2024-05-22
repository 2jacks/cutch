import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainingProgramm } from './training_programm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingProgramm])]
})
export class TrainingProgrammsModule {}
