import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { CreatePaypalOrder } from 'src/interfaces/types';
import { PaypalService } from './paypal.service';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

  @Post('order')
  async createPaypalOrder(@Body() createPaypalOrder: CreatePaypalOrder) {
    try {
      const order = await this.paypalService.createOrder(createPaypalOrder);

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
  async capturePaypalPayment(@Body() { orderId }: { orderId: string }) {
    try {
      return await this.paypalService.capturePayment(orderId);
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

  @Get('user')
  async getUser() {
    return await this.paypalService.getUser();
  }
}
