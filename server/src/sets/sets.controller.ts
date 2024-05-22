import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(
    @Inject(SetsService)
    private setsService: SetsService
  ) {}

  @Post()
  async create(@Body() set): Promise<any> {
    return await this.setsService.create(set);
  }
}
