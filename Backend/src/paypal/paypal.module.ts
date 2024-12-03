import { Module } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { PaypalController } from './paypal.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PaypalController],
  providers: [PaypalService, PrismaService],
  exports: [PaypalService],
})
export class PaypalModule {}
