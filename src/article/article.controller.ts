import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateArticleDto): Promise<Article> {
    return this.articleService.create(dto);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Article> {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() body: Partial<Article>,
  ): Promise<Article> {
    return this.articleService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number): Promise<void> {
    return this.articleService.delete(id);
  }
}
