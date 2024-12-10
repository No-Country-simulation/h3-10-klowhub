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
import { ItemsService } from './items.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilterDto } from './dto/filter-item.dto';
import { QueryDto } from './dto/query-item.dto';
import { CreateApplicationDto } from 'src/items/dto/create-application.dto';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('/courses')
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    try {
      return await this.itemsService.create(createCourseDto);
    } catch (error) {
      throw new HttpException(
        `Error creating course: ${error.message}`,
        error.status,
      );
    }
  }

  @Post('/applications')
  async createApplication(@Body() createApplicationDto: CreateApplicationDto) {
    try {
      return await this.itemsService.create(createApplicationDto);
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
      return await this.itemsService.findAll(newPage, newLimit);
    } catch (error) {
      throw new HttpException(
        `Error finding items: ${error.message}`,
        error.status,
      );
    }
  }

  @Get('/search')
  async searchitems(@Query() query: QueryDto) {
    try {
      return await this.itemsService.filterWithQuery(query);
    } catch (error) {
      throw new HttpException(
        `Error searching items: ${error.message}`,
        error.status,
      );
    }
  }

  @Get('/filters')
  async getFilters() {
    try {
      return await this.itemsService.getAllFilters();
    } catch (error) {
      throw new HttpException(
        `Error getting filters: ${error.message}`,
        error.status,
      );
    }
  }

  @Post('/filters')
  async findWithFilters(@Body() filtersConditions: FilterDto[]) {
    try {
      return await this.itemsService.filtersItems(filtersConditions);
    } catch (error) {
      throw new HttpException(
        `Error filtering items: ${error.message}`,
        error.status,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.itemsService.findOne(id);
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
      return await this.itemsService.update(id, updateCourseDto);
    } catch (error) {
      throw new HttpException(
        `Error updating course with id ${id}: ${error.message}`,
        error.status,
      );
    }
  }
}
