import React from 'react'
import MensajeCart from './MensajeCart'
import SendMessage from './SendMessage'
import Image from 'next/image'
import { Info_Icon } from '../../../../public/icons/Header_Icon/Info'
import Button from '@/components/interface/Button'
import CaficationCartComponent from '../CaficationCartComponent'
import { step2 } from '@/services/Interfaces'

export default function Step2({nameProject,steps,setStep}:step2){
  return (
    <div className='my-5'>
        <h6 className='font-bold mb-3'>Introducción a {nameProject} y Fundamentos Básicos</h6>
        <p className='mb-10'>Ingresa tu correo con el que vas a acceder a {nameProject}</p>
        <div className='flex gap-3 max-lg:flex-col bg-[#00000066] p-5 max-md:px-0 max-md:pt-0  rounded-lg ' >
            
            <section className='w-full ' >
             <div className='bg-white flex flex-col gap-4 p-3 rounded-t-lg'>
              <div className='flex  bg-slate-500 justify-between items-center p-2'>
              
              <div className='flex gap-2 justify-end'>
                <Image 
                 src={'/img/Details_Course/avatar.png'}
                 alt='imagen del avatar'
                 width={60}
                 height={60}/>
                 <div className='text-xs'>
                  <p className='font-semibold'>Nombre del Cliente</p>
                  <span>Online</span>
                 </div>
              </div>

              <p className='mt-0 text-xs'>15 de agosto</p>

              <div>
                <span>:</span>
              </div>

              </div>
             <MensajeCart 
               Title='YhordiDev'
                description='EL usuario realizo la compra de la siguiente app'
                time='18:30'   >
                  <div>
                    <div className='flex shadow-2xl max-md:flex-col rounded-xl bg-[#FFFFFF1A]'>
                      <Image src={'/imgApp.png'}
                       alt='imagen de app'
                        width={150}
                        height={150}
                        className='rounded-l-xl max-md:w-full '/>
                        <div className='p-2 flex flex-col gap-2'>
                          <h6>Aplicación para seguimiento de proyectos </h6>
                          
                          <section className='flex gap-2 items-center '>
                            <span>4.5</span>
                            <CaficationCartComponent valueStar={4.5}/>
                            <span>(74)</span>
                          </section>

                          <ul className='flex gap-2 justify-around mt-2'>
                            <li className='bg-[#F3E3FBBF] text-[#812AAC] p-1 rounded-lg'>Equipo</li>
                            <li className='bg-[#F3E3FBBF] text-[#812AAC] p-1 rounded-lg'>Organización</li>
                            <li className='bg-[#F3E3FBBF] text-[#812AAC] p-1 rounded-lg'>CRM</li>
                          </ul>
                        </div>
                    </div>
                    <p className='mt-2 bg-[#F3E3FBBF] text-[#812AAC] p-1 rounded-lg'>Correo: yhordidev@gmail.com</p>
                  </div>
              </MensajeCart>
              <MensajeCart
               Title='ALternative'
               description='Asistencia y respuestas a tus preguntas durante el curso para asegurarte de que entiendas cada concepto.'
                time='18:30'
                className={'mr-0 ml-auto'}
               />
             </div>
             <SendMessage/>
            </section>

            <div className='flex flex-col items-center  w-full max-w-[400px] h-max  mx-auto '>
          <div className='flex justify-center gap-4 bg-white/80 p-4 rounded-xl mb-6 mx-1'>
            <Info_Icon height={40} width={40}/>
            <section className='text-[#702486] '>
              <p>Recordá adjuntar los comprobantes necesarios para completar el proceso de manera correcta.</p>
              <ul className='list-disc'>
                <li>Solicitud de transferencia</li>
                <li> Transferencia realizada</li>
              </ul>
            </section>
          </div>

          <Button fnOnClick={() => {alert('Recibir aplicación')
             setStep({
              ...steps,
              step2:{
                  ...steps.step2,
                  status:true,
                  step:false
              },
              step3:{
                ...steps.step3,
                status:true,
                step:true
              }
             })
          }} TypeStyle='purple'>Recibir la aplicación</Button>
        </div>
        </div>
        
       
    </div>
  )
}
