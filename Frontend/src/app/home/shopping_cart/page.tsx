'use client'
import React, { useContext, useEffect, useState } from 'react'
import AplicationCartComponent from '@/components/ShoppingCart/AplicationCartComponent'
import PurchaseSummaryComponent from '@/components/ShoppingCart/PurchaseSummaryComponent'
import ToasterCartComponent from '@/components/ShoppingCart/ToasterCartComponent'
import { CartContext } from '@/context/CartContext'
import RemoveCart from '@/components/AddItemCart/RemoveCart'
import { Breadcrumbs } from '@/components/Breadcrubs.tsx/Breadcrubs'
export default function PageCart() {
  const {items} = useContext(CartContext)
  const [Open, setOpen] = useState(false)
 const [value, steValue] = useState<{valueTotal:number, valueService:number}>({valueTotal:0, valueService:0})
    useEffect(() => {
      items.forEach(item => {
        steValue({
          ...value,
          valueTotal: item.price ? parseInt(item.price) : 0 + value.valueTotal
        })
      })
    },[])
  return (
    <div className='w-full p-5 pt-12 flex flex-col items-center justify-center'>
        <Breadcrumbs/>
        <h6 className='mb-8 mt-4 font-bold '>Tu carrito de compra</h6>
        
    <div className='w-full  flex gap-5 max-md:flex-col max-md:items-center  '>
    
    {items.length > 0 ? <div className='w-full flex flex-col gap-3 '>
        {items.map(item => (
            <AplicationCartComponent
            key={item.id}
            id={item.id}
            sector={item.sector}
            seller={item.seller}
            tags={item.tags}
            top={item.top}
            title={item.title}
            stars={item.stars}
            platform={item.platform}
            punctuation={item.punctuation}
            url_img={'/imgApp.png'}
            >

              <div className='mb-0 mt-auto'>
              <RemoveCart id={item.id}/>
              </div>
            </AplicationCartComponent>       
        ))}
        </div>
         : <p className='text-center w-full'>No tiene productos en su carrito</p> }
        <PurchaseSummaryComponent valueService={50} valueTotal={ value.valueTotal}/>
     </div> 
     
    
  
    <ToasterCartComponent Open={Open} setOpen={setOpen}/>
    </div>


  )
}
