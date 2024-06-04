import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/createPostDto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/all')
  getAll() {
    return this.postService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.postService.getOne(id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.postService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }
}
