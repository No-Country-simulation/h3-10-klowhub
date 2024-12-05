'use client';

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

export function Button_Buys() {
  const { paypal_order } = useContext(AuthContext);


  const createOrder = async () => {
    try {
      const order = await paypal_order();
      if (order && order.id) {
        toast.success("Orden creada exitosamente en PayPal");
        return order.id; // Devuelve el ID de la orden para que PayPal lo use
      } else {
        throw new Error("No se obtuvo un ID de orden válido");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error al crear la orden en PayPal");
      return null; // Indica un fallo en la creación
    }
  };

  const onApprove = async (data: any, actions: any) => {
    // Manejo de la aprobación de la orden
    toast.success("Pago aprobado");
    console.log("Datos de la transacción aprobada:", data);
    return actions.order?.capture();
  };

  const onError = (err: any) => {
    console.error("Error durante el proceso de pago:", err);
    toast.error("Error durante el proceso de pago");
  };

  return (
    <div className="h-1/2 w-full">
      <PayPalScriptProvider options={{ clientId: process.env.PAYPAL_CLIENT_ID ?? "" }}>
        <PayPalButtons
          style={{
            layout: "horizontal",
            tagline: false,
            color: "blue",
            shape: "rect",
            label: "paypal",
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </PayPalScriptProvider>
    </div>
  );
}
