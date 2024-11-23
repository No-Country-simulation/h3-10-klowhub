'use client';

import { useBreadcrumbs } from '@/Hooks/useBreadcrumbs';
import Link from 'next/link';

export default function Cursos_lecciones() {
    const breadcrumbs = useBreadcrumbs();

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

                <ul>
                    <li>
                        <Link href="/home/cursos/1" className="text-blue-600 hover:underline">
                            Curso 1: Gestión de Inventarios con Power Apps
                        </Link>
                    </li>
                    <li>
                        <Link href="/home/cursos/2" className="text-blue-600 hover:underline">
                            Curso 2: Introducción a React
                        </Link>
                    </li>
                    <li>
                        <Link href="/home/cursos/3" className="text-blue-600 hover:underline">
                            Curso 3: Curso Avanzado de Next.js
                        </Link>
                    </li>
                    <li>
                        <Link href="/home/cursos/4" className="text-blue-600 hover:underline">
                            Curso 4: Diseño Responsivo
                        </Link>
                    </li>
                    <li>
                        <Link href="/home/cursos/5" className="text-blue-600 hover:underline">
                            Curso 5: Introducción a Tailwind CSS
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}
