import { Footer } from "@/components/Layout/Footer"
import { Header } from "@/components/Layout/Header"


export default function Home({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="min-h-[100vh] grid grid-rows-[auto_1fr_auto]">
            <Header />
            {children}
            <Footer />
        </section>
    )
}