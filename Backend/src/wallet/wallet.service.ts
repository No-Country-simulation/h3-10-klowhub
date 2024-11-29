import { BadRequestException, ConflictException, HttpException, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseObject } from 'src/interfaces/types'

@Injectable()
export class WalletService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(wallet: CreateWalletDto): Promise<ResponseObject> {

    try {
      await this.prisma.wallets.create({
        data: wallet
      });
      return { message: "Wallet has been created", ok: true }
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException('seller_id already exists', 409);
      }
      throw new BadRequestException('Unknown Error');
    }
  }

  async findAll(): Promise<any> {
    return await this.prisma.wallets.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.wallets.findUnique({
      where: { id },
    })
  }
}
