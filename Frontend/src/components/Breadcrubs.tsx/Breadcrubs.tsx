import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs"
import Link from "next/link";


export function Breadcrumbs({ name }: any) {

    const breadcrumbs = useBreadcrumbs();

    const info = name;

    return (
        <div className="flex flex-row mt-4 mb-4">
            {breadcrumbs?.map(({ name, path, isLast }) => (
                <li key={path} className="flex flex-row items-center">
                    <p className="mx-2"></p>
                    {isLast ? (
                        <div className="flex flex-row">
                            <span className="font-bold">{` ${name.charAt(0).toUpperCase()}${name.slice(1)} ${info} `}</span>
                        </div>
                    ) : (
                        <Link href={path} className="flex flex-row gap-x-5 ">
                            <p className="hover:underline">{name}</p>
                            <span className="">/</span>
                        </Link>
                    )}
                </li>
            ))}
        </div>
    )
}

