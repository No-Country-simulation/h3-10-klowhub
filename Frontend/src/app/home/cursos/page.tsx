'use client';

import { Details_Course_Modal } from "@/components/Details_Course/Details_Course";
import { detalles } from "@/mock/db";

export default function CursosLecciones() {
    const cursos = [
        { id: "1", nombre: "Curso 1" },
        { id: "2", nombre: "Curso 2" },
    ];

    const base = detalles;

    return (
        <>
            {
                base.map((items, index) => {
                    return (
                        <main className="grid grid-cols-2" key={index}>
                            <Details_Course_Modal datos={items} />
                        </main>
                    )
                })
            }
        </>
    );
}
