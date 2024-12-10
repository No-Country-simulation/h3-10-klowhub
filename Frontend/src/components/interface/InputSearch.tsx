import React, { Dispatch, SetStateAction } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import {Icon_Search} from '../../../public/icons/Icon_Search'
export default function InputSearch({ placeholder, setSearch}:{placeholder:string,setSearch:Dispatch<SetStateAction<string>>}) {

  const [debouncedCallback] = useDebouncedCallback(
    // function
    (value:string) => {
      setSearch(value);
      console.log(value)
    },
    // delay in ms
    800
  );
  return (
    <div className='relative'>
        <div className='absolute left-1 flex h-full items-center '>
         <Icon_Search/>
        </div>
        <input className='text-black w-full p-2 pl-6 rounded-lg ' placeholder={placeholder} name='search'
        type='search'
        onChange={(e) => {
             
            debouncedCallback(e.target.value)  
          
        }}/>
    </div>
  )
}
