'use client'
import { useState, useEffect } from "react";

export type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
};

export type Cart = CartItem[];

export function useCart(): {
    cart: Cart;
    addToCart: (course: CartItem) => void;
    setCart: React.Dispatch<React.SetStateAction<Cart>>;
} {
    const [cart, setCart] = useState<Cart>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    function addToCart(course: CartItem) {
        const updatedCart = [...cart];
        const existingCourse = updatedCart.find((item) => item.id === course.id);

        if (existingCourse) {
            existingCourse.quantity += 1;
        } else {
            updatedCart.push({ ...course, quantity: 1 });
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    return { cart, addToCart, setCart };
}

