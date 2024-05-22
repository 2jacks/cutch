import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Muscle } from './muscle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Muscle])]
})
export class MusclesModule {}
