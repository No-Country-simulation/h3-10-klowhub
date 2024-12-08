import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import Button from '../interface/Button'

export default function ToasterCartComponent({Open, setOpen}: {Open: boolean, setOpen:Dispatch<SetStateAction<boolean>> }) {
 

  const handleClick = () => {
    setOpen(value => !value)
  }
  return (
    <div className={` top-0 ${Open ? 'scale-100' : 'scale-0'} fixed  w-full h-full flex items-center justify-center bg-black/50`}>
    <div className={`transition-all ${Open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} relative  max-w-[724px] px-8 py-11  flex flex-col items-center bg-[#1F2937]
    rounded-xl `}>
       <button onClick={handleClick} className='absolute top-3 right-4 
         rounded-sm items-center justify-center '>x</button>
        <p className='font-bold mb-4 '>¡Felicitaciones! Ya casi tienes tu nueva app</p>
        <p className='text-center'>Estamos encantados de que hayas elegido esta aplicación. El siguiente paso es coordinar la transferencia con el propietario.</p>
        
        <Image 
         src={'/ok.png'}
         width={59}
         height={89}
         alt='imagen de un bien'
         className='my-4'/>
         <Button TypeStyle='purple' 
           fnOnClick={() => {
             alert('sin funcion')
            }}
           >Solicitar transferencia</Button>
         <Button 
          TypeStyle='transparent'
           fnOnClick={() => {
            alert('sin funcion')
           }}>Ver más aplicaciones</Button>
        
    </div>
    </div>
  )
}
