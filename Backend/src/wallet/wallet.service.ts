import { BadRequestException, ConflictException, HttpException, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Wallet } from 'src/interfaces/types';

@Injectable()
export class WalletService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(wallet: CreateWalletDto): Promise< Wallet | null> {

    try {
      return await this.prisma.wallets.create({
        data: wallet
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException('seller_id already exists', 409);
      }
      throw new BadRequestException('Unknown Error');
    }
  }

  async findAll(): Promise<Wallet[] | null> {
    return await this.prisma.wallets.findMany();
  }

  async findOne(id: string): Promise<Wallet | null> {
    return await this.prisma.wallets.findUnique({
      where: { id },
    })
  }
}
