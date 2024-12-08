'use client'
import StarIcon from "./Icons/StarIcon"
import StarCalificationIcon from './Icons/StarCalificationIcon'
import  rellenarStar from "./logic/logic"
import { useState } from "react"
export default function CaficationCartComponent({valueStar}: {valueStar: number}) {
    
 const value = rellenarStar(valueStar)
 const [puntuation] = useState(value)

 console.log(value)
return (
    <div className='flex gap-1'>
     {puntuation.map((item,index) => (
      item > 0 
      ? item === 1 
       ? <StarIcon key={index} color={'#FBBC05'}/> 
       
       : <StarCalificationIcon key={index + item} value={0.5} />
      
       :
       <StarIcon key={index} color={'white'}/>
     ))}
        
    </div>
  )
}
