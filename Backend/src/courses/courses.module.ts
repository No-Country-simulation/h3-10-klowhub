import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaypalService } from 'src/paypal/paypal.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService, PaypalService],
})
export class CoursesModule {}
