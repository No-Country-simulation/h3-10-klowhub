import React from 'react'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../interface/Button"
import {Icon_Delete} from "../../../public/icons/Details_Course_Icon/Icon_Delete"
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
        <div className="py-2 flex justify-center items-center gap-1">
          <Icon_Delete/>
        <p className="flex items-center">Eliminar carrito</p>
        </div>
      </Button>
    )
}
