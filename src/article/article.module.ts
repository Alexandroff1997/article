import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './entities/article.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), UserModule],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
