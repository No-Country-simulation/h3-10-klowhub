import { Module } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { DeleteUserController } from './delete-user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DeleteUserController],
  imports: [PrismaModule],
  providers: [DeleteUserService],
  exports: [DeleteUserService],
})
export class DeleteUserModule {}
