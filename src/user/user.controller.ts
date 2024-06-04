import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { PostService } from 'src/post/post.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  @Get('/all')
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.userService.getOne(id);
  }

  @Get(':id/posts')
  getPosts(@Param('id') id: number) {
    return this.postService.getPostsById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
