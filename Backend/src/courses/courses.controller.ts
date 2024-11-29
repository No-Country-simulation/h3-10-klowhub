import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpException,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    try {
      return await this.coursesService.create(createCourseDto);
    } catch (error) {
      throw new HttpException(
        `Error creating course: ${error.message}`,
        error.status,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.coursesService.findAll();
    } catch (error) {
      throw new HttpException(
        `Error finding courses: ${error.message}`,
        error.status,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.coursesService.findOne(+id);
    } catch (error) {
      throw new HttpException(
        `Error finding course with id ${id}: ${error.message}`,
        error.status,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    try {
      return await this.coursesService.update(+id, updateCourseDto);
    } catch (error) {
      throw new HttpException(
        `Error updating course with id ${id}: ${error.message}`,
        error.status,
      );
    }
  }
}
