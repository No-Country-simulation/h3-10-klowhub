'use client';

import { Details_Course_Modal } from "@/components/Details_Course/Details_Course";
import { Header } from "@/components/Layout/Header";
import { detalles } from "@/mock/db";

export default function CursosLecciones() {
    const cursos = [
        { id: "1", nombre: "Curso 1" },
        { id: "2", nombre: "Curso 2" },
    ];

    const base = detalles;

    return (
        <>
        <Header />
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
