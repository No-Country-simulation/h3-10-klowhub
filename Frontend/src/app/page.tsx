"use client";

import Banner from "@/components/Banner/Banner";
import { courseCard } from "@/mock/db";
import { useEffect, useState } from "react";
import CardCourse from "@/components/Card_Course/Card_Course";
import BannerMentores from "@/components/MentoresComp/Banner/BannerMentores";
import CardMentoresComponent from "@/components/MentoresComp/Card_Component";
import { db as mentors } from "@/mock/db";

export default function Home() {
  const [visibleCountAPP, setVisibleCountAPP] = useState(4);
  const [visibleCountCourse, setVisibleCountCourse] = useState(3);
  const [Card_Curso, setCurso] = useState([]);

  // Función para cargar más elementos
  const handleShowMoreAPP = () => {
    setVisibleCountAPP((prevCount: number) => prevCount + 4);
  };
  const handleShowMoreCourse = () => {
    setVisibleCountCourse((prevCount: number) => prevCount + 4);
  };
  const base = courseCard;

  useEffect(() => {
    fetch(
      "https://knowhub-api-production.up.railway.app/courses?page=1&limit=4",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((date) => setCurso(date));
    console.log(Card_Curso);
  }, [Card_Curso]);

  return (
    <div>
      <div className="m-8">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
          <Banner
            backgroundImage="/Fondos_img/BackgroundBanner2.png"
            classes=""
            title="Aprende en KlowHub"
            redirectTo="/"
          />
          <Banner
            backgroundImage="/Fondos_img/BackgroundBanner2.png"
            classes=""
            title="Encuentra Aplicaciones"
            redirectTo="/"
          />
          <Banner
            backgroundImage="/Fondos_img/BackgroundBanner2.png"
            classes=""
            title="Publica Proyectos"
            redirectTo="/"
          />
          <Banner
            classes=""
            title="Aprende en KlowHub"
            redirectTo="/"
            backgroundImage="/Fondos_img/BackgroundBanner2.png"
          />
        </div>
        <section className="mt-8">
          <h2 className="font-bold text-xl lg:text-5xl min-[1365px]:text-2xl">
            Cursos Recomendados
          </h2>
          <p className="mt-4 mb-8 text-sm lg:text-[14px]">
            Descubre los cursos más destacados y lleva tus habilidades al
            siguiente nivel. Aprende de expertos y aplica tus conocimientos en
            proyectos reales con AppSheet.
          </p>
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            }}
          >
            {Card_Curso.map((item, index) => (
              <CardCourse course={item} key={index} />
            ))}
          </div>
        </section>
        <div className="w-full flex justify-center">
          {visibleCountCourse < base.length && (
            <button
              onClick={handleShowMoreCourse}
              className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900"
            >
              Mostrar más
            </button>
          )}
        </div>

        <section className="mt-8">
          <h2 className="font-bold text-xl lg:text-3xl">
            Aplicaciones Recomendadas
          </h2>
          <p className="mt-4 mb-2 text-sm lg:text-md font-inter">
            Explorá soluciones listas para usar. Encontrá la app perfecta para
            tu proyecto y empezá a trabajar de inmediato.
          </p>

          <div className="w-full flex justify-center">
            {visibleCountAPP < base.length && (
              <button
                onClick={handleShowMoreAPP}
                className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900"
              >
                Mostrar más
              </button>
            )}
          </div>
        </section>
        <section className="mt-8">
          <BannerMentores
            backgroundImage="/Fondos_img/BackgroundBanner2.png"
            title="Conecta con Expertos"
            redirectTo=""
            classes="mb-10"
          />
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.map((mentor) => (
              <CardMentoresComponent key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
