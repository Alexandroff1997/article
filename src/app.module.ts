import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ArticleModule],
})
export class AppModule {}
