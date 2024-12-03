import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WalletController],
  providers: [WalletService],
  imports: [PrismaModule],
})
export class WalletModule {}
