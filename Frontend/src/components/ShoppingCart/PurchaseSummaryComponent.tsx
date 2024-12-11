"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import CuponInputComponent from "./CuponInputComponent";
import { Button_Buys } from "../PayPal/Button_Buys";
import { CleanContext } from "@/context/ClearContext";

interface CartItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export default function PurchaseSummaryComponent({
  valueTotal,
  valueService,
  onPurchaseSuccessAction,
}: {
  valueTotal: number;
  valueService: number;
  onPurchaseSuccessAction: () => void;
  cartItems: CartItem[];
}) {
  const [total, setTotal] = useState(valueService + valueTotal);
  const { clearCart } = useContext(CleanContext); // Vaciar carrito desde contexto

  const handlePurchaseSuccess = () => {
    console.log("Compra exitosa!");
    clearCart(); // Vacía el carrito
    onPurchaseSuccessAction(); // Llamamos al callback de éxito para manejarlo en el componente padre
  };

  return (
    <div className="ml-auto mr-0 bg-[#1F2937] p-5 rounded-xl h-max w-full max-w-[411px]">
      <h6 className="font-bold text-xl mb-3">Resumen</h6>

      <div className="flex justify-between">
        <h6>Subtotal</h6>
        <p>${valueTotal}</p>
      </div>
      <div className="flex justify-between mb-3">
        <h6>Tarifa de servicio</h6>
        <p>${valueService.toFixed(2)}</p>
      </div>

      <CuponInputComponent
        SetTotal={setTotal}
        valueService={valueService}
        valueTotal={valueTotal}
      />

      <div className="flex justify-between">
        <h6>Total</h6>
        <p>${total}</p>
      </div>

      <div>
        <p className="mt-5">Seleccionar un método de pago</p>
        <div className="flex gap-1 justify-around items-center my-3">
          <Button_Buys
            totalAmount={valueService + valueTotal}
            onPurchaseSuccess={handlePurchaseSuccess}
          />
        </div>
      </div>

      <Link href={''} className="text-[#7CB4FF] text-center">
        Al comprar/contratar los productos aceptas los términos y condiciones
      </Link>
    </div>
  );
}
