import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';

@Module({
  controllers: [SellersController],
  providers: [SellersService],
})
export class SellersModule {}
