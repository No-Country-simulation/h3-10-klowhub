'use client';
import { Breadcrumbs } from "@/components/Breadcrubs.tsx/Breadcrubs";
import { Details_Course_Modal } from "@/components/Details_Course/Details_Course";
import { detalles } from "@/mock/db";

export default function CursosLecciones() {

    const base = detalles;



    return (
        <main>
            <div className="ml-14 mt-7 mb-0">
                <Breadcrumbs name={"y Lecciones"} />
            </div>
            <div>
                {
                    base.map((items, index) => {
                        return (
                            <main className="grid grid-cols-2" key={index}>
                                <Details_Course_Modal datos={items} />
                            </main>
                        )
                    })
                }
            </div>
        </main>
    );
}