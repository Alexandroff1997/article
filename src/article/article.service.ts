import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UserService } from 'src/user/user.service';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
    private userService: UserService,
  ) {}

  async create(dto: CreateArticleDto): Promise<Article> {
    const author = await this.userService.findById(+dto.authorId);

    if (!author) {
      throw new Error('Author not found');
    }

    const article: Article = this.articlesRepository.create({
      title: dto.title,
      description: dto.description,
      publishedAt: new Date(),
      author: author,
    });

    return this.articlesRepository.save(article);
  }

  async findAll(): Promise<Article[]> {
    return this.articlesRepository.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<Article> {
    return this.articlesRepository.findOne({
      where: { id },
      relations: ['author'],
    });
  }

  async update(id: number, dto: UpdateArticleDto): Promise<Article> {
    await this.articlesRepository.update(id, dto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
