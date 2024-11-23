'use client'
import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";

import { usePathname } from "next/navigation";

export default function Home() {


    return (
        <main className="container">
            <Header />
            <main>

            </main>
            <Footer />
        </main>
    )
}