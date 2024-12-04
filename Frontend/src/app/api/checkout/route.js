import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

// Configuración de credenciales desde variables de entorno
const clientId ="ATnTXFUhKYkfzCmfo1dDcUDW5n0mEAZKoZ630VnTBuV7HfImHmrgdq25Ef3BJiH2qmOARzLs_CHAy3ic";
const clientsecret ="EAhPCKCv-ZI23WGCWT9KFcw9xPAd3P9oDp0beMF6Z-VY9EIklLzGaMKIG5rAhBcgpSjGBTS4yDMxZKXW";


// Configuración del entorno de PayPal
const environment = new paypal.core.SandboxEnvironment(clientId, clientsecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
  }

  const request = new paypal.orders.OrdersCreateRequest();

  // Configuración de la orden
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        },
        items: [
          {
            name: "curso de next js",
            description: "el mejor curso de tu vida",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "50.00",
            },
          },
          {
            name: "curso de React js",
            description: "el mejor curso de tu vida",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "50.00",
            },
          },
        ],
      },
    ],
  });

  
    const response = await client.execute(request);
   
    return NextResponse.json({
      id: response.result.id,
    });
}
