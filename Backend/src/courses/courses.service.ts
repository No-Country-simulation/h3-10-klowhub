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
import { QueryDto } from './dto/query-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    private prisma: PrismaService,
    private paypal: PaypalService,
  ) {}

  async findAll(page: number, limit: number) {
    try {
      const skip = (page - 1) * limit;
      return await this.prisma.courses.findMany({
        skip,
        take: limit,
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
          modules: {
            include: {
              lessons: true,
            },
          },
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

  async filterWithQuery(query: QueryDto): Promise<Courses | Courses[] | null> {
    if (query.title) {
      const title = query.title.replace(/_/g, ' ');
      const courseFound = await this.prisma.courses.findFirst({
        where: {
          OR: [
            { title: { contains: title, mode: 'insensitive' } },
            { description: { contains: title, mode: 'insensitive' } },
          ],
        },
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
      if (!courseFound) {
        throw new NotFoundException('Course not found');
      }
      return courseFound;
    }

    if (query.tags) {
      const tagsArray = query.tags.split(',').map((tag) => tag.trim());
      const courseFound = await this.prisma.courses.findMany({
        where: { tags: { hasSome: tagsArray } },
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
      if (courseFound.length === 0) {
        throw new NotFoundException('Course not found');
      }
      return courseFound;
    }
  }

  async getAllFilters() {
    try {
      const type_course = await this.prisma.types_of_courses.findMany();
      const course_level = await this.prisma.courses_level.findMany();
      const platform = await this.prisma.platforms.findMany();
      const language = await this.prisma.languages.findMany();
      const sector = await this.prisma.sectors.findMany();
      const contentPillar = await this.prisma.content_pillars.findMany();
      const functionality = await this.prisma.functionality.findMany();
      const tool = await this.prisma.tools.findMany();

      return {
        type_course,
        course_level,
        platform,
        language,
        sector,
        contentPillar,
        functionality,
        tool,
      };
    } catch (error) {
      throw error;
    }
  }
}
