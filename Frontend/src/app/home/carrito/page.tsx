'use client'
import { CartItem, useCart } from "@/Hooks/useCart";

export default function Shopping_Cart() {
  const { cart, setCart } = useCart();

  function handleRemoveItem(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart as CartItem[]);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay cursos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((course: CartItem) => (
            <li key={course.id} className="flex justify-between items-center p-4 border-b">
              <div>
                <h3>{course.title}</h3>
                <p>Cantidad: {course.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(course.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

