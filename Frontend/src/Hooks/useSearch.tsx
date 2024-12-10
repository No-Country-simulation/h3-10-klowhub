'use client'
import { useEffect, useState } from "react";
import { ServiceApps } from "@/services/httpAplications";
import {CardCursoLong} from '@/services/Interfaces'
export function useSearch(search:string){
 const [apps, setApps] =  useState<CardCursoLong[]>([]);
 const [status, setStatus] = useState<number | undefined>(0)
    useEffect(() => {
       async function getServive() {
        const App = await ServiceApps(search)
       setApps(App?.data)
       setStatus(App?.status)
     }
       getServive()
    }, [search]);

    return {apps,status}
} 