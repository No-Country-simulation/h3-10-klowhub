'use client'
import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {

    const breadcrumbs = useBreadcrumbs();

    const pathname = usePathname();
    const segments = pathname?.split('/').filter(Boolean);
    return (
        <main className="container">
            <Header />
            <main>
                <div className="mb-20 mt-20">
                    {breadcrumbs?.map(({ name, path, isLast }) => (
                        <li key={path} className="flex items-center">
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
                </div>
            </main>
            <Footer />
        </main>
    )
}