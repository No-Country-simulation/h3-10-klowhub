'use client';

import { useBreadcrumbs } from '@/Hooks/useBreadcrumbs';
import Link from 'next/link';

export default function Cursos_lecciones() {
    const breadcrumbs = useBreadcrumbs();

    const dato = [
        { name: "Gestión de Inventarios con Power Apps" },
        { name: "Introducción a React" },

    ]

    return (
        <main className="p-4">
            <div className="flex flex-row mb-10">
                <ul className="flex flex-row items-center">
                    {breadcrumbs?.map(({ name, path, isLast }) => (
                        <li key={path} className="flex flex-row items-center">
                            <span className="mx-2">/</span>
                            {isLast ? (
                                <span className="font-bold">{name}</span>
                            ) : (
                                <Link href={path} className="hover:underline">
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul >
                    {dato.map((item, index) => {
                        return <li key={index}>
                            <Link href={`/home/cursos/${item.name}`} className="text-blue-600 hover:underline">
                                {item.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </main>
    );
}
