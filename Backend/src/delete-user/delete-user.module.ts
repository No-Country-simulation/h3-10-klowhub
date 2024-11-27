import { Module } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { DeleteUserController } from './delete-user.controller';

@Module({
  controllers: [DeleteUserController],
  providers: [DeleteUserService],
})
export class DeleteUserModule {}
