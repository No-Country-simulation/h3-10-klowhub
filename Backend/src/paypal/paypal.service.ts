import { HttpException, Injectable } from '@nestjs/common';
import { CreatePaypalOrderWithItems } from 'src/interfaces/types';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaypalService {
  constructor(private prisma: PrismaService) {}

  private readonly baseUrl = 'https://api-m.sandbox.paypal.com';
  private readonly clientId = process.env.PAYPAL_CLIENT_ID;
  private readonly clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  async createOrder(createPaypalOrder: CreatePaypalOrderWithItems) {
    const token = await this.getAccessToken();
    const response = await fetch(`${this.baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: createPaypalOrder.purchase_units,
      }),
    });
    const data = await response.json();
    return data;
  }

  private async getAccessToken() {
    const response = await fetch(`${this.baseUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    });
    const data = await response.json();
    return data.access_token;
  }

  async capturePayment(orderId: string) {
    const token = await this.getAccessToken();
    const response = await fetch(
      `${this.baseUrl}/v2/checkout/orders/${orderId}/capture`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  }

  async checkout(id: string) {
    const token = await this.getAccessToken();

    const response = await fetch(`${this.baseUrl}/v2/checkout/orders/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }

  async sendPayout(
    sellerEmail: string,
    amount: string,
    currency: string,
  ): Promise<any> {
    const token = await this.getAccessToken();

    const payoutPayload = {
      sender_batch_header: {
        email_subject: 'You have a payment!',
        email_message: 'You have received a payment for your course sale.',
      },
      items: [
        {
          recipient_type: 'EMAIL',
          receiver: sellerEmail,
          amount: {
            value: amount,
            currency: currency,
          },
          note: 'Payment for course sold',
          sender_item_id: `course-payment-${Date.now()}`,
        },
      ],
    };

    const response = await fetch(`${this.baseUrl}/v1/payments/payouts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payoutPayload),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new HttpException(`Error sending payout: ${data.message}`, 500);
    }

    return data;
  }

  async getUser() {
    const token = await this.getAccessToken();
    const response = await fetch(`${this.baseUrl}/v1/oauth2/token/userinfo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
