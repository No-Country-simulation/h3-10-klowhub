'use client';
import { Breadcrumbs } from "@/components/Breadcrubs.tsx/Breadcrubs";
import CardCourse from "@/components/Card_Course/Card_Course";
import { Details_Course_Modal } from "@/components/Details_Course/Details_Course";
import { courseCard, detalles } from "@/mock/db";

export default function CursosLecciones() {

    const base = detalles;



    return (
        <main>
            <div className=" mb-0">
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
