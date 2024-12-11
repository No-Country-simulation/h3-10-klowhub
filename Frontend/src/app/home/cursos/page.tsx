'use client';
import { Breadcrumbs } from "@/components/Breadcrubs.tsx/Breadcrubs";
import CardCoursLong from "@/components/Card_Course/card_CourseLong";
import InputSearch from "@/components/interface/InputSearch";
import { useSearchCurso } from "@/Hooks/useSearchCurso";
import { useState } from "react";
export default function CursosLecciones() {
    const [search, setSearch] = useState('')
    const {Curso} = useSearchCurso(search)
    console.log(Curso)
    return (
        <main>
            <div className=" mb-0">
                <Breadcrumbs />
            </div>
            <div className=" px-6">
               <h6 className='font-semibold my-3'>Encuentra el aprendizaje que estas buscando</h6>
               <InputSearch setSearch={setSearch} placeholder="Buscar cursos y lecciones" />
              
             
              <div className=' mt-10'
              >
                {Curso.length > 0  ? 
                   Curso.map( curso => (
                  <CardCoursLong
                    key={curso.id}
                    course={curso}
                    />
                    
                )) :<p>No hay cursos</p> 
            }
              </div>
              
             
            </div>
        </main>
    );
}
