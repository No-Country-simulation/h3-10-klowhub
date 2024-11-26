import Image from 'next/image'
import React from 'react'

export default function ToasterCartComponent() {
  return (
    <div>
        <p>¡Felicitaciones! Ya casi tienes tu nueva app</p>
        <p>Estamos encantados de que hayas elegido esta aplicación. El siguiente paso es coordinar la transferencia con el propietario.</p>
        
        <Image 
         src='ok.png'
         width={59}
         height={89}
         alt='imagen de un bien'/>
        <button>Solicitar transferencia</button>
        <button>Ver más aplicaciones</button>
    </div>
  )
}
