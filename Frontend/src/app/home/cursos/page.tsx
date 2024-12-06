'use client';
import { Breadcrumbs } from "@/components/Breadcrubs.tsx/Breadcrubs";
import CardCourse from "@/components/Card_Course/Card_Course";
import { Details_Course_Modal } from "@/components/Details_Course/Details_Course";
import { detalles } from "@/mock/db";
import CartJson from '@/services/CartJson.json'
export default function CursosLecciones() {

    const base = detalles;

    return (
        <main>
            <div className=" mb-0">
                <Breadcrumbs />
            </div>
            <div>
                {CartJson.map( item => (
                    <CardCourse key={item.id} course={item}/>
                ))}
              
            </div>
        </main>
    );
}
