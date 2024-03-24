import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersService } from './muscle.service';
// import { UsersController } from './muscle.controller';
import { Exercise } from './exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise])]
  // providers: [UsersService],
  // controllers: [UsersController]
})
export class ExercisesModule {}
