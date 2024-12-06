import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  Query,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ApiTags } from '@nestjs/swagger';
import { QueryDto } from './dto/query-application.dto';
import { FilterDto } from './dto/filter-application.dto';

@ApiTags('Applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  async create(@Body() createApplicationDto: CreateApplicationDto) {
    try {
      return await this.applicationsService.create(createApplicationDto);
    } catch (error) {
      throw new HttpException(
        `Error creating application: ${error.message}`,
        error.status,
      );
    }
  }

  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    const newPage = page ? +page : 1;
    const newLimit = limit ? +limit : 4;
    try {
      return await this.applicationsService.findAll(newPage, newLimit);
    } catch (error) {
      throw new HttpException(
        `Error finding applications: ${error.message}`,
        error.status,
      );
    }
  }

  @Get('/search')
  async searchApplications(@Query() query: QueryDto) {
    try {
      return await this.applicationsService.filterWithQuery(query.query);
    } catch (error) {
      throw new HttpException(
        `Error searching applications: ${error.message}`,
        error.status,
      );
    }
  }

  @Get('/filters')
  async getFilters() {
    try {
      return await this.applicationsService.getAllFilters();
    } catch (error) {
      throw new HttpException(
        `Error getting filters: ${error.message}`,
        error.status,
      );
    }
  }

  @Post('/filters')
  async findWithFilters(@Body() filtersConditions: FilterDto) {
    try {
      return await this.applicationsService.filterApplications(
        filtersConditions,
      );
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
      return await this.applicationsService.findOne(+id);
    } catch (error) {
      throw new HttpException(
        `Error finding application with id ${id}: ${error.message}`,
        error.status,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ) {
    try {
      return await this.applicationsService.update(+id, updateApplicationDto);
    } catch (error) {
      throw new HttpException(
        `Error updating application with id ${id}: ${error.message}`,
        error.status,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.applicationsService.remove(+id);
    } catch (error) {
      throw new HttpException(
        `Error removing application with id ${id}: ${error.message}`,
        error.status,
      );
    }
  }
}
