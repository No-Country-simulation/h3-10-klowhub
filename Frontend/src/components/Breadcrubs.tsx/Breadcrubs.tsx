import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs"
import Link from "next/link";


export function Breadcrumbs() {

    const breadcrumbs = useBreadcrumbs();

    

    return (
        <div className=" max-w-7xl ml-10 flex flex-row mb-[48px]">
            <nav className="mb-5 mt-4">
                <ol className="flex flex-row">
                    {breadcrumbs?.map(({ name, path, isLast }) => (
                        <li key={path} className="flex flex-row items-center w-full ">
                            <p className="mx-2"></p>
                            {isLast ? (
                                <div className="flex flex-row ">
                                    <span className="font-bold">{` ${name.charAt(0).toUpperCase()}${name.slice(1)}`}</span>
                                </div>
                            ) : (
                                <Link href={path} className="flex flex-row gap-x-5 ">
                                    <p className="hover:underline">{name}</p>
                                    <span className="">/</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}

