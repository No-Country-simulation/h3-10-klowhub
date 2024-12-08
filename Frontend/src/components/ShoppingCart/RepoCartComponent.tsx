import Link from 'next/link'
import React from 'react'

export default function RepoCartComponent() {
  return (
    <div className='flex gap-3 flex-wrap font-semibold items-center '>
        <Link href={''}>Home</Link><span>/</span>
        <Link href={''}>Appstore</Link><span>/</span>
        <Link href={''}>Aplicación para seguimientos de proyectos</Link><span>/</span>
        <Link href={''}>Carrito de compra</Link>
    </div>
  )
}
