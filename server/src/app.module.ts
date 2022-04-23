import { Module } from '@nestjs/common';
import { BreakfillerModule } from './breakfiller/breakfiller.module';
import { AudioModule } from './audio/audio.module';
import { VideoModule } from './video/video.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [BreakfillerModule, AudioModule, VideoModule, ImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
