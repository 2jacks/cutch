import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Set as SetsEntity } from './set.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class SetsService {
  constructor(
    @InjectRepository(SetsEntity)
    private setsRepository: MongoRepository<SetsEntity>
  ) {}

  create(set) {
    return this.setsRepository.save(set);
  }
}
