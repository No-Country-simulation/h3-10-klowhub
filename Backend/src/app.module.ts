import { Module } from '@nestjs/common';
import { WalletModule } from './wallet/wallet.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, WalletModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
