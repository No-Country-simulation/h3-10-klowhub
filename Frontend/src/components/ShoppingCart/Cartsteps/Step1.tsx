'use client'
import Inputlogin from '@/components/FormLogin/Input-login'
import Button from '@/components/interface/Button'
import React, { useEffect} from 'react'
import { step1 } from '@/services/Interfaces'
export default function Step1({steps,setStep}:step1) {

       useEffect(() => {
        setStep({
            ...steps,
            step1:{
                ...steps.step1,
            step:true
            }
           })
       },[])
        return (
    <div className='flex flex-col items-start gap-3'>
        <h6 className='font-semibold'>Envia tu correo electrónico al creador de la app para que pueda darte acceso</h6>
        <label>Ingresa tu correo con el que vas a acceder a la aplicación</label>
        <Inputlogin 
        className='max-w-[400px] mb-5'
        placeholder='Correo' name='email' type='emial'/>
        <Button 
         TypeStyle='purple'
         fnOnClick={ ()=> {
           setStep({
            ...steps,
            step1:{
                ...steps.step1,
                status:true,
                step:false
            },
            step2:{
              ...steps.step2,
              step:true
            }
           })
           
        }}>Enviar</Button>
    </div>
  )
}
