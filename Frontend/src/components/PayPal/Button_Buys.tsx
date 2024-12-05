'use client';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export function Button_Buys() {
    return (
        <div className='w-80'>
            <PayPalScriptProvider options={{
                clientId: "ATnTXFUhKYkfzCmfo1dDcUDW5n0mEAZKoZ630VnTBuV7HfImHmrgdq25Ef3BJiH2qmOARzLs_CHAy3ic",
            }}>
                <PayPalButtons
                    style={{
                        color: "gold",
                        layout: "horizontal",
                    }}
                    createOrder={async () => {
                        const res = await fetch("/api/checkout/", {
                            method: "POST"
                        });
                        const order = await res.json();
                        console.log(order);
                        return order.id;
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}
