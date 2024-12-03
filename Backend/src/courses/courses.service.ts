import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseObject } from 'src/interfaces/types';
import { PaypalService } from 'src/paypal/paypal.service';
import { FilterDto } from './dto/filter-course.dto';
import { Courses } from '@prisma/client';

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

  async filtersCourses(filters: FilterDto[]): Promise<Courses[] | null> {
    try {
      const whereClause = {};

      filters.forEach((filter) => {
        const { key, value } = filter;
        whereClause[key] = value;
      });

      const courses = await this.prisma.courses.findMany({
        where: whereClause,
        include: {
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

      if (courses.length === 0) {
        throw new BadRequestException(
          'There are no courses with the filter parameters provided',
        );
      }

      return courses;
    } catch (error) {
      throw error;
    }
  }
}
