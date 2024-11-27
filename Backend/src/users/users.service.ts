import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/shared-module/password.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async createUser(user: CreateUserDto): Promise<any> {
    try {
      const hashedPassword = await this.passwordService.hashPassword(
        user.password,
      );
      return await this.prisma.users.create({
        data: {
          ...user,
          password: hashedPassword,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw new BadRequestException('Unknown Error');
    }
  }

  async findByMail(email: string) {
    try {
      const usernameFound = await this.prisma.users.findUnique({
        where: { email },
      });
      if (!usernameFound) {
        throw new NotFoundException('User not found');
      }
      return usernameFound;
    } catch (error) {
      throw new NotFoundException({ message: 'User not found', error });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
