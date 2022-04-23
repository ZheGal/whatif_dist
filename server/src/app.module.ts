import { Module } from '@nestjs/common';
import { BreakfillerModule } from './breakfiller/breakfiller.module';

@Module({
  imports: [BreakfillerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
