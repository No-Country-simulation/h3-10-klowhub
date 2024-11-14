import React from 'react'
interface inputdate{
 type: string,
 name: string,
 placeholder: string,
 className?: string 
}

export default function Inputlogin({type, name, placeholder,className}: inputdate) {
  return (
    <input className={`w-full p-4 rounded-lg text-black ${className !==undefined ? className : ''}`} type={type} name={name} placeholder={placeholder} /> 
  )
}
