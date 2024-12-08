'use client'
import { Dispatch, SetStateAction } from "react"
import GoodIcon from "../Icons/GoodIcon"
import {  Steps } from "@/services/Interfaces";

export default function CheckSteps({ steps}: { steps: Steps; setSteps: Dispatch<SetStateAction<Steps>> }) {
  return (
    <div className="flex gap-5  w-full justify-center max-md:scale-50">
      <section className={` flex gap-3 flex-col items-center ${steps.step1.step ? 'opacity-100' : 'opacity-70'}`}>
        <div className="ml-20  flex justify-center items-center gap-1 ">
        <span className={`flex items-center justify-center w-10 h-10 rounded-full
          ${steps.step1.status ? 'bg-[#9D32BC]' : 'bg-white'}  text-black`}>
            {steps.step1.status 
            ? <GoodIcon/>
            : '1'}</span>
        <hr className={`h-1 w-[70px] ${steps.step1.status ? 'border-[#9D32BC]' : 'border-white'}`}/>
        </div>
        <p>Compra aprobada</p>
      </section>
        
      <section className={`flex gap-3 flex-col items-center ${steps.step2.step ? 'opacity-100' : 'opacity-70'}`}>
        <div className="flex  justify-center items-center gap-1 ">
          <hr className={`h-1 w-[70px] ${steps.step2.status ? 'border-[#9D32BC]' : 'border-white'}`}/>
       <span className={`flex items-center justify-center w-10 h-10 rounded-full
          ${steps.step2.status ? 'bg-[#9D32BC]' : 'bg-white'}  text-black`}>
            {steps.step2.status 
            ? <GoodIcon/>
            : '2'}</span>
        <hr className={`h-1 w-[70px] ${steps.step2.status ? 'border-[#9D32BC]' : 'border-white'}`}/>
        </div>
        <p>Enviar correo</p>
      </section>

      <section className={`flex gap-3 flex-col justify-center items-center ${steps.step3.step ? 'opacity-100' : 'opacity-70'}`}>
        <div className=" mr-20 flex justify-center items-center gap-1 ">
        <hr className={`h-1 w-[70px] ${steps.step3.status ? 'border-[#9D32BC]' : 'border-white'}`}/>
        <span className={`flex items-center justify-center w-10 h-10 rounded-full
          ${steps.step3.status ? 'bg-[#9D32BC]' : 'bg-white'}  text-black`}>
            {steps.step3.status 
            ? <GoodIcon/>
            : '3'}</span>
      
        </div>
        <p className="">Tendencia realizada</p>
      </section>
        
    </div>
  )
}
