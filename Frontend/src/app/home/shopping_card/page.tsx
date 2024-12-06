'use client';
import React, { useState, useEffect } from 'react';
import CartJson from '@/services/CartJson.json';
import AplicationCartComponent from '@/components/ShoppingCart/AplicationCartComponent';
import PurchaseSummaryComponent from '@/components/ShoppingCart/PurchaseSummaryComponent';
import ToasterCartComponent from '@/components/ShoppingCart/ToasterCartComponent';

export default function PageCart() {
  const [Open, setOpen] = useState(false);
  const [Carts, setCarts] = useState(CartJson);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  // Eliminar un elemento del carrito
  const fnDelete = (id: number) => {
    const updatedCarts = Carts.filter(cart => cart.id !== id);
    setCarts(updatedCarts);
    localStorage.setItem('cartItems', JSON.stringify(updatedCarts));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCarts(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="w-full p-5 pt-12 flex flex-col items-center justify-center">
      <h6 className="mb-8 mt-4 font-bold ">Tu carrito de compra</h6>
      {purchaseSuccess && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg">
          ¡Tus aplicaciones fueron compradas con éxito, felicidades!
        </div>
      )}
      <div className="grid grid-cols-[2fr_1fr] gap-5 max-md:flex-col max-md:items-center">
        <div className="w-full flex flex-col gap-3">
          {Carts.length === 0 ? (
            <p className="text-center h-full flex justify-center items-center font-bold text-2xl">
              No hay producto seleccionado
            </p>
          ) : (
            Carts.map(item => (
              <AplicationCartComponent
                key={item.id}
                id={item.id}
                Category={item.Category}
                Developer={item.Developer}
                Industry={item.Industry}
                Top={item.Top}
                nameProject={item.nameProject}
                numberOfScores={item.numberOfScores}
                numberVotes={item.numberVotes}
                urlImg={item.urlImg}
              >
                <button
                  className="transition-colors mt-auto ml-auto mr-6 p-2 rounded-xl hover:bg-gray-100/40"
                  onClick={() => fnDelete(item.id)}
                >
                  Eliminar
                </button>
              </AplicationCartComponent>
            ))
          )}
        </div>
        <div>
          {/* Componente con la información del cobro y el botón de compra */}
          <PurchaseSummaryComponent
            valueService={500}
            valueTotal={100}
            Carts={Carts}
            setCarts={setCarts}
            setPurchaseSuccess={setPurchaseSuccess}
          />
        </div>
      </div>
      <ToasterCartComponent Open={Open} setOpen={setOpen} />
    </div>
  );
}
