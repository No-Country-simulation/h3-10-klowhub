import { Module } from '@nestjs/common';
import { WalletModule } from './wallet/wallet.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared-module/shared.module';
import { AuthModule } from './auth/auth.module';
import { DeleteUserModule } from './delete-user/delete-user.module';
import { SellersModule } from './sellers/sellers.module';
import { CoursesModule } from './courses/courses.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PaypalModule } from './paypal/paypal.module';
import { ApplicationsModule } from './applications/applications.module';

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
    PaypalModule,
    ApplicationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
