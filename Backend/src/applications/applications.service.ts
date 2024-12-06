import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseObject } from 'src/interfaces/types';
import { Application } from './entities/application.entity';
import { FilterDto } from './dto/filter-application.dto';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number, limit: number) {
    try {
      const skip = (page - 1) * limit;
      return await this.prisma.applications.findMany({
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
          media: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const application = await this.prisma.applications.findUnique({
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
          media: true,
        },
      });
      if (!application) {
        throw new NotFoundException('Application not found');
      }
      return application;
    } catch (error) {
      throw error;
    }
  }

  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<ResponseObject> {
    try {
      const existingApplication = await this.prisma.applications.findFirst({
        where: {
          title: createApplicationDto.title,
        },
      });
      if (existingApplication) {
        throw new BadRequestException(
          'Application with this title already exists',
        );
      }

      await this.prisma.applications.create({
        data: createApplicationDto,
      });
      return { message: 'Application Created Successfully', ok: true };
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateApplicationDto: UpdateApplicationDto) {
    try {
      const application = await this.prisma.applications.findUnique({
        where: { id },
      });

      if (!application) {
        throw new NotFoundException('Application not found');
      }
      await this.prisma.applications.update({
        where: { id },
        data: updateApplicationDto,
      });
      return { message: 'Application Updated Successfully', ok: true };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const application = await this.prisma.applications.findUnique({
        where: { id },
      });

      if (!application) {
        throw new NotFoundException('Application not found');
      }
      await this.prisma.applications.delete({
        where: { id },
      });
      return { message: 'Application Removed Successfully', ok: true };
    } catch (error) {
      throw error;
    }
  }

  async filterWithQuery(query: string): Promise<Application[] | null> {
    try {
      const applications = await this.prisma.applications.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { tags: { has: query } },
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

      if (applications.length === 0) {
        throw new BadRequestException(
          'There are no applications with the search query provided',
        );
      }

      return applications;
    } catch (error) {
      throw error;
    }
  }

  async filterApplications(filters: FilterDto): Promise<Application[] | null> {
    try {
      const whereClause = {};

      for (const key in filters) {
        if (filters.hasOwnProperty(key) && filters[key]) {
          const value = filters[key];
          const relatedEntity = key.replace('_id', '');
          whereClause[relatedEntity] = { name: value };
        }
      }

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
          'There are no applications with the filter parameters provided',
        );
      }

      return courses;
    } catch (error) {
      throw error;
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
