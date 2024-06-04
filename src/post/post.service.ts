import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto, UpdatePostDto } from './dto/createPostDto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async getPostsById(userId: number) {
    // return 'user posts';
    return await this.postRepo.findOne({ where: { user: { id: userId } } });
  }

  async getAll() {
    return await this.postRepo.find({});
  }

  async getOne(id: number) {
    return await this.postRepo.findOne({ where: { id: id } });
  }

  async create(createPostDto: CreatePostDto) {
    const user = await this.userRepo.findOne({
      where: { id: createPostDto.userId },
    });

    const post = new Post();
    post.title = createPostDto.title;
    post.description = createPostDto.description;
    post.user = user;

    return await this.postRepo.save(post);
  }

  async delete(id: number) {
    return await this.postRepo.delete(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postRepo.update(id, updatePostDto);
  }
}
