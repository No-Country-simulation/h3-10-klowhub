import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaypalService } from 'src/paypal/paypal.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, PrismaService, PaypalService],
})
export class CoursesModule {}
