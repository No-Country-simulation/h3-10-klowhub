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
import { Users } from '@prisma/client';
import { ResponseObject } from 'src/interfaces/types';
import { DeleteUserService } from 'src/delete-user/delete-user.service';
import { SellersService } from 'src/sellers/sellers.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
    private deleteService: DeleteUserService,
    private sellersService: SellersService,
  ) {}

  async createUser(user: CreateUserDto): Promise<ResponseObject | null> {
    try {
      const hashedPassword = await this.passwordService.hashPassword(
        user.password,
      );
      await this.prisma.users.create({
        data: {
          ...user,
          password: hashedPassword,
        },
      });
      return { message: 'User Created Successfully', ok: true };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw new BadRequestException('Unknown Error');
    }
  }

  async findByMail(email: string): Promise<Users | null> {
    try {
      const usernameFound = await this.prisma.users.findUnique({
        where: { email },
      });
      if (!usernameFound) {
        throw new NotFoundException('User not found');
      }
      return usernameFound;
    } catch (error) {
      throw new BadRequestException({ message: 'Server Error', error });
    }
  }

  async findOne(id: string): Promise<Omit<Users, 'password'> | null> {
    const usernameFound = await this.prisma.users.findUnique({
      where: { user_id: id },
    });
    if (!usernameFound) {
      throw new NotFoundException('User not found');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...returnUser } = usernameFound;
    return returnUser;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<ResponseObject | null> {
    try {
      const userFound = await this.findOne(id);
      if (!userFound) {
        throw new NotFoundException('User not found');
      }
      await this.prisma.users.update({
        where: { user_id: id },
        data: updateUserDto,
      });
      return { message: 'User Updated Successfully', ok: true };
    } catch (error) {
      throw new BadRequestException({ message: 'Server Error', error });
    }
  }

  async remove(id: string): Promise<ResponseObject | null> {
    try {
      const userFound = await this.findOne(id);
      if (!userFound) {
        throw new NotFoundException('User not found');
      }
      const { user_id } = userFound;
      await this.deleteService.create({ user_id: user_id });
      await this.prisma.users.update({
        where: { user_id },
        data: { isUserActive: false },
      });
      // primero hacer el servicio de encontrar el seller para luego proceder a borrarlo
      const isSeller = await this.sellersService.findSellerWithUser(user_id);
      if (isSeller) {
        await this.sellersService.removeSeller(userFound);
      }
      return { message: 'User Deleted Successfully', ok: true };
    } catch (error) {
      throw new BadRequestException({ message: 'Server Error', error });
    }
  }
}
