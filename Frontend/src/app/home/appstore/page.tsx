'use client'
import { Breadcrumbs } from '@/components/Breadcrubs.tsx/Breadcrubs';

import CardCourse from '@/components/Card_Course/Card_Course';
import InputSearch from '@/components/interface/InputSearch';
import { useSearch } from '@/Hooks/useSearch';
import React, { useState } from 'react'

export default function Page() {
    const [search, setSearch] = useState('')
    const {apps,status} = useSearch(search)
    return (
        <main>
            <div className=" mb-0">
                <Breadcrumbs />
            </div>
            <div className='px-5'>
               <h6 className='font-semibold my-3'>Encuentra la app que necesitas</h6>
              <InputSearch setSearch={setSearch} placeholder="Buscar cursos y lecciones" />
              <p className='font-semibold my-3'>App recomendadas</p>
              {status === 400
              ?<p>Ampliación no encontrada</p>
              :<div className='grid gap-2'
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
            }}>
                {apps.map( app => (
                    <CardCourse
                    key={app.id}
                    course={app}
                    />
                ))}
              </div>}
              
              
              
            </div>
        </main>
    );
}