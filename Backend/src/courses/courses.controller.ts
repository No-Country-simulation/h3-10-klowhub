import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpException,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilterDto } from './dto/filter-course.dto';
import { QueryDto } from './dto/query-course.dto';

@ApiTags('Courses')
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
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    const newPage = page ? +page : 1;
    const newLimit = limit ? +limit : 4;
    try {
      return await this.coursesService.findAll(newPage, newLimit);
    } catch (error) {
      throw new HttpException(
        `Error finding courses: ${error.message}`,
        error.status,
      );
    }
  }

  @Get('/search')
  async searchCourses(@Query() query: QueryDto) {
    try {
      return await this.coursesService.filterWithQuery(query);
    } catch (error) {
      throw new HttpException(
        `Error searching courses: ${error.message}`,
        error.status,
      );
    }
  }

  @Post('/filters')
  async findWithFilters(@Body() filtersConditions: FilterDto[]) {
    try {
      return await this.coursesService.filtersCourses(filtersConditions);
    } catch (error) {
      throw new HttpException(
        `Error filtering courses: ${error.message}`,
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
