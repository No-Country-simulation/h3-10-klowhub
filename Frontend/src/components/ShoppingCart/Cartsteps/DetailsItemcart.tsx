import {PropsDetailsAppCart} from "@/services/Interfaces"
export default function DetailsItemcart(
    {nameAplication,language,Dateofshopping,dateCupon, valueShopping,valueTotal,PaymentMethod}:PropsDetailsAppCart) {
  return (
    <div className="mx-auto bg-[#FFFFFF1A] rounded-xl p-5 text-xs flex flex-col  gap-2 w-full h-max max-w-[399px]">
        <h6 className=" text-sm font-semibold">Resumen de compra</h6>
        
        <section className="flex gap-10 mt-3">
            
        <section className="flex flex-col gap-3 ">
            <p>Aplicación</p>
            <p>Idioma</p>
            <p>Fecha de compra</p>
            <p>Precio</p>
            <p>Cupon</p>
            <p>Medio de pago</p>
            <p>Total</p>
           
        </section>
        <section className="flex flex-col gap-3 justify-between">
          <p>Gestion de inventarios con{nameAplication}</p>
          <p>{language}</p>
          <p>{Dateofshopping}</p>
          <p>${valueShopping}</p>        
          {dateCupon !== null 
            ? <p>Cupón {dateCupon}</p>
            : <p>Sin cupón</p>}
            <p>{PaymentMethod}</p>
            <p>${valueTotal}</p>
        </section>    
        </section>
    </div>
  )
}
