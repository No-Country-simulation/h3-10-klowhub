import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { detalles } from "@/mock/db";

export default function Home() {

  const base = detalles

  return (
    <>
      <Header />
      <main className="h-screen ">
        <h1>Bienvenido</h1>
      </main>
      <Footer />
    </>
  );
}
