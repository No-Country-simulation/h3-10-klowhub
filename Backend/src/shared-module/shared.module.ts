import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';

@Module({
  controllers: [],
  providers: [PasswordService],
  exports: [PasswordService]
})
export class SharedModule {}
