'use client'
import { Dispatch, SetStateAction, useState } from "react";

export default function CuponInputComponent({SetTotal, valueTotal, valueService}:{SetTotal:Dispatch<SetStateAction<number>>, valueService:number,valueTotal:number}) {
  const [discountPercentage, setdiscountPercentage] = useState(0)
  const [dateCupon,setdateCupon] = useState('')

  const handleClick = () => {
    
    if(dateCupon === '5SD8F20'){
        setdiscountPercentage(20)
        const discountPercentage = (valueTotal + valueService) *0.2
        SetTotal((valueTotal + valueService) - discountPercentage)
    }
  }
    return (
    <div className="mb-4">
        <h6>Cupón de descuento</h6>
        <section className="flex justify-between gap-6 my-2">
        <input type="text" name="cupon" placeholder="5SD8F20"
        className="w-full rounded-md p-2 bg-transparent border-solid border-white border-[1px]"
         onChange={(e) => {
            setdateCupon(e.target.value);
         }}/>
          <button className="bg-transparent border-solid border-white border-[1px] rounded-md px-2" onClick={handleClick}>Ingresar</button>        
        </section>
        
        <div className="flex justify-between mt-5">
            <h6>Cupón HotSale</h6>
            <p>{discountPercentage}%</p>
        </div>
    </div>
  )
}
