'use client'
import { useEffect, useState } from "react";
import { ServiceApps } from "@/services/httpAplications";
import {CardCursoLong} from '@/services/Interfaces'
export function useSearch(search:string){
 const [apps, setApps] =  useState<CardCursoLong[]>([]);
    useEffect(() => {
       async function getServive() {
        const newApps = await ServiceApps(search)
       setApps(newApps)    
     }
       getServive()
    }, [search]);

    return {apps}
} 