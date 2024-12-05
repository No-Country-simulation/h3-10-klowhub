import React from 'react'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Button from "../interface/Button"
const useCart = () => {
    const {removeFromCart} = useContext(CartContext)
  if(!removeFromCart){
    throw new Error('AddCart')
  }

  return removeFromCart;
}
export default function RemoveCart({id}: {id:number }) {

    const RemoveCart = useCart()
    const RemoveFromCart = () => {
      RemoveCart(id)
      return undefined
    }
      return (
      <Button TypeStyle="transparent" fnOnClick={RemoveFromCart}>
        <div className="flex justify-center items-center gap-1">
        <p className="flex items-center">Eliminar carito</p>
        </div>
      </Button>
    )
}
