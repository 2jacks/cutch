import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersService } from './muscle.service';
// import { UsersController } from './muscle.controller';
import { Muscle } from './muscle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Muscle])]
  // providers: [UsersService],
  // controllers: [UsersController]
})
export class MusclesModule {}
