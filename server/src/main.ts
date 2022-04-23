import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const main = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    await app.listen(PORT, () => {
      console.log(`Application is working on ${PORT} port`);
    });
  } catch(e) {
    console.log(e);
  }
}

main();
