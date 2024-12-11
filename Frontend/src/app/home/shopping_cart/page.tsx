"use client";
import { useContext, useEffect, useState } from "react";
import AplicationCartComponent from "@/components/ShoppingCart/AplicationCartComponent";
import PurchaseSummaryComponent from "@/components/ShoppingCart/PurchaseSummaryComponent";
import ToasterCartComponent from "@/components/ShoppingCart/ToasterCartComponent";
import { CartContext } from "@/context/CartContext";
import { CleanContext } from "@/context/ClearContext";
import RemoveCart from "@/components/AddItemCart/RemoveCart";

interface CartItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export default function PageCart() {
  const { items } = useContext(CartContext);
  const { clearCart } = useContext(CleanContext);
  const [open, setOpen] = useState(false);
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false); // Estado para éxito
  const [value, setValue] = useState<{
    valueTotal: number;
    valueService: number;
  }>({ valueTotal: 0, valueService: 0 });

  useEffect(() => {
    let totalValue = 0;
    items.forEach((item) => {
      totalValue += item.price !== undefined ? parseInt(item.price) : 0;
    });

    const valueService = totalValue * 0.1;
    setValue({
      valueTotal: totalValue,
      valueService: valueService,
    });
  }, [items]);

  const handlePurchaseSuccess = () => {
    setIsPurchaseSuccessful(true);
    clearCart(); // Limpiar el carrito después de una compra exitosa
  };

  const transformedCartItems: CartItem[] = items.map((item) => ({
    id: String(item.id),
    name: item.title || "Producto sin nombre",
    description: item.description || "Sin descripción",
    quantity: item.quantity || 1,
    price: item.price ? parseFloat(item.price) : 0,
  }));

  return (
    <div className="w-full p-5 pt-12 flex flex-col items-center justify-center">
      <h6 className="mb-8 mt-4 font-bold">Tu carrito de compra</h6>

      {isPurchaseSuccessful ? (
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <p>¡La compra fue exitosa!</p>
        </div>
      ) : (
        <div className="w-full flex gap-5 max-md:flex-col max-md:items-center">
          {items.length > 0 ? (
            <div className="w-full flex flex-col gap-3">
              {items.map((item) => (
                <AplicationCartComponent
                  key={item.id}
                  id={item.id}
                  sector={item.sector}
                  seller={item.seller}
                  tags={item.tags}
                  top={item.top}
                  title={item.title}
                  stars={item.stars}
                  platform={item.platform}
                  punctuation={item.punctuation}
                  image_url={item.image_url}
                >
                  <div className="mb-0 mt-auto">
                    <RemoveCart id={item.id} />
                  </div>
                </AplicationCartComponent>
              ))}
            </div>
          ) : (
            <p className="text-center w-full">No tiene productos en su carrito</p>
          )}

          <PurchaseSummaryComponent
            valueService={value.valueService}
            valueTotal={value.valueTotal}
            onPurchaseSuccessAction={handlePurchaseSuccess}
            cartItems={transformedCartItems}
          />
        </div>
      )}

      <ToasterCartComponent Open={open} setOpen={setOpen} />
    </div>
  );
}
