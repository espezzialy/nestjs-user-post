import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Post } from 'src/entities/post.entity';
import { PostService } from 'src/post/post.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  controllers: [UserController],
  providers: [UserService, PostService],
})
export class UserModule {}
