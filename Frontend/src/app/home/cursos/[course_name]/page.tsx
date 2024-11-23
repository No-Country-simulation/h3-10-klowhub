'use client'
import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs"
import Link from "next/link";

export default function Course_Detail() {
    const breadcrumbs = useBreadcrumbs();



    return (
        <main>
            <div className="flex flex-row mt-4 mb-10">
                {breadcrumbs?.map(({ name, path, isLast }) => (
                    <li key={path} className="flex flex-row items-center">
                        <span className="mx-2">/</span>
                        {isLast ? (
                            <div className="flex flex-row">
                                <span className="font-bold">{name} / </span>
                            </div>
                        ) : (
                            <Link href={path} className="hover:underline">
                                {name}
                            </Link>
                        )}
                    </li>
                ))}
            </div>
        </main>
    )
}