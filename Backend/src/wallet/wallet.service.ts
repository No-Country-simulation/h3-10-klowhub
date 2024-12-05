import { BadRequestException, ConflictException, HttpException, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Wallet } from 'src/interfaces/types';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(wallet: CreateWalletDto): Promise<Wallet | null> {

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
    try {
      return await this.prisma.wallets.findMany();
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string): Promise<Wallet | null> {
    try {
      return await this.prisma.wallets.findUnique({
        where: { id },
      })
    } catch (error) {
      throw error
    }
  }

  async findWalletBySeller_id(seller_id: string): Promise<Wallet | null> {
    try {
      return await this.prisma.wallets.findUnique({
        where: { seller_id }
      })
    } catch (error) {
      throw error
    }
  }

  async updateWallet(dataUpdateWallet: UpdateWalletDto, id: string): Promise<Wallet | null> {
    try {
      const wallet = await this.findOne(id);

      if (!wallet) {
        throw new HttpException('Wallet not found', 404);
      }

      return await this.prisma.wallets.update({
        where: { id },
        data: dataUpdateWallet
      })
    } catch (error) {
      throw error
    }
  }

  async getAmountById(id: string): Promise<number | null> {
    const amount = await this.prisma.wallets.findUnique({
      where: { id },
      select: { balance: true }
    })
    if (!amount){
      throw new HttpException('Wallet not found', 404);
    }
    return amount.balance
  }

}
