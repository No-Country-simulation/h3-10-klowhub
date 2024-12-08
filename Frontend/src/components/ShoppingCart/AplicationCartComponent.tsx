import React from 'react'
import { CardCursoLong} from '@/services/Interfaces'
import StarCartIcon from './Icons/StarCartIcon'
import MensageCartIcon from './Icons/MensageCartIcon'
import MovieCartIcon from './Icons/MovieCartIcon'
import LeafCartIcon from './Icons/LeafCartIcon'
import CaficationCartComponent from './CaficationCartComponent'
import Image from 'next/image'
export default function AplicationCartComponent(
  {
    title, 
    top, 
    sector, 
    seller, 
    stars, 
    punctuation, 
    tags, 
    children,
    url_img ,
    className
  }: CardCursoLong
) {
  const url = url_img == undefined ? "" : url_img
  return (
    <div className={`p-6 bg-[#FFFFFF1A] rounded-xl shadow-2xl w-full  ${className}`}>
      <hr/>
      <div className='my-3 flex  flex-wrap  gap-6 '>
        <Image
         src={url.length > 0 ? url: './imgApp.png'}
         alt={`imagen de ${title}`}
         width={245}
         height={245}
         className='w-[240px] rounded-xl max-lg:w-full'
         />
        <div className='flex flex-col gap-3'>
          <h6 className='font-bold text-base'>Aplicación para seguimiento de proyectos</h6>

          <div className='flex gap-3 text-sm'>
            <StarCartIcon/>
            <p>Top {top} apps más vendidas</p>
          </div>

           <div className='flex gap-3 text-sm'>
            <MensageCartIcon/>
            <p>Plataforma: {title}</p>
           </div>

           <div className='flex gap-3 text-sm'>
            <LeafCartIcon/>
            <p>Sector: {sector?.name}</p>
           </div>

           <div className='flex gap-3 text-sm'>
            <MovieCartIcon/>
            <p>Desarrollador %{seller?.isUserActive ? 'Verificado' : 'No verificado'}</p>
           </div>

           <div className='flex gap-3 text-sm'>
            <p>{punctuation}</p>
            <CaficationCartComponent valueStar={parseInt(punctuation)}/>
            <p>{`(${stars})`}</p>
           </div>
           
           <div className='flex gap-3 text-sm'>
             {tags.map((score,index) => (
              <span key={score+index} 
              className='rounded-lg bg-[#F3E3FBBF] text-[#812AAC] p-2 font-semibold'>{score}</span>
             ))}
           </div>
        </div>

        {children}
      </div>
      <hr />
    </div>
  )
}
