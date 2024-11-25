import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs"
import Link from "next/link";


export function Breadcrumbs() {

    

    const breadcrumbs = useBreadcrumbs();

    return (
        <div className="flex flex-row mt-4 mb-4">
            {breadcrumbs?.map(({ name, path, isLast }) => (
                <li key={path} className="flex flex-row items-center">
                    <span className="mx-2">/</span>
                    {isLast ? (
                        <div className="flex flex-row">
                            <span className="font-bold">{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</span>
                        </div>
                    ) : (
                        <Link href={path} className="hover:underline">
                            {name}
                        </Link>
                    )}
                </li>
            ))}
        </div>
    )
}

