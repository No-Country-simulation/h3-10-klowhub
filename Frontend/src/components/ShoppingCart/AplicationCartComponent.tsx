import Image from 'next/image'
import React from 'react'
import { AplicationCart } from '@/services/Interfaces'
import StarCartIcon from './Icons/StarCartIcon'
import MensageCartIcon from './Icons/MensageCartIcon'
import MovieCartIcon from './Icons/MovieCartIcon'
import LeafCartIcon from './Icons/LeafCartIcon'
import CaficationCartComponent from './CaficationCartComponent'
export default function AplicationCartComponent({ date }: { date: AplicationCart }) {

  const { urlImg, nameProject, Top,Industry,Developer,numberOfScores,numberVotes,Category,children,className }: AplicationCart = date;
  return (
    <div className={`p-6 bg-[#FFFFFF1A] rounded-xl shadow-2xl w-full  ${className}`}>
      <hr />
      <div className='my-3 flex flex-wrap gap-6'>
        <Image src={urlImg}
          alt={`Es la imagen de la aplicación ${nameProject}`}
          width={240}
          height={240}
          className='rounded-xl max-lg:w-full' />
        <div className='flex flex-col gap-3'>
          <h6 className='font-bold text-base'>Aplicación para seguimiento de proyectos</h6>

          <div className='flex gap-3 text-sm'>
            <StarCartIcon />
            <p>Top {Top} apps más vendidas</p>
          </div>

          <div className='flex gap-3 text-sm'>
            <MensageCartIcon />
            <p>Plataforma: {nameProject}</p>
          </div>

          <div className='flex gap-3 text-sm'>
            <LeafCartIcon />
            <p>Sector: {Industry}</p>
          </div>

          <div className='flex gap-3 text-sm'>
            <MovieCartIcon />
            <p>Desarrollador %{Developer ? 'Verificado' : 'No verificado'}</p>
          </div>

          <div className='flex gap-3 text-sm'>
            <p>{numberOfScores}</p>
            <CaficationCartComponent valueStar={numberOfScores} />
            <p>{`(${numberVotes})`}</p>
          </div>

          
        </div>

        {children}
      </div>
      <hr />
    </div>
  )
}
