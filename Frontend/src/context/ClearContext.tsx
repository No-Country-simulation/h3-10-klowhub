import React, { createContext, useState, useContext, ReactNode } from "react";

// Define el tipo de un item del carrito
interface CartItem {
  id: string;
  price: number;
  // Agrega otras propiedades según sea necesario
}

// Define el tipo del contexto
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void; // Agregar la función clearCart
}

// Crea el contexto
export const CleanContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}, // Valor inicial vacío
});

// Proveedor del contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Función para agregar un ítem al carrito
  const addItem = (item: CartItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Función para remover un ítem del carrito
  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setItems([]); // Limpia el estado
  };

  return (
    <CleanContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CleanContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CleanContext);
