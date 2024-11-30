'use client'
import AplicationCartComponent from '@/components/ShoppingCart/AplicationCartComponent'
import CheckSteps from '@/components/ShoppingCart/Cartsteps/CheckSteps'
import DetailsItemcart from '@/components/ShoppingCart/Cartsteps/DetailsItemcart'
import Step1 from '@/components/ShoppingCart/Cartsteps/Step1'
import Step2 from '@/components/ShoppingCart/Cartsteps/Step2'
import Step3 from '@/components/ShoppingCart/Cartsteps/Step3'
import RepoCartComponent from '@/components/ShoppingCart/RepoCartComponent'
import CartJson from '@/services/CartJson.json'
import Link from 'next/link'
import React, { useState } from 'react'

export default function PageCartsteps() {

  const [steps, setSteps] = useState({
    step1: {
      status: false,
      step: true
    },
    step2: {
      status: false,
      step: false
    },
    step3: {
      status: false,
      step: false
    }
  })


  return (
    <div className='p-4 '>
      <RepoCartComponent />
      <h6 className='my-3'>Tu carrito de compras</h6>
      <CheckSteps steps={steps} setSteps={setSteps} />
      {steps.step3.step ? <Step3 /> : ''}
      <div className='px-6 max-sm:p-0'>
        <div className='w-full  flex justify-between max-md:flex-col gap-8 my-10 '>
          <AplicationCartComponent
            id={CartJson[0].id}
            Category={CartJson[0].Category}
            Developer={CartJson[0].Developer}
            Industry={CartJson[0].Industry}
            Top={CartJson[0].Top}
            nameProject={CartJson[0].nameProject}
            numberOfScores={CartJson[0].numberOfScores}
            numberVotes={CartJson[0].numberVotes}
            urlImg={CartJson[0].urlImg}
          >
            <button className='transition-colors mt-auto ml-auto mr-6 p-2 rounded-xl hover:bg-gray-100/40'
            >Ver detalles</button>
          </AplicationCartComponent>

          <DetailsItemcart
            nameAplication={CartJson[0].nameProject}
            valueShopping={50}
            valueTotal={40}
            PaymentMethod='PayPal'
            Dateofshopping='27 de Noviembre 2024'
            language='Español'
            dateCupon={'AB75698S(20%)'} />


        </div>

        {steps.step1.step ? <Step1 setStepAction={setSteps} steps={steps} /> : ''}
        {steps.step2.step ? <Step2 steps={steps} setStep={setSteps} nameProject='AppSheetHub' /> : ''}
      </div>


      <p className='my-6 text-sm text-center text-[#95979D]'>¿Tenés alguna pregunta? No dudes en escribirnos a klowhub@soporte.com o visitar nuestro centro de ayuda. ¡Estamos aquí para asistirte!</p>
      <div className='text-sm flex justify-center gap-4'>
        <Link className='text-[#7CB4FF]' href={''}>Centro de ayuda</Link>
        <Link className='text-[#7CB4FF]' href={''}>Soporte</Link>
      </div>
    </div>
  )
}
