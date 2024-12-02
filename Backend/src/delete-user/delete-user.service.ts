import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDeleteUserDto } from './dto/create-delete-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteResponseObject } from 'src/interfaces/types';

@Injectable()
export class DeleteUserService {
  constructor(private prisma: PrismaService) {}

  async create(createDeleteUserDto: CreateDeleteUserDto) {
    try {
      return await this.prisma.deleteAt_user.create({
        data: createDeleteUserDto,
      });
    } catch (error) {
      throw new BadRequestException('Error creating delete date', error);
    }
  }

  async findAll(): Promise<DeleteResponseObject[] | null> {
    try {
      return await this.prisma.deleteAt_user.findMany();
    } catch (error) {
      throw new BadRequestException('Error finding all delete dates', error);
    }
  }

  async findOne(user_id: string): Promise<DeleteResponseObject[] | null> {
    try {
      const usersRegisterDates = await this.prisma.deleteAt_user.findMany({
        where: { user_id },
      });
      if (usersRegisterDates.length === 0) {
        throw new BadRequestException('Error finding delete date');
      }
      return usersRegisterDates;
    } catch (error) {
      throw new BadRequestException('Error finding delete date', error);
    }
  }
}
