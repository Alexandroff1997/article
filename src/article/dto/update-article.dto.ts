import { IsOptional, IsString, IsDate } from 'class-validator';

export class UpdateArticleDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsDate()
  readonly publishedDate?: Date;

  @IsOptional()
  @IsString()
  readonly author?: string;
}
