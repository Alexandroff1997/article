import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsDate()
  readonly publishedDate: Date;

  @IsNotEmpty()
  readonly authorId: number;
}
