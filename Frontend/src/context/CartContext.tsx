'use client'
import React, { createContext, useReducer } from "react"
import { CardCursoLong } from "@/services/Interfaces";



  
  interface CartContextType {
    items: CardCursoLong[] | never[];
    addToCart?:  (product: CardCursoLong) => void;
    removeFromCart?: (id: number) => void;
  }
  
export const CartContext = createContext< CartContextType >({
    items:[],
})

const cartReducer = (state:object, action:{type:string,payload:{items:CardCursoLong[]}}) => {
    const {type, payload } = action;
    switch (type) {
        case "ADD": 
         return {
            ...state,
            items: payload.items,
         };
         case "REMOVE":
            return {
                ...state,
                items: payload.items,
            };
        default:
            throw new Error("No cumple con ninguna acción")
    }
}
export  function CartProvider({children}: {children:React.ReactNode}) {
    const [state, dispach] = useReducer(cartReducer, {items:[]});

    const addToCart = (product:CardCursoLong) => {
        const updatedCart = [...state.items, product]
        dispach({
            type: 'ADD',
            payload: {
                items: updatedCart
            }
        });

    }

    const removeFromCart = (id:number) => {
        const updatedCart = state.items.filter(
            (currentProduct:CardCursoLong) => currentProduct.id !== id
        );

        dispach({
            type: "REMOVE",
            payload: {
                items: updatedCart,
            },
        });
    }

    const value = {
        items: state.items,
        addToCart,
        removeFromCart,
    }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
  
}
