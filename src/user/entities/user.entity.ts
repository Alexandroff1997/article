import { Article } from 'src/article/entities/article.entity';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: new Date() })
  createdAt: Date;

  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];
}
