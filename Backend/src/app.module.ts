import { Module } from '@nestjs/common';
import { WalletModule } from './wallet/wallet.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared-module/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, WalletModule, SharedModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
