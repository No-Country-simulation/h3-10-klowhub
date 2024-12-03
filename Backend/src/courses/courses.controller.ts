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
import { CreatePaypalOrder } from 'src/interfaces/types';

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

  @Post('/paypal-order')
  async createPaypalOrder(@Body() createPaypalOrder: CreatePaypalOrder) {
    try {
      const order =
        await this.coursesService.createPaypalOrder(createPaypalOrder);

      const approvalLink = order.links.find((link) => link.rel === 'approve');
      if (!approvalLink) {
        throw new Error('Approval link not found in PayPal order response.');
      }

      return { approvalUrl: approvalLink.href, orderId: order.id };
    } catch (error) {
      throw new HttpException(
        `Error creating PayPal order: ${error.message}`,
        500,
      );
    }
  }

  @Post('/paypal-capture')
  async capturePaypalPayment(@Body() { orderId }: { orderId: string }) {
    try {
      return await this.coursesService.capturePaypalPayment(orderId);
    } catch (error) {
      throw new HttpException(
        `Error capturing PayPal payment: ${error.message}`,
        error.status || 500,
      );
    }
  }
}
