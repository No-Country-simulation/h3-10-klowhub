'use client';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";


export function Button_Buys({ setCarts, setPurchaseSuccess, }: {
  setCarts: React.Dispatch<React.SetStateAction<any[]>>;
  setPurchaseSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const paypalClientId =
    "ATnTXFUhKYkfzCmfo1dDcUDW5n0mEAZKoZ630VnTBuV7HfImHmrgdq25Ef3BJiH2qmOARzLs_CHAy3ic";

  const handlePurchaseSuccess = () => {
    // Vaciar el carrito
    setCarts([]);
    localStorage.removeItem("cartItems");

    // Mostrar mensaje de éxito
    setPurchaseSuccess(true);
    setTimeout(() => setPurchaseSuccess(false), 5000);
  };

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
                    value: "100.00"
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            if (actions.order) {
              // Captura la orden y devuelve el Promise<void>
              return actions.order.capture().then(() => {
                handlePurchaseSuccess();
              });
            }
            // En caso de que no haya `actions.order`, aún devolvemos un Promise<void>
            return Promise.resolve();
          }}
          onError={(err) => {
            console.error("Error en la transacción:", err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
