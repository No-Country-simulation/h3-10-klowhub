import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CaptureOrderDto } from './dto/capture-order.dto';
import { IsAdminGuard } from 'src/auth/guards/is-admin.guard';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

  @Post('order')
  async createPaypalOrder(@Body() createPaypalOrder: CreateOrderDto) {
    try {
      const order = await this.paypalService.createOrder(createPaypalOrder);
      console.log(order);

      const approvalLink = order.links.find((link) => link.rel === 'approve');
      if (!approvalLink) {
        throw new Error('Approval link not found in PayPal order response.');
      }

      return { approvalUrl: approvalLink.href, orderId: order.id };
    } catch (error) {
      throw new HttpException(
        `Error creating PayPal order: ${error.message}`,
        500,
      );
    }
  }

  @Post('capture')
  async capturePaypalPayment(@Body() captureOrder: CaptureOrderDto) {
    try {
      return await this.paypalService.capturePayment(captureOrder);
    } catch (error) {
      throw new HttpException(
        `Error capturing PayPal payment: ${error.message}`,
        error.status || 500,
      );
    }
  }

  @Get('checkout/:id')
  async checkout(@Param('id') id: string) {
    return await this.paypalService.checkout(id);
  }

  @UseGuards(IsAdminGuard)
  @Post('payout')
  async payout(@Body() { sellerEmail, amount, currency }) {
    try {
      return await this.paypalService.sendPayout(sellerEmail, amount, currency);
    } catch (error) {
      throw new HttpException(
        `Error creating payout: ${error.message}`,
        error.status,
      );
    }
  }

  @UseGuards(IsAdminGuard)
  @Get('user')
  async getUser() {
    return await this.paypalService.getUser();
  }
}
