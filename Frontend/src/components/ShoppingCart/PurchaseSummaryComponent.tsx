'use client'
import Link from "next/link";
import CuponInputComponent from "./CuponInputComponent";
import { useState } from "react";

export default function PurchaseSummaryComponent({valueTotal, valueService}:{valueTotal:number, valueService:number}) {
    const [total, setTotal] = useState(valueService + valueTotal)  
    return (
    <div className="bg-[#1F2937] p-5 rounded-xl h-max w-full max-w-[411px]">
        <h6 className="font-bold text-xl  mb-3">Resumen</h6>
        
        <div className="flex justify-between">
            <h6>Subtotal</h6>
            <p>${valueTotal}</p>
        </div>
        <div className="flex justify-between mb-3">
            <h6>Tarifa de servicio</h6>
            <p>${valueService}</p>
        </div>
        
       <CuponInputComponent SetTotal={setTotal} valueService={valueService} valueTotal={valueTotal}/>

        <div className="flex justify-between">
            <h6>Total</h6>
            <p>${total}</p>
        </div>
        
        <div>
         <p className="mt-5">Seleccionar un método de pago</p>
         <div className="flex justify-around items-center my-3">
            <p className="h-14 w-24 rounded-xl flex  items-center justify-center bg-white
             text-[#6461FC] font-black text-2xl ">Stripe</p>
            <p className="h-14 w-24 rounded-xl flex  items-center justify-center bg-white
             text-[#253B80] font-black text-2xl">PayPal</p>
            <p className="h-14 w-24 rounded-xl flex  items-center justify-center bg-white
             text-green-600 font-black text-2xl">BCP</p>
         </div>
        </div>

        <Link href={''} className="text-[#7CB4FF] text-center">Al comprar/contratar los productos aceptas los términos y condiciones</Link>
        

    </div>
  )
}
