import Image from 'next/image'
import React from 'react'

export default function ToasterCartComponent() {
  return (
    <div className='w-full max-w-[724px] p-8 bg-[#00000066] flex flex-col items-center rounded-xl'>
        <p className='font-bold mb-4 '>¡Felicitaciones! Ya casi tienes tu nueva app</p>
        <p className='text-center'>Estamos encantados de que hayas elegido esta aplicación. El siguiente paso es coordinar la transferencia con el propietario.</p>
        
        <Image 
         src='/ok.png'
         width={59}
         height={89}
         alt='imagen de un bien'
         className='my-4'/>
        <button className=''>Solicitar transferencia</button>
        <button>Ver más aplicaciones</button>
    </div>
  )
}
