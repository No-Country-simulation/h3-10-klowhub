import { Details_Course } from "@/components/Details_Course/Details_Course";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { detalles } from "@/mock/db";

export default function Home() {

  const base = detalles

  return (
    <>
      <Header />
      <main className="h-screen ">
        {base.map((items) => {
          return <Details_Course datos={items} key={items.id} />
        })}
      </main>
      <Footer />
    </>
  );
}
