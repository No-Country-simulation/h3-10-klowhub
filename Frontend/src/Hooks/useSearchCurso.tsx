'use client'
import { useEffect, useState } from "react";
import { ServiceCurso } from "@/services/httpAplications";
import {CardCursoLong} from '@/services/Interfaces'
export function useSearchCurso(search:string){
 const [Curso, setApps] =  useState<CardCursoLong[]>([]);
 const [status, setStatus] = useState<number | undefined>(0)
    useEffect(() => {
       async function getServive() {
        const curso = await ServiceCurso(search)
      const status = curso?.status ? curso.status : 0
        if(status !== 200) return
        setApps([curso?.data])
       setStatus(curso?.status)
     }
       getServive()
    }, [search]);

    return {Curso,status}
} 