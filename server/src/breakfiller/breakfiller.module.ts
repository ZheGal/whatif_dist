import { Module } from '@nestjs/common';
import { BreakfillerController } from './breakfiller.controller';
import { BreakfillerService } from './breakfiller.service';

@Module({
  controllers: [BreakfillerController],
  providers: [BreakfillerService]
})
export class BreakfillerModule {}
