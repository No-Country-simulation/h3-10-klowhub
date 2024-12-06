import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseObject } from 'src/interfaces/types';
import { Sellers } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { WalletService } from 'src/wallet/wallet.service';

@Injectable()
export class SellersService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private walletService: WalletService,
  ) {}

  async create(
    createSellerDto: CreateSellerDto,
  ): Promise<ResponseObject | null> {
    try {
      const sellerCreated = await this.prisma.sellers.create({
        data: createSellerDto,
      });
      const { seller_id } = sellerCreated;
      await this.usersService.update(createSellerDto.user_id, { role_id: 2 });
      await this.walletService.create({ seller_id });
      return { message: 'Seller Created Successfully', ok: true };
    } catch (error) {
      throw new BadRequestException('Error at create seller', error.message);
      // verificar error al seller duplicado
    }
  }

  async findAll(): Promise<Sellers[] | null> {
    try {
      const sellers = await this.prisma.sellers.findMany();
      return sellers;
    } catch (error) {
      throw new BadRequestException('Error at find all sellers', error.message);
    }
  }

  async findOne(seller_id: string): Promise<Sellers | null> {
    try {
      const seller = await this.prisma.sellers.findUnique({
        where: { seller_id },
      });
      if (!seller) {
        throw new BadRequestException('Seller not found');
      }
      return seller;
    } catch (error) {
      throw new BadRequestException('Error at find one seller', error.message);
    }
  }

  async findSellerWithUser(id: string): Promise<boolean | null> {
    try {
      const seller = await this.prisma.sellers.findUnique({
        where: { user_id: id },
      });
      if (seller) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new BadRequestException(
        'Error at find seller with user',
        error.message,
      );
    }
  }

  async update(
    seller_id: string,
    updateSellerDto: UpdateSellerDto,
  ): Promise<ResponseObject | null> {
    try {
      await this.prisma.sellers.update({
        where: { seller_id },
        data: updateSellerDto,
      });
      return { message: 'Seller Updated Successfully', ok: true };
    } catch (error) {
      throw new BadRequestException('Error at update seller', error.message);
    }
  }

  async removeSeller(
    updateSellerDto: UpdateSellerDto,
  ): Promise<ResponseObject | null> {
    const { user_id } = updateSellerDto;
    try {
      await this.prisma.sellers.update({
        where: { user_id },
        data: { isUserActive: false },
      });
      return { message: 'Seller Deleted Successfully', ok: true };
    } catch (error) {
      throw new BadRequestException('Seller not found', error);
    }
  }

  async sellersActives(): Promise<Sellers[] | ResponseObject | null> {
    try {
      const sellersActives = await this.prisma.sellers.findMany({
        where: { isUserActive: true },
      });
      if (sellersActives.length === 0) {
        return { message: `don't have sellers actives`, ok: true };
      }
      return sellersActives;
    } catch (error) {
      throw new BadRequestException(
        'Error at get sellers actives',
        error.message,
      );
    }
  }
}
