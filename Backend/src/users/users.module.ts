import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SharedModule } from 'src/shared-module/shared.module';
import { PasswordService } from 'src/shared-module/password.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PrismaModule, SharedModule],
  exports: [UsersService],
})
export class UsersModule {}
