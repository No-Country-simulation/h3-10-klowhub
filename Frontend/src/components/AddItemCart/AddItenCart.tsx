import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../interface/Button"
import { CardCursoLong } from "@/services/Interfaces"
import { Icon_Shopping_Cart } from "../../../public/icons/Header_Icon/Shopping_cart"

const useCart = () => {
    const {addToCart} = useContext(CartContext)
  if(!addToCart){
    throw new Error('AddCart')
  }

  return addToCart;
}

export default function AddItenCart({items}: {items:CardCursoLong }) {
  
  const addToCart = useCart()
  const AddCart = () => {
    addToCart(items)
    return undefined;
  }
    return (
    <Button TypeStyle="purple" fnOnClick={AddCart}>
      <div className=" flex justify-center items-center gap-1">
      <Icon_Shopping_Cart />
      <p className=" flex items-center">Añadir al carrito</p>
      </div>
    </Button>
  )
}
