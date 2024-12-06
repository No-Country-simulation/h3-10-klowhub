import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaypalService } from 'src/paypal/paypal.service';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService, PrismaService, PaypalService],
})
export class ApplicationsModule {}
