import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export function Button_Buys({ onPurchaseSuccess }: { onPurchaseSuccess: () => void }) {
  const paypalClientId =
    "ATnTXFUhKYkfzCmfo1dDcUDW5n0mEAZKoZ630VnTBuV7HfImHmrgdq25Ef3BJiH2qmOARzLs_CHAy3ic";

  return (
    <div className="h-1/2 w-full">
      <PayPalScriptProvider options={{ clientId: paypalClientId }}>
        <PayPalButtons
          style={{
            color: "blue",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: "100.00",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            if (actions.order) {
              return actions.order.capture().then(() => {
                onPurchaseSuccess(); 
              });
            }
            return Promise.resolve();
          }}
          onError={(err) => {
            console.log("Error en la transacción:", err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
