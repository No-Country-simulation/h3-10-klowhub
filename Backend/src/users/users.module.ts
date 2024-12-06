import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SharedModule } from 'src/shared-module/shared.module';
import { DeleteUserModule } from 'src/delete-user/delete-user.module';
import { SellersModule } from 'src/sellers/sellers.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    PrismaModule,
    SharedModule,
    DeleteUserModule,
    forwardRef(() => SellersModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
