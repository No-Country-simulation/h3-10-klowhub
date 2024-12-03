import { Module } from '@nestjs/common';
import { WalletModule } from './wallet/wallet.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared-module/shared.module';
import { AuthModule } from './auth/auth.module';
import { DeleteUserModule } from './delete-user/delete-user.module';
import { SellersModule } from './sellers/sellers.module';
import { CoursesModule } from './courses/courses.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PaypalService } from './paypal/paypal.service';

@Module({
  imports: [
    UsersModule,
    WalletModule,
    SharedModule,
    AuthModule,
    DeleteUserModule,
    SellersModule,
    CoursesModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [PaypalService],
})
export class AppModule {}
