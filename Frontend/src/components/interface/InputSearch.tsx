import React, { Dispatch, SetStateAction } from 'react'
export default function InputSearch({ placeholder, setSearch}:{placeholder:string,setSearch:Dispatch<SetStateAction<string>>}) {
  return (
    <div>
        <input className='text-black w-full p-2 rounded-lg my-4' placeholder={placeholder} name='search' onChange={(e) => {
            setSearch(e.target.value);
        }}/>
    </div>
  )
}
