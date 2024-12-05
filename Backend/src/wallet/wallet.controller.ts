import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpException,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletService.findOne(id);
  }

  @Post()
  create(@Body() createWallet: CreateWalletDto) {
    try {
      return this.walletService.create(createWallet);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
