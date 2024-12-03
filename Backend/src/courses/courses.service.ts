import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaypalOrder, ResponseObject } from 'src/interfaces/types';
import { PaypalService } from 'src/paypal/paypal.service';

@Injectable()
export class CoursesService {
  constructor(
    private prisma: PrismaService,
    private paypal: PaypalService,
  ) {}

  async findAll() {
    try {
      return await this.prisma.courses.findMany({
        include: {
          seller: true,
          stars: true,
          type_course: true,
          course_level: true,
          platform: true,
          language: true,
          sector: true,
          contentPillar: true,
          functionality: true,
          tool: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const course = await this.prisma.courses.findUnique({
        where: { id },
        include: {
          seller: true,
          stars: true,
          type_course: true,
          course_level: true,
          platform: true,
          language: true,
          sector: true,
          contentPillar: true,
          functionality: true,
          tool: true,
        },
      });
      if (!course) {
        throw new NotFoundException('Course not found');
      }
      return course;
    } catch (error) {
      throw error;
    }
  }

  async create(createCourseDto: CreateCourseDto): Promise<ResponseObject> {
    try {
      const existingCourse = await this.prisma.courses.findFirst({
        where: {
          title: createCourseDto.title,
        },
      });
      if (existingCourse) {
        throw new BadRequestException('Course with this title already exists');
      }

      this.prisma.courses.create({
        data: createCourseDto,
      });
      return { message: 'Course Created Successfully', ok: true };
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    try {
      const course = await this.prisma.courses.findUnique({
        where: { id },
      });

      if (!course) {
        throw new NotFoundException('Course not found');
      }
      await this.prisma.courses.update({
        where: { id },
        data: updateCourseDto,
      });
      return { message: 'Course Updated Successfully', ok: true };
    } catch (error) {
      throw error;
    }
  }

  async createPaypalOrder(createPaypalOrder: CreatePaypalOrder) {
    const { amount, currency, title } = createPaypalOrder;
    try {
      const order = await this.paypal.createOrder(amount, currency, title);
      console.log('paypal order', order);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async capturePaypalPayment(orderId: string) {
    try {
      const capture = await this.paypal.capturePayment(orderId);
      console.log('paypal capture', capture);
      return capture;
    } catch (error) {
      throw error;
    }
  }
}
