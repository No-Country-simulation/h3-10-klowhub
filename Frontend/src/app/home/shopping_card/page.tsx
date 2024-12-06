'use client'
import RepoCartComponent from '@/components/ShoppingCart/RepoCartComponent'
import React, { useContext, useState } from 'react'
import AplicationCartComponent from '@/components/ShoppingCart/AplicationCartComponent'
import PurchaseSummaryComponent from '@/components/ShoppingCart/PurchaseSummaryComponent'
import ToasterCartComponent from '@/components/ShoppingCart/ToasterCartComponent'
import { CartContext } from '@/context/CartContext'
import RemoveCart from '@/components/AddItemCart/RemoveCart'
export default function PageCart() {
  const {items} = useContext(CartContext)
  const [Open, setOpen] = useState(false)

    
  const [Carts, setCarts] = useState(CartJson)
    console.log(CartJson)

    const fnDelete = (id:number) => {
      setCarts(Carts.filter( cart => cart.id !== id))
      return undefined
    }
  return (
    <div className='w-full p-5 pt-12 flex flex-col items-center justify-center'>
        <RepoCartComponent/>
        <h6 className='mb-8 mt-4 font-bold '>Tu carrito de compra</h6>
        
     {items.length > 0 ? <div className=' flex gap-5 max-md:flex-col max-md:items-center  '>
    
     <div className='w-full flex flex-col gap-3 '>
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

            punctuation={item.punctuation}
            url_img={'/imgApp.png'}
            >

              <div className='mb-0 mt-auto'>
              <RemoveCart id={item.id}/>
              </div>
            </AplicationCartComponent>
            
        ))}
        <RepoCartComponent/>
        <h6 className='mb-8 mt-4 font-bold '>Tu carrito de compra</h6>
        
     <div className=' flex gap-5 max-md:flex-col max-md:items-center  '>
     <div className='w-full flex flex-col gap-3 '>
        {Carts.map(item => (
            <AplicationCartComponent
            key={item.id}
            id={item.id}
            Category={item.Category}
            Developer={item.Developer}
            Industry={item.Industry}
            Top={item.Top}
            nameProject={item.nameProject}
            numberOfScores={item.numberOfScores}
            numberVotes={item.numberVotes}
            urlImg={item.urlImg}
            >
              <button className='transition-colors mt-auto ml-auto mr-6 p-2 rounded-xl hover:bg-gray-100/40'
               onClick={ () => fnDelete(item.id)}>Eliminar</button>
            </AplicationCartComponent>
            
        ))}
        </div>
        <PurchaseSummaryComponent valueService={500} valueTotal={100}/>
     </div> 
      : <p>No tiene productos en su carrito</p> }
    
  
    <ToasterCartComponent Open={Open} setOpen={setOpen}/>
        <PurchaseSummaryComponent valueService={500} valueTotal={100}/>
     </div>
    
  
    <ToasterCartComponent Open={Open} setOpen={setOpen}/>
    </div>
        
   
  )
}
