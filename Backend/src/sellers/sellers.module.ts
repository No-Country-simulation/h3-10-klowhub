import { forwardRef, Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { WalletModule } from 'src/wallet/wallet.module';

@Module({
  controllers: [SellersController],
  providers: [SellersService],
  imports: [PrismaModule, WalletModule, forwardRef(() => UsersModule)],
  exports: [SellersService],
})
export class SellersModule {}
