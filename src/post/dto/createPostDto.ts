import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  userId: number;
}

export class UpdatePostDto extends PartialType(CreatePostDto) {}
