import React from 'react'
import ChequeDobleIcon from '../Cartsteps/Carts_Icons/ChequeDobleIcon'
export default function MensajeCart({Title,description,children,time,className}
    :{Title:string,
      description:string,
      children?:React.ReactNode,
      time:string,
      className?:string
    }) {
  return (
    <div className={`${className} text-xs w-full max-w-[471px]  bg-[#1F2937BF] rounded-xl 
    p-6 flex flex-col gap-2 max-sm:w-[230px] max-sm:p-3`}>
        <section className='flex justify-between'>
         <h6 className='text-xs font-semibold'>{Title}</h6>
        <button>:</button>
         
        </section>
        
        <p className='text-xs'>{description}</p>
        {children}
        <section className='flex justify-between'>
            <span className='text-xs'>{time}</span>
            <ChequeDobleIcon/>
        </section>
    </div>
  )
}
